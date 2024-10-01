const wpi = require('wiringpi-node');

wpi.setup('gpio');
const pin = 0; // GPIO 17 entspricht WiringPi Pin 0
wpi.pinMode(pin, wpi.OUTPUT);

setInterval(() => {
    const value = wpi.digitalRead(pin);
    wpi.digitalWrite(pin, value === wpi.HIGH ? wpi.LOW : wpi.HIGH);
}, 500); // Blinkt alle 500ms
