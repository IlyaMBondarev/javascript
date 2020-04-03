'use strict';

function getDigits() {

    const empty = {};
    const digits = {
        units: 0,
        tens: 0,
        hundreds: 0,

        getUnits(number) {
            this.units = number%10;
        },
        getTens(number) {
            this.tens = Math.floor((number%100)/10);
        },
        getHundreds(number) {
            this.hundreds = Math.floor(number/100);
        }
    };

    let num = Number(prompt("Введите целое число от 0 до 999"));

    if (isNaN(num) || !Number.isInteger(num) || num > 999 || num < 0) {
        console.log("К сожалению, вы не умеете читать..");
        return empty;
    }

    digits.getUnits(num);
    digits.getTens(num);
    digits.getHundreds(num);
    return digits;
}

let Digits = getDigits();
console.log("Сотни: " + Digits.hundreds);
console.log("Десятки: " + Digits.tens);
console.log("Единицы: " + Digits.units);
