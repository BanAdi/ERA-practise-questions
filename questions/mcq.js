window.registerTopic("MCQ",
    [
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
      {
        question:
          "Wie lautet die binaere Repraesentation der Zahl -1 in 8-Bit Zweierkomplementdarstellung?",
        options: ["1000 0001", "0000 0001", "1111 1111", "1111 1110"],
        correctOptionIndexes: [2],
        answer: "1111 1111",
      },
      {
        question:
          "Welcher Wert ergibt sich, wenn Sie die Zahl 1000 0000 als 8-Bit signed char (Zweierkomplement) interpretieren?",
        options: ["128", "0", "-128", "-1"],
        correctOptionIndexes: [2],
        answer: "-128",
      },
      {
        question:
          "Welcher Wert ergibt sich, wenn Sie die Zahl 1000 0000 als 8-Bit unsigned char interpretieren?",
        options: ["128", "256", "1", "127"],
        correctOptionIndexes: [0],
        answer: "128",
      },
      {
        question:
          "Was ist ein charakteristisches Merkmal der Von-Neumann-Architektur?",
        options: [
          "Getrennte Speicher fuer Befehle und Daten (Harvard)",
          "Gemeinsamer Speicher fuer Befehle und Daten",
          "Verwendung von VLIW (Very Long Instruction Word)",
          "Verzicht auf ein Steuerwerk",
        ],
        correctOptionIndexes: [1],
        answer: "Gemeinsamer Speicher fuer Befehle und Daten",
      },
      {
        question: "Was versteht man unter dem Von-Neumann-Flaschenhals?",
        options: [
          "Die begrenzte Anzahl an Registern im Prozessor",
          "Die langsame Taktfrequenz alter Prozessoren",
          "Die Limitierung der Datenuebertragungsrate zwischen CPU und Speicher",
          "Die fehlende Unterstuetzung fuer Gleitkommazahlen",
        ],
        correctOptionIndexes: [2],
        answer:
          "Die Limitierung der Datenuebertragungsrate zwischen CPU und Speicher",
      },
      {
        question:
          "Welche Eigenschaft trifft typischerweise auf CISC-Architekturen (im Vergleich zu RISC) zu?",
        options: [
          "Variable Befehlslaenge und komplexe Instruktionen",
          "Load-Store-Architektur (typisch fuer RISC)",
          "Sehr viele Register (z.B. > 100)",
          "Einheitliches Befehlsformat (typisch fuer RISC)",
        ],
        correctOptionIndexes: [0],
        answer: "Variable Befehlslaenge und komplexe Instruktionen",
      },
      {
        question:
          "Welches Register hat in der RISC-V Architektur (RV32I) immer den Wert 0?",
        options: ["x1 (ra)", "x2 (sp)", "x31 (t6)", "x0 (zero)"],
        correctOptionIndexes: [3],
        answer: "x0 (zero)",
      },
      {
        question:
          "Wie viele Bits umfasst der Standard-ASCII-Code zur Kodierung eines Zeichens?",
        options: ["8 Bit", "7 Bit", "16 Bit", "32 Bit"],
        correctOptionIndexes: [1],
        answer: "7 Bit",
      },
      {
        question:
          "Mit welchem logischen Gatter laesst sich jede beliebige boolesche Funktion realisieren (funktionale Vollstaendigkeit)?",
        options: ["AND", "OR", "XOR", "NAND"],
        correctOptionIndexes: [3],
        answer: "NAND (oder NOR)",
      },
      {
        question: "Was passiert bei einem Data Hazard (Datenkonflikt) in einer Pipeline?",
        options: [
          "Der Befehlszaehler (PC) wird auf 0 gesetzt.",
          "Ein Befehl springt an eine falsche Adresse.",
          "Ein Befehl benoetigt das Ergebnis eines vorherigen Befehls, das noch nicht verfuegbar ist.",
          "Zwei Befehle versuchen gleichzeitig in den Speicher zu schreiben.",
        ],
        correctOptionIndexes: [2],
        answer:
          "Ein Befehl benoetigt das Ergebnis eines vorherigen Befehls, das noch nicht verfuegbar ist.",
      },
      {
        question:
          "Welcher RISC-V Befehl eignet sich am besten, um den Inhalt eines Registers t0 mit 4 zu multiplizieren (unsigned)?",
        options: [
          "addi t0, t0, 4",
          "div t0, t0, 4",
          "slli t0, t0, 2",
          "srli t0, t0, 2",
        ],
        correctOptionIndexes: [2],
        answer: "slli t0, t0, 2",
      },
      {
        question: "Was bedeutet Little-Endian Speicherung?",
        options: [
          "Das hoechstwertige Byte (MSB) steht an der niedrigsten Adresse.",
          "Das niedrigstwertige Byte (LSB) steht an der niedrigsten Adresse.",
          "Daten werden immer in 4-Byte-Bloecken gespeichert.",
          "Befehle werden rueckwaerts ausgefuehrt.",
        ],
        correctOptionIndexes: [1],
        answer: "Das niedrigstwertige Byte (LSB) steht an der niedrigsten Adresse.",
      },
      {
        question:
          "Wie gross ist der Adressraum bei einer 32-Bit-Architektur (ohne Erweiterungen)?",
        options: ["2 GiB", "4 GiB (2^32 Byte)", "8 GiB", "16 EiB"],
        correctOptionIndexes: [1],
        answer: "4 GiB (2^32 Byte)",
      },
      {
        question: "Welche Aussage zur Calling Convention in RISC-V ist korrekt?",
        options: [
          "Alle Register muessen vom Aufrufer (Caller) gesichert werden.",
          "Register sp (Stack Pointer) darf nach Belieben veraendert werden und muss nicht zurueckgesetzt werden.",
          "Callee-saved Register (z.B. s0-s11) muessen von der aufgerufenen Funktion wiederhergestellt werden, falls sie veraendert wurden.",
          "Rueckgabewerte werden im Register ra gespeichert.",
        ],
        correctOptionIndexes: [2],
        answer:
          "Callee-saved Register muessen von der aufgerufenen Funktion wiederhergestellt werden.",
      },
      {
        question: "Was ist der Hauptzweck eines Caches in modernen Rechnerarchitekturen?",
        options: [
          "Die dauerhafte Speicherung von Daten (wie eine Festplatte).",
          "Die Erhoehung der Anzahl verfuegbarer Register fuer die ALU.",
          "Die Ueberbrueckung des Geschwindigkeitsunterschieds (Latenz) zwischen schneller CPU und langsamem Hauptspeicher.",
          "Die Vereinfachung der Assembler-Programmierung.",
        ],
        correctOptionIndexes: [2],
        answer:
          "Die Ueberbrueckung des Geschwindigkeitsunterschieds zwischen CPU und Hauptspeicher.",
      },
      {
        question:
          "Welche der folgenden Aussagen zur Cache-Speicherverwaltung sind korrekt?",
        options: [
          "In einem voll-assoziativen Cache treten Konfliktfehler (Conflict Misses) haeufig auf.",
          "Ein Write-Back Cache schreibt Daten erst beim Ersetzen der Cache-Zeile in den Hauptspeicher zurueck.",
          "Compulsory Misses (Kaltstartfehler) lassen sich durch Vergroesserung des Caches nicht verhindern.",
          "Ein direkt abbildender Cache (Direct Mapped) benoetigt mehr Vergleicher als ein 2-fach assoziativer Cache.",
          "Bei einem N-fach satz-assoziativen Cache bestimmen die Index-Bits, in welches Set (Satz) eine Adresse abgebildet wird.",
        ],
        correctOptionIndexes: [1, 2, 4],
        answer:
          "Write-Back schreibt erst beim Ersetzen zurueck; Compulsory Misses sind unvermeidbar; Index-Bits bestimmen das Set.",
      },
      {
        question:
          "Welche Aussagen zu Pipeline-Konflikten (Hazards) in der behandelten 5-stufigen RISC-V Pipeline sind zutreffend?",
        options: [
          "Data Hazards entstehen durch Datenabhaengigkeiten zwischen Befehlen (z.B. Read-After-Write).",
          "Write-After-Read (WAR) Abhaengigkeiten fuehren in dieser Pipeline zu Konflikten.",
          "Das Einfuegen von NOPs (Stalling) ist eine moegliche Software/Compiler-Loesung fuer Data Hazards.",
          "Control Hazards entstehen durch Aenderungen des Kontrollflusses (z.B. bei Spruengen).",
          "Forwarding (Bypassing) kann jeden Data Hazard vollstaendig aufloesen, ohne dass der Prozessor angehalten werden muss.",
        ],
        correctOptionIndexes: [0, 2, 3],
        answer:
          "Data Hazards durch Abhaengigkeiten; Stalling ist eine Loesung; Control Hazards durch Spruenge.",
      },
      {
        question:
          "Welche der folgenden Mengen an booleschen Operatoren sind funktional vollstaendig? (Konstanten 0 und 1 sind nicht automatisch verfuegbar)",
        options: ["{NAND}", "{NOR}", "{AND,OR}", "{AND,NOT}", "{XOR,1}"],
        correctOptionIndexes: [0, 1, 3],
        answer: "NAND; NOR; AND + NOT.",
      },
      {
        question:
          "Betrachten Sie die RISC-V Calling Convention. Welche Aussagen sind wahr?",
        options: [
          "Die Register s0 bis s11 sind Callee-saved (muessen von der aufgerufenen Funktion erhalten werden).",
          "Die Register t0 bis t6 muessen vom Aufrufer (Caller) nicht gesichert werden, wenn er ihre Werte nach dem Aufruf noch benoetigt.",
          "Das Register ra (Return Address) enthaelt die Ruecksprungadresse und wird vom Befehl jal (Jump and Link) aktualisiert.",
          "Der Stack Pointer sp ist ein Callee-saved Register.",
          "Funktionsargumente werden vorrangig ueber den Stack uebergeben.",
        ],
        correctOptionIndexes: [0, 2, 3],
        answer:
          "s0-s11 sind Callee-saved; ra enthaelt Ruecksprungadresse; sp ist Callee-saved.",
      },
      {
        question:
          "Welche Eigenschaften treffen auf BDDs (Binary Decision Diagrams) zu?",
        options: [
          "Ein reduziertes, geordnetes BDD (ROBDD) ist eine kanonische Darstellung einer booleschen Funktion (bei fester Variablenordnung).",
          "Die Groesse eines BDDs ist unabhaengig von der gewaehlten Variablenordnung.",
          "BDDs koennen verwendet werden, um die Erfuellbarkeit (SAT) einer Formel zu pruefen.",
          "Jeder Pfad von der Wurzel zu einem Terminalknoten (0 oder 1) entspricht einer Variablenbelegung.",
          "BDDs bestehen hauptsaechlich aus OR- und NOT-Gattern.",
        ],
        correctOptionIndexes: [0, 2, 3],
        answer:
          "ROBDD ist kanonisch; SAT-Pruefung ist moeglich; Pfade entsprechen Belegungen.",
      },
    ]
);
