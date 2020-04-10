'use strict';

let DeltaX = 0;

const images = [
    document.getElementById('slider-image1'),
    document.getElementById('slider-image2'),
    document.getElementById('slider-image3')
];

const arrowLeft = document.querySelector('.vertical-line-arrow-right');
const arrowRight = document.querySelector('.vertical-line-arrow-left');

arrowLeft.addEventListener('click', function(){
    ChangeImageLeft();
});

function ChangeImageLeft() {
    if(DeltaX < 683) {
        DeltaX += 2;
        setTimeout(ChangeImageLeft, 1);
        images[0].style.left = (-1366 - DeltaX) + "px";
        images[1].style.left = -DeltaX + "px";
        images[2].style.left = (1366  - DeltaX) + "px";
    } else if (DeltaX < 1366) {
        DeltaX += 2;
        setTimeout(ChangeImageLeft, 1);
        images[0].style.left = (1366*2 - DeltaX) + "px";
        images[1].style.left = - DeltaX + "px";
        images[2].style.left = (1366 - DeltaX) + "px";
    } else {
        DeltaX = 0;
        ChangeImageArrayLeft();
    }
}

function ChangeImageArrayLeft() {
    const reserve = images[0];
    images[0] = images[1];
    images[1] = images[2];
    images[2] = reserve;
}

arrowRight.addEventListener('click', function(){
    ChangeImageRight();
});

function ChangeImageRight() {
    if(DeltaX < 683) {
        DeltaX += 2;
        setTimeout(ChangeImageRight, 1);
        images[0].style.left = (-1366 + DeltaX) + "px";
        images[1].style.left = DeltaX + "px";
        images[2].style.left = (1366  + DeltaX) + "px";
    } else if (DeltaX < 1366) {
        DeltaX += 2;
        setTimeout(ChangeImageRight, 1);
        images[0].style.left = (-1366 + DeltaX) + "px";
        images[1].style.left = DeltaX + "px";
        images[2].style.left = (-1366*2 + DeltaX) + "px";
    } else {
        DeltaX = 0;
        ChangeImageArrayRight();
    }
}

function ChangeImageArrayRight() {
    const reserve = images[0];
    images[0] = images[2];
    images[2] = images[1];
    images[1] = reserve;
}