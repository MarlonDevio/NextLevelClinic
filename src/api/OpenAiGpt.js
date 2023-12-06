import OpenAI from "openai";

// console.log(import.meta.env.VITE_OPENAI_API_KEY);

// console.log(OPENAI_API_KEY);
class OpenAiGpt {
  _question;
  _answer;
  openai;

  constructor(question) {
    this.setQuestion = question;
    this._answer = null;
    this.openai = new OpenAI({
      apiKey: import.meta.env.VITE_OPENAI_API_KEY,
      dangerouslyAllowBrowser: true,
    });
  }

  set setQuestion(question) {
    // Check if the question is valid and then set it
    this._question = question;
  }

  get getQuestion() {
    return this._question;
  }

  get getAnswer() {
    return this._answer;
  }

  set setAnswer(answer) {
    this._answer = answer;
  }

  async generateAnswer() {
    try {
      const chat = await this.openai.chat.completions.create({
        model: "gpt-4-1106-preview",
        messages: [
          {
            role: "system",
            content: `
Je bent een voedingsexpert, gespecialiseerd in het opstellen van gepersonaliseerde voedingsschema's. 
Gebruik de gegevens van een persoon, inclusief gewicht, BMI, en specifieke gezondheids- en fitnessdoelen, om een gedetailleerd voedingsschema te ontwikkelen. Het schema moet rekening houden met calorie-inname, macronutriëntenverdeling (eiwitten, koolhydraten, vetten), en moet ook suggesties voor maaltijden en snacks bevatten die passen bij hun doelen. Het schema moet flexibel en realistisch zijn, met opties voor verschillende voedingsvoorkeuren of -beperkingen. Zorg ervoor dat het voedingsschema goed onderbouwd is en in lijn met algemene voedingsrichtlijnen
Belangrijk:
- Baseer de calorie-inname op de BMI en het doel van de gebruiker (bijvoorbeeld afvallen, spieropbouw). Gebruik een lagere calorie-inname voor gewichtsverlies en een hogere voor spieropbouw, aangepast aan de BMI.
- Houd rekening met de smaakvoorkeuren van de gebruiker en vervang deze door gezonde alternatieven.
- Inclusief maaltijdopties die gevarieerd, voedzaam en aantrekkelijk zijn.
- Verstrek suggesties voor ontbijt, lunch, diner en tussendoortjes.
- Gebruik het volgende formaat voor je antwoord:
        {
            "voedingsschema": {
              "naam": "[Naam]",
              "BMI": "[BMI]",
              "smaakvoorkeuren": "[Smaakvoorkeuren]",
              "doelen": "[Doelen]",
              "maaltijden": [
                {
                  "ontbijt": {
                    "calorieen": "[aantal calorieën]",
                    "opties": [
                      "[Ontbijt Optie 1]",
                      "[Ontbijt Optie 2]",
                      "[Ontbijt Optie 3]"
                    ]
                  }
                },
                {
                  "lunch": {
                    "calorieen": "[aantal calorieën]",
                    "opties": [
                      "[Lunch Optie 1]",
                      "[Lunch Optie 2]",
                      "[Lunch Optie 3]"
                    ]
                  }
                },
                {
                  "diner": {
                    "calorieen": "[aantal calorieën]",
                    "opties": [
                      "[Diner Optie 1]",
                      "[Diner Optie 2]",
                      "[Diner Optie 3]"
                    ]
                  }
                },
                {
                  "tussendoortjes": {
                    "frequentie": "[frequentie]",
                    "tijdstip": "[tijdstip]",
                    "calorieen": "[aantal calorieën]",
                    "opties": [
                      "[Snack Optie 1]",
                      "[Snack Optie 2]",
                      "[Snack Optie 3]"
                    ]
                  }
                }
              ]
            }
          }`,
          },

          {
            role: "user",
            content: ` Gebruik het volgende formaat voor je antwoord
                {
                  "voedingsschema": {
                    "naam": "${this.getQuestion.name}",
                    "BMI": "${this.getQuestion.bmi}",
                    "bmiClassification": "${this.getQuestion.classification}"
                    "age": "${this.getQuestion.age}",
                    "weight": "${this.getQuestion.weight}",
                    "height": "${this.getQuestion.height}",
                    "gender": "${this.getQuestion.gender}", 
                    "smaakvoorkeuren": "${this.getQuestion.voorkeurVoedingSmaak}",
                    "doelen": "${this.getQuestion.doelen}",
                    "maaltijden": [
                      {
                        "ontbijt": {
                          "calorieen": "[aantal calorieën]",
                          "opties": [
                            "[Ontbijt Optie 1]",
                            "[Ontbijt Optie 2]",
                            "[Ontbijt Optie 3]"
                          ]
                        }
                      },
                      {
                        "lunch": {
                          "calorieen": "[aantal calorieën]",
                          "opties": [
                            "[Lunch Optie 1]",
                            "[Lunch Optie 2]",
                            "[Lunch Optie 3]"
                          ]
                        }
                      },
                      {
                        "diner": {
                          "calorieen": "[aantal calorieën]",
                          "opties": [
                            "[Diner Optie 1]",
                            "[Diner Optie 2]",
                            "[Diner Optie 3]"
                          ]
                        }
                      },
                      {
                        "tussendoortjes": {
                          "frequentie": "[frequentie]",
                          "tijdstip": "[tijdstip]",
                          "calorieen": "[aantal calorieën]",
                          "opties": [
                            "[Snack Optie 1]",
                            "[Snack Optie 2]",
                            "[Snack Optie 3]"
                          ]
                        }
                      }
                    ]
                  }
                }
                
                LET OP: Enkel en alleen het JSON formaat antwoorden exact zoals gevraagd. GEEN bijkomende info of overige tekst.`,
          },
        ],
        temperature: 0.8,
        top_p: 0.9,
      });
      console.log(chat.choices[0]);
      this.setAnswer = chat.choices[0].message.content;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default OpenAiGpt;
