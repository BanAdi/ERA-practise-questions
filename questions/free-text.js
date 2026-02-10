window.registerTopic("Free-Text",
  [
    {
      question: `Aufgabe 5 - Caches & Speedup (7 Punkte)

Gegeben sei ein Programm mit 5 * 10^9 Instruktionen, das Sie auf einem in-order execution Prozessor mit einer Frequenz von 1.0 GHz ausfuehren. Dieser brauche (exklusive Speicherzugriffe) durchschnittlich 2 Zyklen pro Instruktion. Jede Instruktion generiere dabei durchschnittlich 1.5 Speicherzugriffe, von jeder im Durchschnitt 50 ns brauche.

a)
Wie lautet die Formel fuer die Ausfuehrungszeit (CPU Time)? Wenn Sie die Average Memory Access Time benutzen, geben Sie ebenfalls die Formel fuer diese an.

b)
Berechnen Sie die Ausfuehrungszeit unter den oben angegebenen Bedingungen.

c)
Beschriften Sie mit den englischsprachigen Fachbegriffen.
Hinweis: Die Begriffe beschreiben jeweils Zeiten.
Zu beschriften sind:
- (1)+(2)
- (3)+(4)
- (1)+(2)+(3)+(4)`,
      imageSrc: "CPU-Structure.png",
      imageAlt: "CPU structure timing diagram",
      answer: `a) Formeln

CPU Time:
T_CPU = IC * (CPI/f + MemAccPerInstr * AMAT)

AMAT:
AMAT = HitRate * HitTime + MissRate * MissPenalty
(aequivalent: AMAT = HitTime + MissRate * MissPenalty)

b) Rechnung

Gegeben:
IC = 5 * 10^9
f = 1.0 GHz = 10^9 cycles/s
CPI = 2
MemAccPerInstr = 1.5
Average Memory Access Time = 50 ns = 50 * 10^-9 s

T_base = IC * CPI/f
       = 5*10^9 * 2/10^9
       = 10 s

T_mem = IC * 1.5 * 50 ns
      = 5*10^9 * 1.5 * 50*10^-9
      = 375 s

T_CPU = T_base + T_mem = 10 + 375 = 385 s

Antwort: 385 s

c) Beschriftung
(1)+(2) = Hit latency (hit time)
(3)+(4) = Miss penalty
(1)+(2)+(3)+(4) = Miss latency (miss time)`,
    },
    {
      question:
        "f) Welche Binaerzahl erhalten Sie, wenn Sie die Zahl 1011 0100 (interpretiert als 8-Bit signed char) durch 4 teilen?",
      answer: "1110 1101",
    },
    {
      question: "g) Nennen Sie alle Werke der Von-Neumann-Architektur.",
      answer: "Speicher-Werk, Rechen-Werk, Leit-Werk, E/A-Werk",
    },
    {
      question:
        "h) Nennen und erklaeren Sie kurz einen Vorteil einer Einadressmaschine (Akkumulatormaschine).",
      answer: `Moegliche Vorteile:
- Einfach, da Ergebnis immer an gleicher Stelle liegt und direkt fuer Folgeoperationen nutzbar ist.
- Einfaches Instruktionsformat, da weniger Operanden kodiert werden muessen.
- Einfacher und guenstiger zu bauen, da der Akkumulator direkt an die ALU angebunden ist.`,
    },
    {
      question:
        "i) Nennen und erklaeren Sie kurz einen Nachteil einer Einadressmaschine (Akkumulatormaschine).",
      answer: `Moegliche Nachteile:
- Unflexibel, da der Akkumulator oft geladen/gespeichert werden muss.
- Schwieriger bzw. unintuitiver zu programmieren, da Ziel- und Quelloperand stark vorgegeben sind.`,
    },
    {
      question: "j) Nennen Sie 3 Hauptklassen von Befehlen in einer ISA.",
      answer: `Arithmetisch/logische Operationen, Datentransfer (Load/Store), Steuerung des Programmablaufs (Spruenge).
Haefig ebenfalls genannt: Systembefehle/Interrupts.`,
    },
    {
      question:
        "k) Ist eine klare Trennung zwischen RISC- und CISC-Architekturen heutzutage moeglich? Begruenden Sie.",
      answer:
        "Nein. In der Praxis verschwimmen die Grenzen: CISC-Architekturen nutzen oft RISC-aehnliche Kerne, und RISC-Erweiterungen koennen CISC-artige Merkmale haben.",
    },
    {
      question:
        "l) Welchen Vorteil hat das MESI-Protokoll gegenueber MSI durch den E-Zustand?",
      answer:
        "E steht fuer Exclusive. Bei exklusiv gehaltenen Daten kann ein Upgrade ohne unnoetige Bus-Interaktion erfolgen, wodurch Zugriffe schneller werden und Busverkehr sinkt.",
    },
    {
      question: "m) Wann wird ein Cache als kohaerent bezeichnet?",
      answer:
        "Wenn gemeinsam gehaltene Daten ueber alle Caches hinweg konsistent/synchron erscheinen, also ein Zugriff keine widerspruechlichen Versionen liefert.",
    },
    {
      question:
        "n) Wann wird ein paralleles System als sequentiell konsistent bezeichnet?",
      answer:
        "Wenn die parallele Ausfuehrung dasselbe Ergebnis liefert wie eine bestimmte (feste) sequentielle Reihenfolge der Operationen.",
    },
  ]
);
