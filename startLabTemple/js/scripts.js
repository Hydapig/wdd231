import {temples} from '../data/temples.js';
// console.log(temples);

import {url} from '../data/temples.js';
// console.log(url);

const showHere = document.querySelector('#showHere');
const mydialog = document.querySelector('#mydialog');
const mytitle = document.querySelector('#mydialog h2');
const myclose = document.querySelector('#mydialog button');
const myinfo = document.querySelector('#mydialog p');

myclose.addEventListener("click", () => mydialog.close());

function displayItems(data) {
    console.log(data);
    data.forEach(x => {
        console.log(x);
        const photo = document.createElement('img');
        photo.src = `${url}${x.path}`;
        photo.alt = x.name;
        photo.addEventListener('click', () => showStuff(x));
        showHere.appendChild(photo);
    });
}

displayItems(temples);

function showStuff(x) {
    console.log("Opening modal for:", x.name);
    mytitle.innerHTML = x.name;
    mydialog.showModal();
    myinfo.innerHTML = `Dedicated ${x.dedicated} by ${x.person} as temple number ${x.number}`
}



// const openButton = document.querySelector("#openButton");
// const dialogBox = document.querySelector("#dialogBox");
// const closeButton = document.querySelector("#closeButton");
// const dialogBoxText = document.querySelector("#dialogBox div");

// openButton1.addEventListener("click", () => {
//     dialogBox.showModal();
//     dialogBoxText.innerHTML = 'One apple containes 95 calories';
// });

// openButton2.addEventListener("click", () => {
//     dialogBox.showModal();
//     dialogBoxText.innerHTML = 'One orange containes 45 calories';
// });

// openButton3.addEventListener("click", () => {
//     dialogBox.showModal();
//     dialogBoxText.innerHTML = 'One banana containes 105 calories';
// });

// closeButton.addEventListener("click", () => {
//     dialogBox.close();
// });