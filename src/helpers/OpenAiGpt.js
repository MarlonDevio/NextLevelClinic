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
    this._question =
      question && question.split(" ").length < 10 ? question : null;
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
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "Je bent een expert in het opstellen van voedingsschema's. Ontwerp een gepersonaliseerd voedingsschema" +
              " voor een persoon op basis van hun leeftijd en BMI. Het schema moet de volgende maaltijdstructuur" +
              " behouden: " +
              "- 08u: Ontbijt " +
              "- 10u: Tussendoortje " +
              "- 12u: Lunch " +
              "- 15u: Tweede tussendoortje " +
              "- 18u: Diner " +
              "- 20u: Avondsnack " +
              "Zorg ervoor dat het schema rekening houdt met calorie-inname, macronutriënten, en" +
              " voedingsbalans die geschikt zijn voor de BMI-waarde. Integreer ook de smaakvoorkeuren van de klant in het schema op een gezonde manier. Bijvoorbeeld, als de klant graag frieten eet, hoe zou je dit verwerken in een gezond voedingsschema dat aan hun smaakvoorkeuren voldoet? " +
              "Houd rekening met calorie-inname, macronutriënten, en voedingsbalans die geschikt zijn voor de" +
              " BMI-waarde.",
          },
          { role: "user", content: this.getQuestion },
        ],
      });
      this.setAnswer = chat.choices[0].message.content;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default OpenAiGpt;
