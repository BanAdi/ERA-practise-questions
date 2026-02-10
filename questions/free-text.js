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
  ]
);
