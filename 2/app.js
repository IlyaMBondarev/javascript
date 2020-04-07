
const buttons = document.querySelectorAll('button');
let img;

buttons.forEach(function(but) {
    but.addEventListener('click', function() {
        if (but.textContent === "Подробнее") {
            but.innerText = "Отмена";
            img = but.previousElementSibling;
            img.setAttribute("style","display:none;");
            const desc = document.createElement('div');
            desc.classList.add("desc");
            desc.innerText = 'Что смотришь? Покупай скорее! И тут еще какое-то описание';
            img.insertAdjacentElement("beforebegin", desc);
        } else {
            but.innerText = "Подробнее";
            img = but.previousElementSibling;
            img.removeAttribute("style");
            const desc = img.previousElementSibling;
            desc.remove();
        }
    });
});