const show = document.getElementById('show');
const text = document.getElementById('text');
const hide = document.getElementById('hide');

show.addEventListener('click', function() {
    text.classList.remove('hidden','bounceOutRight');
    hide.classList.remove('hidden','bounceOutRight');
    text.classList.add('bounceInLeft');
    hide.classList.add('bounceInLeft');
});

hide.addEventListener('click', function() {
    text.classList.remove('bounceInLeft');
    hide.classList.remove('bounceInLeft');
    text.classList.add('bounceOutRight');
    hide.classList.add('bounceOutRight');
    setTimeout(function() {
        text.classList.add('hidden');
        hide.classList.add('hidden');
    }, 500)
});