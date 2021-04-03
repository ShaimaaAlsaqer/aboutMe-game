'use strict';
alert('welcome to playing game');
let userName = prompt('what\'s your name?');
if (!userName) {
    prompt('please write your name');
}
alert('Hello ' + userName + " " + 'enjoy');
alert('now I will ask you a five question and you should answer yes/y or no/n');

function firstQuestion() {
    let time = prompt('Do I like summer timing, that make 8 am become 9 am?');
    time = time.toLowerCase();
    if (time === 'yes' || time === 'y') {
        alert('no, you are wrong I do not like it');
    } else if (time === 'no' || time === 'n') {
        alert('you are right');
    } else {
          alert('please, just answer yes, y, no, or n. and without spaces');
    }

}
firstQuestion();

function secondQuestion() {
    let MyPhone = prompt('Do you think that my phone is iphone?');
    MyPhone = MyPhone.toLowerCase();
    if (MyPhone === 'yes' || MyPhone === 'y') {
        alert('no, you are wrong it is samsung');
    } else if (MyPhone === 'no' || MyPhone === 'n') {
        alert('you are right');
    } else {
        alert('please, just answer yes, y, no, or n. and without spaces');
    }
}
secondQuestion();


function thirdQuestion() {
    let chocolateChips = prompt('Do I love chocolate and chips?');
    chocolateChips = chocolateChips.toLowerCase();
    if (chocolateChips === 'yes' || chocolateChips === 'y') {
        alert('you are right');
    } else if (chocolateChips === 'no' || chocolateChips === 'n') {
        alert('no, you are wrong');
    } else {
        alert('please, just answer yes, y, no, or n. and without spaces');
    }
}
thirdQuestion();


function fourthQuestion() {
    let leftHand = prompt('Do you think I am writing with my left hand?');
    leftHand = leftHand.toLowerCase();
    if (leftHand === 'yes' || leftHand === 'y') {
        alert('you are right');
    } else if (leftHand === 'no' || leftHand === 'n') {
        alert('no, you are wrong');
    } else {
        alert('please, just answer yes, y, no, or n. and without spaces');
    }
}

fourthQuestion();

function fifthQuestion() {
    let car = prompt('Do I have a car?');
    car = car.toLowerCase();
    if (car === 'yes' || car === 'y') {
        alert('no, you are wrong I do not have');
    } else if (car === 'no' || car === 'n') {
        alert('you are right');
    } else {
        alert('please, just answer yes, y, no, or n. and without spaces');
    }
}
fifthQuestion();

function sixthQuestion() {
    let guessNumber = 6;
    for (let counter = 0; counter < 4; counter++) {
        let number = prompt('guess number from 0 to 12, you have just 4 trying');
        number = parseInt(number);
        if (number === guessNumber) {
            alert('you are right');
            break;
        } else if (number > guessNumber) {
            alert('too high');
        } else if (number < guessNumber) {
            alert('too low');
        } else {
            alert('please input number from 0 to 12 ');
        }
        if (counter >= 4) {
            alert('you finish your all 4 trying, the number is 6');
        }
        alert('you finish your all 4 trying, the number is 6');
    }
}
sixthQuestion();


function seventhQuestions() {
    let score = 0;
    let Names = ['Shaima', 'Huda', 'Amal', 'Ross', 'Yasemin', 'Ola'];
    for (let i = 0; i <= Names.length; i++) {
        let indexNum = prompt('guss the right name or index name from 0 to 6');
        parseInt(indexNum);
        if (indexNum==1) {
            score = score + 1;
            alert('right '+ score);
            break;
        } else if (indexNum==3) {
            score = score + 1;
            alert('right '+ score);
        } else if (indexNum ==5) {
            score = score + 1;
            alert('right '+ score);
        } else {
            alert('choose from 0 to 6');
        }
    }
    alert('thank you for playing ' + userName + 'your score' + score);
}
seventhQuestions();

alert('thank you ' + userName + " " + 'I hope you had fun');