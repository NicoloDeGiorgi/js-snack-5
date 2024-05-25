'use strict';

//array iniziale
const numeriDispari = [];

for (let i = 0; i < 6; i++) {
    const input = Number(prompt('Inserisci un numero'));

    if (!isNaN(input)) {
        if (input % 2 !== 0) {
            numeriDispari.push(input);
        }
    }
}

//array finale
console.log(numeriDispari);