const inputElement = document.querySelector('input');
const infoButtonElement = document.querySelector('.info-button');
const feedbackButtonElement = document.querySelector('.feedback-button');
const infoDivElement = document.querySelector('.info');
const inputDivElement = document.querySelector('.big-input-div');
const tutorialDivElement = document.querySelector('.tutorial-text');
const tutorialParElement = document.querySelector('.tutorial-paragraph');
const firstSectionElement = document.querySelector('section');
const rangeElement = document.querySelector('.range');
const rangeLabelElement = document.querySelector('.labelRangeInput')

window.addEventListener('scroll', () => {
  let rect = inputDivElement.getBoundingClientRect();
  if (rect.top < 40) {
    inputDivElement.classList.add('fixed-position');
    firstSectionElement.add('smaller-size');
  }
  //   let rect2 = tutorialDivElement.getBoundingClientRect();
  //   if (rect2.top < 40) {
  //     inputDivElement.classList.add('fixed-position');
  //   }
});

infoButtonElement.addEventListener('click', () => {
  if (infoDivElement.classList.contains('invisible')) {
    infoDivElement.classList.remove('invisible');
    infoDivElement.classList.add('visible');
  } else {
    infoDivElement.classList.add('invisible');
    infoDivElement.classList.remove('visible');
  }
});

function myFunction(e) {
  if((e && e.keyCode == 13) || e == 0) {
    alert("The form was submitted");
    document.forms.form01.submit();
    document.forms.form01.fname.value = ""; // could be form01.reset as well
  }
}

rangeElement.addEventListener("input", () => {
  rangeLabelElement.innerHTML = rangeElement.value;
});

// window.addEventListener('keydown', createTutorial);

// function createTutorial(event) {
//   if (event.keyCode === 9 || event.keyCode === 13) {
//     event.preventDefault();
//     const input = 'How to ' + inputElement.value;
//     fetchText(input);
    
//   }
// }

// const url = 'https://www.boredapi.com/api/activity';

// async function fetchText(i) {
//   let response = await fetch(url, {
//     withCredentials: false
//   });
//   if (response.status === 200) {
//     let data = await response.json();
//     console.log(data.activity); 
//     tutorialParElement.innerHTML = i + '? ' + data.activity;
//     tutorialDivElement.classList.add('opaque');
//     tutorialDivElement.classList.remove('transparent');
//   }
// }
