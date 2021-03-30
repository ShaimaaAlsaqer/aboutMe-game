'use strict';
alert('welcome to playing game');
let userName= prompt('what\'s your name?');
//console.log(userName);
alert('Hello '+ userName+" " +'enjoy');
alert('now I will ask you a five question and you should answer yes/y or no/n');

let time= prompt('Do I like summer timing, that make 8 am become 9 am?');
time=time.toLowerCase();
//console.log(time);
if (time==='yes'||time==='y') {
    //console.log('no, you are wrong I do not like it');
    alert('no, you are wrong I do not like it');
} else if (time==='no'||time==='n') {
    //console.log('you are right');
    alert('you are right');
} else {
    //console.log('please, just answer yes, y, no, or n. and without spaces');
    alert('please, just answer yes, y, no, or n. and without spaces');
    }
    
let MyPhone= prompt('Do you think that my phone is iphone?');
MyPhone= MyPhone.toLowerCase();
//console.log(MyPhone);
if (MyPhone==='yes'|| MyPhone==='y') {
    //console.log('no, you are wrong it is samsung');
    alert('no, you are wrong it is samsung');
} else if (MyPhone==='no'|| MyPhone==='n') {
    //console.log('you are right');
    alert('you are right');
} else {
    //console.log('please, just answer yes, y, no, or n. and without spaces');
    alert('please, just answer yes, y, no, or n. and without spaces');
    }

let chocolateChips= prompt('Do I love chocolate and chips?');
chocolateChips= chocolateChips.toLowerCase();
console.log(chocolateChips);
if (chocolateChips==='yes'|| chocolateChips==='y') {
    //console.log('you are right');
    alert('you are right');
} else if (chocolateChips==='no'|| chocolateChips==='n') {
    //console.log('no, you are wrong');
    alert('no, you are wrong');
} else {
    //console.log('please, just answer yes, y, no, or n. and without spaces');
    alert('please, just answer yes, y, no, or n. and without spaces');
    }

let leftHand= prompt('Do you think I am writing with my left hand?');
leftHand= leftHand.toLowerCase();
//console.log(leftHand);
if (leftHand==='yes'|| leftHand==='y') {
    //console.log('you are right');
    alert('you are right');
} else if (leftHand==='no'||leftHand==='n') {
    //console.log('no, you are wrong');
    alert('no, you are wrong');
} else {
    //console.log('please, just answer yes, y, no, or n. and without spaces');
    alert('please, just answer yes, y, no, or n. and without spaces');
    }

let car= prompt('Do I have a car?');
car= car.toLowerCase();
//console.log(car);
if (car==='yes'|| car==='y') {
    //console.log('no, you are wrong I do not have');
    alert('no, you are wrong I do not have');
} else if (car==='no'|| car==='n') {
    //console.log('you are right');
    alert('you are right');
} else {
    //console.log('please, just answer yes, y, no, or n. and without spaces');
    alert('please, just answer yes, y, no, or n. and without spaces');
    }

alert('thank you '+ userName+" " +'I hope you had fun');

