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
          { role: "user", content: "BMI 28.40, Overgewicht" },
          {
            role: "assistant",
            content: `
                      Ontbijt (ongeveer 400-500 calorieën):
                      - Een kom havermout gekookt in magere melk of water, met toegevoegd vers fruit zoals bessen of bananen
                      - Een gekookt ei of een portie magere Griekse yoghurt
                      - Een kop groene thee of zwarte koffie

                      Tussendoortje (ongeveer 100-150 calorieën):
                      - Een handvol ongezouten noten, zoals amandelen of walnoten
                      - Een stuk fruit, zoals een appel of sinaasappel

                      Lunch (ongeveer 400-500 calorieën):
                      - Een portie gegrilde kip of vis
                      - Een grote salade met veel groenten zoals spinazie, tomaten, komkommer en paprika, afgemaakt met een vinaigrette van olijfolie en azijn
                      - Een portie volkoren pasta of quinoa

                      Tweede tussendoortje (ongeveer 100-150 calorieën):
                      - Een magere yoghurt met toegevoegd vers fruit
                      - Worteltjes met hummus
                      - Een gekookt ei met een handvol cherrytomaten

                      Diner (ongeveer 400-500 calorieën):
                      - Een portie gegrilde kipfilet
                      - Een portie gestoomde groenten, zoals broccoli, wortelen en bloemkool
                      - Een kleine portie zoete aardappel of zilvervliesrijst

                      Avondsnack (ongeveer 100-150 calorieën):
                      - Een schaaltje magere kwark met vers fruit
                      - Een handjevol ongezouten popcorn
                      - Een stukje pure chocolade
                      `,
          },
          { role: "user", content: "BMI 35, Overgewicht" },
          {
            role: "assistant",
            content: `
Ontbijt (ongeveer 300-350 calorieën):
- Een kom havermout bereid met water, met een klein beetje honing en vers fruit zoals appels of bessen
- Een kop groene thee of zwarte koffie zonder suiker

Tussendoortje (ongeveer 50-100 calorieën):
- Een middelgrote appel of peer
- Een glas water of kruidenthee

Lunch (ongeveer 300-350 calorieën):
- Een salade met gemengde bladgroenten, komkommer, tomaten, een handvol gegrilde kipstukjes en een dressing van citroensap en een beetje olijfolie
- Een glas water of sprankelend water met citroen

Tweede tussendoortje (ongeveer 50-100 calorieën):
- Een portie worteltjes of komkommer met een kleine hoeveelheid hummus
- Een glas water of kruidenthee

Diner (ongeveer 300-350 calorieën):
- Een portie gestoomde vis zoals tilapia of zalm
- Een grote portie gestoomde groenten zoals broccoli, bloemkool en wortelen
- Een kleine portie quinoa of bruine rijst

Avondsnack (ongeveer 50-100 calorieën):
- Een schaaltje Griekse yoghurt met een beetje honing en kaneel
- Een kop kruidenthee of een glas water
`,
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
