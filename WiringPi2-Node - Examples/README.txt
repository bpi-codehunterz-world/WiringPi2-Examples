Um eine LED auf deinem Banana Pi M2 Berry mit WiringPi2 und Node.js blinken zu lassen, kannst du die folgenden Schritte befolgen:

WiringPi2 installieren:
Stelle sicher, dass WiringPi2 installiert ist:
git clone https://github.com/BPI-SINOVOIP/BPI-WiringPi2
cd BPI-WiringPi2
sudo ./build

Node.js und npm installieren:
Installiere Node.js und npm, falls noch nicht geschehen:
sudo apt-get install nodejs npm

WiringPi-Node installieren:
Installiere die WiringPi-Node Library:
npm install wiringpi-node

LED an GPIO 17 (Pin 11) anschließen:
Verbinde die Anode der LED mit GPIO 17 (Pin 11) und die Kathode über einen 220 Ω Widerstand mit GND (Pin 6).
Node.js-Skript erstellen:
Erstelle ein neues Node.js-Skript, z.B. blink.js, mit folgendem Inhalt:
JavaScript

const wpi = require('wiringpi-node');

wpi.setup('gpio');
const pin = 0; // GPIO 17 entspricht WiringPi Pin 0
wpi.pinMode(pin, wpi.OUTPUT);

setInterval(() => {
    const value = wpi.digitalRead(pin);
    wpi.digitalWrite(pin, value === wpi.HIGH ? wpi.LOW : wpi.HIGH);
}, 500); // Blinkt alle 500ms
AI-generated code. Review and use carefully. More info on FAQ.
Skript ausführen:
Führe das Skript aus:
node blink.js