let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let zero = document.getElementById('zero');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let divide = document.getElementById('divide');
let equal = document.getElementById('equal');
let times = document.getElementById('times');
let display = document.getElementById('display');
let clear = document.getElementById('clear');
let operator = document.getElementById('operator');

let num = 0;
let fnum;
let a = 0;
let op = -1;

function pressOne() {
    num *= 10;
    num++;
    display.innerHTML = num;
}
function pressTwo() {
    num *= 10;
    num += 2;
    display.innerHTML = num;
}
function pressThree() {
    num *= 10;
    num += 3;
    display.innerHTML = num;
}
function pressFour() {
    num *= 10;
    num += 4;
    display.innerHTML = num;
}
function pressFive() {
    num *= 10;
    num += 5;
    display.innerHTML = num;
}
function pressSix() {
    num *= 10;
    num += 6;
    display.innerHTML = num;
}
function pressSeven() {
    num *= 10;
    num += 7;
    display.innerHTML = num;
}
function pressEight() {
    num *= 10;
    num += 8;
    display.innerHTML = num;
}
function pressNine() {
    num *= 10;
    num += 9;
    display.innerHTML = num;
}
function pressZero() {
    num *= 10;
    display.innerHTML = num;
}
function pressPlus() {
    if (op === -1) {
        op = 0;
        fnum = num;
        num = 0;
        operator.innerHTML = '+';
        display.innerHTML = num;
    }
    else {
        a = 1;
        pressClear();
    }
}
function pressMinus() {
    if (op === -1) {
        op = 1;
        fnum = num;
        num = 0;
        operator.innerHTML = '-';
        display.innerHTML = num;
    }
    else {
        a = 1;
        pressClear();
    }
}
function pressTimes() {
    if (op === -1) {
        op = 2;
        fnum = num;
        num = 0;
        operator.innerHTML = 'x';
        display.innerHTML = num;
    }
    else {
        a = 1;
        pressClear();
    }
}
function pressDivide() {
    if (op === -1) {
        op = 3;
        fnum = num;
        num = 0;
        operator.innerHTML = '/';
        display.innerHTML = num;
    }
    else {
        a = 1;
        pressClear();
    }
}
function pressClear() {
    op = -1;
    fnum = 0;
    num = 0;
    operator.innerHTML = '...'
    display.innerHTML = num;
    if (a === 1) {
        alert("Invalid Entry");
        a = 0;
    }
}
function pressEqual() {
    if (op === 0) {
        num = fnum + num;
    }
    else if (op === 1) {
        num = fnum - num;
    }
    else if (op === 2) {
        num = fnum * num;
    }
    else {
        num = fnum / num;
    }
    operator.innerHTML = '=';
    display.innerHTML = num;
    fnum = num;
    num = 0;
    op = -1;
}


one.onclick = pressOne;
two.onclick = pressTwo;
three.onclick = pressThree;
four.onclick = pressFour;
five.onclick = pressFive;
six.onclick = pressSix;
seven.onclick = pressSeven;
eight.onclick = pressEight;
nine.onclick = pressNine;
zero.onclick = pressZero;
plus.onclick = pressPlus;
minus.onclick = pressMinus;
times.onclick = pressTimes;
divide.onclick = pressDivide;
equal.onclick = pressEqual;
clear.onclick = pressClear;
