'use strict';

let questions = ["1. Кто такой Колумб?","2. В каком году распался СССР?","3. Кто сейчас президент России?","4. Когда будет следующее занятие?","5. Чему равен sin(40)?"];
let answers = [
    {a:"а: инженер", b:"b: мореплаватель", c:"c: сантехник", d:"d: мой кореш"},
    {a:"а: в прошлом", b:"b: в 415-м до нашей эры", c:"c: в 1991-м", d:"d: ЛЕНИН ЖИВ!"},
    {a:"а: Путин", b:"b: Медведев", c:"c: император Петр I", d:"d: ЛЕНИН ЖИВ!!!"},
    {a:"a: в пять, пол пятого, десять минут, без шести пять, полшестого", b:"b: в следующей жизни.. когда я стану кошкой", c:"c: после дождичка в четверг", d:"d: после ужина в пятницу"},
    {a:"a: 0", b:"b: 1", c:"c: корень из двух, деленных на два", d:"d: пусть будет 0,74511316047"}];
let rightAnswers = ['b', 'c', 'a', 'd', 'd'];

let game = {
    /**
     * Запускает игру.
     */
    run() {
        let count = 0;
        for (let i = 0; i<questions.length; i++) {
            const check = game.checkAnswer(questions[i], answers[i], rightAnswers[i]);

            if (check === "Отмена") {
                console.log(`Игра завершена! Ваш счет: ${count}`);
                return;
            } else if (check === "1") {
                console.log("Верно!");
                count++;
            } else {
                console.log("К сожалению, неверно.");
            }
           
        }
        console.log(`Игра завершена! Ваш счет: ${count}`);
        let wish = prompt("Напишите 'да', если хотите сыграть еще.");
        wish.toLowerCase();
        if (wish !== "да") {
            console.log("До скорых встреч!");
            return;
        }
        console.clear();
        this.run();
    },

    /**
     * Задает вопрос, говорит варианты ответа, запрашивает ответ и проверяет его правильность
     * @param question вопрос
     * @param answers варианты ответа
     * @param rightAnswer правильный ответ
     * @returns {string}  "1" если верный ответ, "0" если неверный ответ, "Отмена" если пользователь хочет закончить игру
     */
    checkAnswer(question, answers, rightAnswer) {
        let UserAnswer = prompt("Введите вариант ответа(a,b,c,d) или 'отмена' для выхода. Вопрос:\n" + question + "\n" + answers.a + "\n" + answers.b + "\n" + answers.c + "\n" + answers.d);
        UserAnswer = UserAnswer.toLowerCase();

        if (UserAnswer !== "a" && UserAnswer !== "b" && UserAnswer !== "c" && UserAnswer !== "d") {
            return "Отмена";
        } else if (rightAnswer === UserAnswer) {
            return "1";
        } else {
            return "0";
        }
    },

    // Этот метод выполняется при открытии страницы.
    init() {
        console.log("Добро пожаловать на игру 'Кто хочет стать миллионером?'");
        console.log(("Введите game.run() для начала игры."))
    }
};

alert("Для полного погружения в игру откройте консоль");
game.init();