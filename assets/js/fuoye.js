'use strict';


const sitting = document.querySelector('.sitting-input');
const OLevel = document.querySelectorAll('.data-input');
const jamb = document.querySelector('.jamb-input');
const result = document.querySelector('.result');

result.disabled = true;
result.style.cursor = 'not-allowed';



const calculator = () => {

  // * Calculating the Points

  let scoreResult = 0;
  let jambScore = 0;
  let totalScore = 0;

  for (const score of OLevel) {
    let scores = score.value;
    if (scores.trim() == 'A1' || scores.trim() == 'a1') {
      scores = 6;
    } else if (scores.trim() == 'B2' || scores.trim() == 'b2') {
      scores = 5;
    } else if (scores.trim() == 'B3' || scores.trim() == 'b3') {
      scores = 4;
    } else if (scores.trim() == 'C4' || scores.trim() == 'c4') {
      scores = 3;
    } else if (scores.trim() == 'C5' || scores.trim() == 'c5') {
      scores = 2;
    } else if (scores.trim() == 'C6' || scores.trim() == 'c6') {
      scores = 1;
    } else {
      scores = 0;
    }

    scoreResult += scores;

  }

  let sittingScore = sitting.value;

  if (sittingScore.trim() == 1) {
    sittingScore = 10;
  } else if (sittingScore.trim() == 2) {
    sittingScore = 6;
  } else {
    sittingScore = 0;
  }

  let jambInput = jamb.value;

  jambScore = +jambInput / 400 * 60;

  totalScore = scoreResult + sittingScore + jambScore;

  // * Setting result to the DOM

  // * Setting jambPoint to the DOM

  const jambText = document.querySelector('.fuoye-jamb-point');
  jambText.innerText = jambScore;

  // * Setting oLevelPoint to the DOM

  const OLevelText = document.querySelector('.fuoye-OLevel-total');
  OLevelText.innerText = scoreResult;

  // * Setting sittingPoint to the DOM

  const SittingText = document.querySelector('.fuoye-sitting-point');
  SittingText.innerText = sittingScore;

  // * Setting ScreeningPoint to the DOM

  const ScreeningText = document.querySelector('.fuoye-point');
  ScreeningText.innerText = totalScore + '%';

  const remarkText = document.querySelector('.fuoye-result-remark');
  remarkText.innerText = totalScore >= 50 ? 'Greet Job! 🥇 🏆' : 'Good Job! 🥈 🍹';

  // * Styling svg in the DOM

  const fuoyeSvg = document.querySelector('.fuoye-svg');
  fuoyeSvg.style.strokeDashoffset = 450 - 450 * totalScore / 100;


  OLevel.forEach(input => input.value = '');
  sitting.value = '';
  jamb.value = '';

  result.disabled = true;
  result.style.cursor = 'not-allowed';
};

result.addEventListener('click', () => {
  calculator();
  swal.fire({
    position: 'top-end',
    title: 'Good job! 👍',
    text: 'Your point is ready 😄.',
    icon: 'success',
    showConfirmButton: false,
    timer: 1500
  });
});

const sittingContainer = document.querySelector('.sitting-input-container');

sittingContainer.addEventListener('click', () => {
  sittingContainer.classList.toggle('active');
});

const NoOfSitting = document.querySelector('.sitting-input');

const sittingValue = (param) => {
  NoOfSitting.value = param;
};


const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');

window.addEventListener('keyup', (e) => {
  if (form.checkValidity()) {
    result.disabled = false;
    result.style.cursor = 'pointer';


  } else {
    result.disabled = true;
    result.style.cursor = 'not-allowed';

  }


  if (e.key === 'Enter' && form.checkValidity()) {
    calculator();
    swal.fire({
      position: 'top-end',
      title: 'Good job! 👍',
      text: 'Your point is ready 😄.',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    });

  } else if (e.key === 'Enter') {
    swal.fire({
      position: 'top-end',
      title: 'Oops 😠',
      text: 'Ensure all input are filled.',
      icon: 'error',
      showConfirmButton: false,
      timer: 1500
    });

  }
});
