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
    {
      question:
        "o) Welche Binaerzahl erhalten Sie, wenn Sie die Zahl 1110 1000 (als 8-Bit signed char) arithmetisch um 2 Stellen nach rechts shiften?",
      answer:
        "1111 1010 (1110 1000 ist -24, arithmetisch >> 2 ergibt -6, und -6 ist 1111 1010).",
    },
    {
      question:
        "p) Worin liegt der zentrale Unterschied zwischen Von-Neumann- und Harvard-Architektur bezueglich des Speichers?",
      answer:
        "Von-Neumann: gemeinsamer Speicher/Bus fuer Programm und Daten. Harvard: getrennte Speicher/Busse fuer Programm und Daten.",
    },
    {
      question:
        "q) Nennen Sie einen Vorteil einer Nulladressmaschine (Stack-Maschine).",
      answer:
        "Sehr kompaktes Instruktionsformat ohne explizite Operandenadressen; ausserdem gut fuer die Auswertung komplexer Ausdruecke.",
    },
    {
      question:
        "r) Was versteht man in RISC-V unter einer Load/Store-Architektur?",
      answer:
        "Arithmetische/logische Operationen arbeiten nur auf Registern. Speicherzugriffe erfolgen ausschliesslich ueber explizite Load-/Store-Instruktionen.",
    },
    {
      question:
        "s) Nennen Sie zwei typische Nachteile einer CISC-Architektur.",
      answer:
        "Typisch sind aufwendige/langsamere Dekodierung (z.B. variable Befehlslaengen) und erschwertes Pipelining wegen uneinheitlicher Instruktionsdauer.",
    },
    {
      question:
        "t) Beschreiben Sie die Bedeutung des Zustands Modified (M) im MSI-Protokoll.",
      answer:
        "Der Block liegt nur in diesem Cache und ist veraendert (dirty); der Hauptspeicher enthaelt noch einen veralteten Wert.",
    },
    {
      question:
        "u) Welchen Vorteil bietet Write-Back gegenueber Write-Through bei Caches?",
      answer:
        "Write-Back schreibt erst bei Verdraengung zurueck und reduziert dadurch Busverkehr/Hauptspeicherzugriffe deutlich.",
    },
    {
      question: "v) Wozu dient der Program Counter (PC) in einem Prozessor?",
      answer:
        "Der PC haelt die Adresse der naechsten auszufuehrenden Instruktion und steuert damit den Programmablauf (z.B. PC+4 oder Sprungziel).",
    },
    {
      question: `Aufgabe 5 - Cache-Aufgabe (a-e)

a) Wie gross ist der Cache insgesamt (in Byte)?

b) Wie viele Bits fuer Index, Offset, Tag? (16-Bit Adressen, byte-adressierbar)

c) In welchem Cache-Set (ab 0) wird Adresse 0xDEB6 gecached?

d) Nennen Sie einen Vor- und Nachteil von mengenassoziativen Caches gegenueber direct-mapped Caches.

e) Nennen und erklaeren Sie die beiden Lokalitaetsprinzipien.`,
      answer: `a) Cachegroesse
Cache size = #sets * associativity * line size
           = 8 * 4 * 8
           = 256 Byte

b) Bitaufteilung
- Line size = 8 Byte -> Offset = log2(8) = 3 Bits
- #Sets = 8 -> Index = log2(8) = 3 Bits
- Adresse = 16 Bits -> Tag = 16 - 3 - 3 = 10 Bits
Ergebnis: Index = 3, Offset = 3, Tag = 10

c) Adresse 0xDEB6
index = (0xDEB6 >> 3) & 0b111 = 6
Ergebnis: Set 6
Extra: offset = 0xDEB6 & 7 = 6, tag = 0xDEB6 >> 6 = 0x37A

d) Mengenassoziativ vs. direct-mapped
Vorteil: weniger Conflict Misses.
Nachteil: hoehere Hardware-Komplexitaet (mehr Tag-Vergleiche), oft mehr Energiebedarf und potenziell etwas hoehere Hit-Time.

e) Lokalitaet
Temporal locality (zeitlich): kuerzlich genutzte Daten werden bald wieder genutzt.
Spatial locality (raeumlich): nach Zugriff auf Adresse X werden oft nahe Adressen (X+1, X+2, ...) genutzt.`,
    },
  ]
);
