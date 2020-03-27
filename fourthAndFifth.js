'use strict';

// четвертое задание
// "Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
// параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
// и возвращать результат.
// Обязательно использовать оператор return."

// пятое задание
// "Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
// переданного значения операции (использовать switch) выполнить одну из арифметических
// операций
// (использовать функции из задания 4) и вернуть полученное значение."

/**
 * Функция складывает 2 числа
 * @param {number} a первое число
 * @param {number} b второе число
 * @returns {number} результат сложения
 */
function add(a, b) {
    return a + b;
}

/**
 * Функция вычитает из первого числа второе
 * @param {number} a первое число
 * @param {number} b второе число
 * @returns {number} результат вычитания
 */
function difference(a, b) {
    return a - b;
}

/**
 * Функция умножает 2 числа
 * @param {number} a первое число
 * @param {number} b второе число
 * @returns {number} результат умножения
 */
function multiplication(a, b) {
    return a * b;
}

/**
 * Функция делит первое число на второе
 * @param {number} a первое число
 * @param {number} b второе число
 * @returns {number} результат деления
 */
function division(a, b) {
    return a / b;
}

/**
 * Функция определяет необходимую математическую операцию между двумя числами и возвращает результат
 * @param {number} arg1 первое число
 * @param {number} arg2 второе число
 * @param {string} operation математическая операция
 * @returns {number} результат вычисления
 */
function mathOperation(arg1, arg2, operation) {
    operation = operation.toLowerCase();
    switch (operation) {
        case "сложение":
            return add(arg1, arg2);
        case "вычитание":
            return difference(arg1, arg2);
        case "умножение":
            return multiplication(arg1, arg2);
        case "деление":
            return division(arg1, arg2);
        default:
            operation = prompt("Нет такой операции, введите заново:");
            return mathOperation(arg1, arg2, operation);
    }
}

/**
 * Рекурсивная функция проверяет, ввел пользователь число или нет. Если нет - повторяет запрос числа до тех пор, пока его не введут
 * @param {*} arg проверяемое значение
 * @returns {number} в итоге введенное пользователем правильное число
 */
function isNumber(arg) {
    if (isNaN(arg)) {
        arg = +prompt("Нужно ввести именно число!");
        isNumber(arg);
    }
    return arg;
}

a = +prompt("Введите первое число:");
a = isNumber(a); // проверка, число ли ввели
b = +prompt("Введите второе число:");
b = isNumber(b); // проверка, число ли ввели
let op = prompt("Введите нужную операцию:");

let result = mathOperation(a, b, op);
alert("Ваш результат: " + result);
