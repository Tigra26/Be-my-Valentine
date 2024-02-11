const buttonYes = document.querySelector('.yes');
const buttonNo =document.querySelector('.no');

let buttonYesFontSize = 2;
let buttonNoFontSize = 2;

buttonNo.addEventListener('click', doYesMore);
buttonYes.addEventListener('click', buttonYesPushed);


function doYesMore () {
    location.href = './page3.html';
};

function buttonYesPushed () {
    location.href = './page2.html';
};