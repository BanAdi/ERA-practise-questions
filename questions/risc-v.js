window.registerTopic("RISC-V",
  [
    {
      question: `Aufgabe - RISC-V Basics (10 Punkte)

Nehmen Sie fuer die folgenden Aufgaben an, dass ein short 16-Bit und ein int 32-Bit gross ist. Ausserdem seien die Register im Prozessor 32-Bit gross.

Gegeben sei folgendes RISC-V Unterprogramm mystery, das zwei Argumente entgegennimmt:

mystery:
li   t0, 1
sll  t0, t0, a1
addi t0, t0, -1
and  a0, a0, t0
ret

a) Sei a0 := 0b1001 1101 und a1 := 0b11. Welche Binaerzahl (ohne fuehrende Nullen) gibt mystery zurueck?

b) Welche mathematische Operation setzt mystery um?

c) Gegeben sei folgender C-Code:

int calc(short arr[], unsigned int idx)
{
  return arr[idx] * 43;
}

Übersetzen Sie calc in RISC-V Assembly.

d) Schreiben Sie ein RISC-V Unterprogramm extend, das einen 16-Bit Eingabewert auf 32-Bit sign-extended. Der Eingabewert liegt in den unteren 16 Bits des Registers.
Hinweis: Die Musterloesung kommt mit insgesamt 4 Zeilen aus.`,
      answer: `a) 101
b) a0 mod 2^a1 (aequivalent: a0 & (2^a1 - 1))

c) calc:
   slli t0, a1, 1
   add  t0, a0, t0
   lh   t1, 0(t0)
   li   t2, 43
   mul  a0, t1, t2
   ret

d) extend:
   slli a0, a0, 16
   srai a0, a0, 16
   ret`,
    },
    {
      question: `Aufgabe - RISC-V String-Unterprogramme

a) Schreiben Sie ein RISC-V Unterprogramm to_upper, welches einen Pointer auf einen beliebigen NULL-terminierten String uebergeben bekommt und alle Buchstaben in diesem String in Grossbuchstaben umwandelt.
to_upper:
_________
; Laden eines Chars

; Testen, ob am Ende angekommen und ggf. Sprung

; Testen ob Kleinbuchstabe und Sprung falls nicht

; in Großbuchstaben umwandeln

; Abspeichern

; Pointer inkrementieren und Sprung


b) Schreiben Sie ein RISC-V Unterprogramm strncpy(char* src, char* dst, int n), welches die ersten n chars von src nach dst kopiert. Falls src kuerzer als n ist, soll die Funktion fruehzeitig terminieren. Stellen Sie sicher, dass dst danach NULL-terminiert ist.
strncpy:
; Laden eines Chars
; Testen, ob am Ende angekommen
; Falls nicht, kopieren
;Pointer und n anpassen
; Sprung
; return (schon NULL-terminiert?)

c) Schreiben Sie ein RISC-V Unterprogramm strncpy_and_to_upper(char* src, char* dst, int n), das zuerst strncpy ausfuehrt und danach to_upper auf dst aufruft.
strncpy_and_to_upper:
; Vorbereitung für Aufruf
; strncpy aufrufen
; Vorbereitung für to_upper
; to_upper aufrufen
;return

Hinweis: Nutzen Sie die ASCII-Tabelle aus der Abbildung.`,
      imageSrc: "ascii-table.png",
      imageAlt: "ASCII table reference",
      answer: `a) to_upper
to_upper:
    lbu t0, 0(a0)
    beq t0, zero, return
    li  t1, 0x61
    blt t0, t1, cont
    li  t1, 0x7A
    bgt t0, t1, cont
    addi t0, t0, -32
    sb  t0, 0(a0)
cont:
    addi a0, a0, 1
    j    to_upper
return:
    ret

b) strncpy
strncpy:
    lb  t0, 0(a0)
    beq t0, zero, finish
    beq a2, zero, finish
    sb  t0, 0(a1)
    addi a0, a0, 1
    addi a1, a1, 1
    addi a2, a2, -1
    j strncpy
finish:
    sb  zero, 0(a1)
    ret

c) strncpy_and_to_upper
strncpy_and_to_upper:
    addi sp, sp, -16
    sw   a1, 0(sp)
    sw   ra, 4(sp)
    call strncpy
    lw   a0, 0(sp)
    call to_upper
    lw   ra, 4(sp)
    addi sp, sp, 16
    ret`,
    },
    {
      question: `Aufgabe 2 - RISC-V Basics (6 Punkte)

a) Nennen Sie 4 Instruktionen inkl. Argumente, die das Register t0 nullen. Benutzen Sie keine Pseudoinstruktionen und verwenden Sie jede Instruktion nur einmal.

b) Gegeben sei folgender C-Code:

char calc(char a, char b, char c, char d, char e, char f, char g, char h, char i, char k) {
  return c + f;
}

char calc2(char a, char b, char c, char d, char e, char f, char g, char h, char i, char k) {
  return e + k;
}

Uebersetzen Sie calc in RISC-V Assembly und beachten Sie die Calling Convention.
Vordruck:
calc:
add  __, __, __
andi __, __, 0xff
ret

c) Warum ist die Anwendung der Bitmaske 0xff vor dem Return noetig?

d) Implementieren Sie calc2 in RISC-V Assembly.`,
      answer: `a) Beispiele (jeweils einmal):
- addi t0, zero, 0
- add  t0, zero, zero
- and  t0, zero, zero
- andi t0, zero, 0

b) calc:
calc:
    add  a0, a2, a5
    andi a0, a0, 0xff
    ret

c) Grund fuer 0xff:
Damit ein char (8-Bit) zurueckgegeben wird und hoehere Bits (z.B. nach Overflow) abgeschnitten werden.

d) calc2:
calc2:
    lbu  a5, 4(sp)
    add  a0, a4, a5
    andi a0, a0, 0xff
    ret`,
    },
  ]
);
