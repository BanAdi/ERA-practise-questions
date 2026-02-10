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
      {
        question:
          "Wie lautet die binaere Repraesentation der Zahl -224 in 16-Bit Zweierkomplementdarstellung?",
        options: [
          "1111 1111 0001 1111",
          "0000 0000 1110 0000",
          "1111 1111 0010 0000",
          "1000 0000 1110 0000",
        ],
        correctOptionIndexes: [2],
        answer: "1111 1111 0010 0000",
      },
      {
        question:
          "Welcher Wert ergibt sich, wenn Sie die Zahl 1010 0001 als 8-Bit unsigned char interpretieren?",
        options: ["119", "253", "61", "161"],
        correctOptionIndexes: [3],
        answer: "161",
      },
      {
        question:
          "Welcher Wert ergibt sich, wenn Sie die Zahl 1010 0001 als 8-Bit signed char interpretieren?",
        options: ["25", "-119", "-95", "31"],
        correctOptionIndexes: [2],
        answer: "-95",
      },
      {
        question:
          "Mit welche(n) Instruktion(en) koennen Sie einen unsigned integer durch eine Zweierpotenz teilen?",
        options: ["slli", "srli", "slti", "srai"],
        correctOptionIndexes: [1],
        answer: "srli (Shift Right Logical Immediate)",
      },
      {
        question:
          "Mit welche(n) Instruktion(en) koennen Sie einen signed integer durch eine Zweierpotenz teilen?",
        options: ["srli", "slti", "slli", "srai"],
        correctOptionIndexes: [3],
        answer: "srai (Shift Right Arithmetic Immediate)",
      },
      {
        question:
          "Mit welche(n) Instruktion(en) koennen Sie einen unsigned integer mit einer Zweierpotenz multiplizieren?",
        options: ["slti", "srai", "slli", "srli"],
        correctOptionIndexes: [2],
        answer: "slli (Shift Left Logical Immediate)",
      },
      {
        question: "Welche Aussagen ueber RISC-V sind korrekt?",
        options: [
          "RISC-V ist quelloffen (open-source).",
          "RISC-V ist eine Load-Store Architektur.",
          "Es gibt eine Instruktion subi, die eine Subtraktion mit einem Immediate durchfuehrt.",
          "Bis jetzt unterstuetzt kein Betriebssystem RISC-V.",
        ],
        correctOptionIndexes: [0, 1],
        answer:
          "RISC-V ist quelloffen und RISC-V ist eine Load-Store Architektur.",
      },
      {
        question: "Was trifft auf den Speicherbereich .data zu?",
        options: [
          "beinhaltet nicht-schreibbare Daten.",
          "beinhaltet schreibbare Daten.",
          "beinhaltet nicht-initialisierte Daten.",
          "beinhaltet initialisierte Daten.",
        ],
        correctOptionIndexes: [1, 3],
        answer:
          "beinhaltet schreibbare Daten und beinhaltet initialisierte Daten.",
      },
      {
        question: "Was trifft auf den Speicherbereich .rodata zu?",
        options: [
          "beinhaltet nicht-schreibbare Daten.",
          "beinhaltet schreibbare Daten.",
          "beinhaltet nicht-initialisierte Daten.",
          "beinhaltet initialisierte Daten.",
        ],
        correctOptionIndexes: [0, 3],
        answer:
          "beinhaltet nicht-schreibbare Daten und beinhaltet initialisierte Daten.",
      },
      {
        question: "Was trifft auf den Speicherbereich .bss zu?",
        options: [
          "beinhaltet nicht-schreibbare Daten.",
          "beinhaltet schreibbare Daten.",
          "beinhaltet initialisierte Daten.",
          "beinhaltet nicht-initialisierte Daten.",
        ],
        correctOptionIndexes: [1, 3],
        answer:
          "beinhaltet schreibbare Daten und beinhaltet nicht-initialisierte Daten.",
      },
      {
        question:
          "Datum 0x76543210 im Speicher (Abb. 1.1: n=10, n+1=32, n+2=54, n+3=76 | Abb. 1.2: n=76, n+1=54, n+2=32, n+3=10): Welche Aussagen sind korrekt?",
        options: [
          "Abbildung 1.2 zeigt das big-endian Format.",
          "Abbildung 1.1 zeigt das big-endian Format.",
          "Abbildung 1.2 zeigt das little-endian Format.",
          "Abbildung 1.1 zeigt das little-endian Format.",
        ],
        correctOptionIndexes: [0, 3],
        answer:
          "Abbildung 1.2 zeigt big-endian und Abbildung 1.1 zeigt little-endian.",
      },
      {
        question:
          "Welche Aussagen ueber die Festkommadarstellung im Vergleich zur Gleitkommadarstellung sind korrekt?",
        options: [
          "funktioniert nur auf x86",
          "groesserer Wertebereich bei gleicher Groesse",
          "fixe Genauigkeit",
          "Addition funktioniert wie bei Ganzzahlen",
        ],
        correctOptionIndexes: [2, 3],
        answer:
          "fixe Genauigkeit und Addition funktioniert wie bei Ganzzahlen.",
      },
      {
        question:
          "Welche Instruktionen sind fuer die Umsetzung folgender for-Schleife unerlaesslich? for (int i = 0; i < 30; ++i) { ... }",
        options: [
          "Systemcalls, z.B. ecall",
          "Multiplikation und Division, z.B. mul, div",
          "ganzzahlige Arithmetik, z.B. add, sub",
          "Rueckkehr in User-Modus, z.B. mret, sret",
          "das Laden von Daten, z.B. lb, lw",
          "Branches, z.B. bge, blt, beq",
          "das Speichern von Daten, z.B. sb, sw",
          "Unterprogrammaufrufe, z.B. jalr, jal",
        ],
        correctOptionIndexes: [2, 5],
        answer: "ganzzahlige Arithmetik und Branches.",
      },
      {
        question:
          "Welche Aussagen ueber die Von-Neumann- und Harvard-Architektur sind korrekt?",
        options: [
          "In der Harvard-Architektur gibt es einen gemeinsamen Speicher fuer Programme und Daten.",
          "In der Von-Neumann-Architektur gibt es einen gemeinsamen Speicher fuer Programme und Daten.",
          "In der Von-Neumann-Architektur gibt es einen getrennten Speicher fuer Programme und Daten.",
          "In der Harvard-Architektur gibt es einen getrennten Speicher fuer Programme und Daten.",
        ],
        correctOptionIndexes: [1, 3],
        answer:
          "Von-Neumann (gemeinsam) und Harvard (getrennt).",
      },
      {
        question:
          "Ordnen Sie zu: 1 betrachtet eine konstante Problemgroesse, 2 betrachtet einen konstanten Zeitabschnitt.",
        options: [
          "1 = Gustafson's law, 2 = Amdahl's law",
          "1 = Gustafson's law, 2 = Moore's law",
          "1 = Amdahl's law, 2 = Gustafson's law",
          "1 = Moore's law, 2 = Gustafson's law",
          "1 = Moore's law, 2 = Amdahl's law",
          "1 = Amdahl's law, 2 = Moore's law",
        ],
        correctOptionIndexes: [2],
        answer: "1 = Amdahl's law, 2 = Gustafson's law.",
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
