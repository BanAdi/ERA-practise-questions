// Edit this file to add your own topics and questions.
// MCQ format:
// { question, options: [], correctOptionIndexes: [], answer }
// Free-text format:
// { question, answer }
const QUESTION_BANK = [
  {
    topic: "MCQ",
    questions: [
      {
        question:
          "Wie lautet die binaere Repraesentation der Zahl -96 in 16-Bit Zweierkomplementdarstellung?",
        options: [
          "1111 1111 1010 0000",
          "0000 0000 0110 0000",
          "1000 0000 0110 0000",
          "1111 1111 1001 1111",
        ],
        correctOptionIndexes: [0],
        answer: "1111 1111 1010 0000",
      },
      {
        question:
          "Welcher Wert ergibt sich, wenn Sie die Zahl 1110 0110 als 8-Bit unsigned char interpretieren?",
        options: ["230", "131", "59", "102"],
        correctOptionIndexes: [0],
        answer: "230",
      },
      {
        question:
          "Welcher Wert ergibt sich, wenn Sie die Zahl 1110 0110 als 8-Bit signed char interpretieren?",
        options: ["-26", "-126", "116", "25"],
        correctOptionIndexes: [0],
        answer: "-26",
      },
      {
        question:
          "Was wird allein von einer ISA (Instruction Set Architecture) spezifiziert?",
        options: [
          "Adressierungsart",
          "Groesse von Datentypen (z.B. int)",
          "Anzahl der USB-Ports",
          "Aufbau von Binaerdateien",
          "Parameteruebergabe",
          "Prozessortakt",
          "Registeranzahl- und breite",
          "Bildschirmaufloesung",
        ],
        correctOptionIndexes: [0, 6],
        answer: "Adressierungsart und Registeranzahl- und breite",
      },
      {
        question:
          "Welche(n) Vorteil(e) bieten RISC-Architekturen i.d.R. gegenueber CISC-Architekturen?",
        options: [
          "Pipelining wird moeglich",
          "einheitliches Befehlsformat",
          "grosse Anzahl an Instruktionen",
          "groesserer Hauptspeicher",
        ],
        correctOptionIndexes: [1],
        answer: "einheitliches Befehlsformat",
      },
    ],
  },
  {
    topic: "Free-Text",
    questions: [
      {
        question: "Add your first free-text question here.",
        answer: "Add the expected answer here.",
      },
    ],
  },
  {
    topic: "RISC-V",
    questions: [
      {
        question: "Add your first RISC-V question here.",
        answer: "Add the answer here.",
      },
    ],
  },
  {
    topic: "Stack",
    questions: [
      {
        question: "Add your first Stack question here.",
        answer: "Add the answer here.",
      },
    ],
  },
  {
    topic: "Truth Tables",
    questions: [
      {
        question: "Add your first Truth Tables question here.",
        answer: "Add the answer here.",
      },
    ],
  },
  {
    topic: "Logic Gates",
    questions: [
      {
        question: "Add your first Logic Gates question here.",
        answer: "Add the answer here.",
      },
    ],
  },
  {
    topic: "Graphs",
    questions: [
      {
        question: "Add your first Graphs question here.",
        answer: "Add the answer here.",
      },
    ],
  },
  {
    topic: "Circuit Designs",
    questions: [
      {
        question: "Add your first Circuit Designs question here.",
        answer: "Add the answer here.",
      },
    ],
  },
  {
    topic: "Pipelines",
    questions: [
      {
        question: "Add your first Pipelines question here.",
        answer: "Add the answer here.",
      },
    ],
  },
];
