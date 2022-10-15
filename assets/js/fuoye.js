
//! <====> Confidential <====>

const calculate = document.querySelector('#calculate');
const oLevel = document.querySelectorAll('.oLevel');
const sitting = document.querySelector('.sitting');
const valid = document.querySelector('#valid');
const jamb = document.querySelector('.jamb');



const calculator = () => {
  let oScore = 0;
  let jScore = 0;
  let sScore = 0;
  let tScore = 0;

  for (const data of oLevel) {
    let score = data.value;

    if (data.value === 'A1' || data.value === 'a1') {
      score = 6;

    } else if (data.value === 'B2' || data.value === 'b2') {
      score = 5;

    } else if (data.value === 'B3' || data.value === 'b3') {
      score = 4;

    } else if (data.value === 'C4' || data.value === 'c4') {
      score = 3;

    } else if (data.value === 'C5' || data.value === 'c5') {
      score = 2;

    } else if (data.value === 'C6' || data.value === 'c6') {
      score = 1;

    } else {
      score = 0;
    }

    oScore += score;
  }

  if (sitting.value == 1) {
    sScore = 10;

  } else if (sitting.value == 2) {
    sScore = 6;

  } else {
    sScore = 0;
  }

  jScore = +jamb.value / 400 * 60;

  tScore = jScore + sScore + oScore;

  const jambPoint = document.querySelector('.jamb-point');
  const sittingPoint = document.querySelector('.sittings-point');
  const oLevelPoint = document.querySelector('.oLevel-point');
  const Point = document.querySelector('.point');

  jambPoint.innerText = jScore;
  sittingPoint.innerText = sScore;
  oLevelPoint.innerText = oScore;
  Point.innerText = tScore + '%';

  const svg = document.querySelector('.point-svg');
  svg.style.strokeDashoffset = 550 - 550 * tScore / 100;

  const remark = document.querySelector('.remark');
  remark.innerText = tScore >= 50 ? 'Greet Job! 🥇 🏆' : 'Good Job! 🥈 🍹';

  const input = document.querySelectorAll('input');

  for (const value of input) {
    value.value = '';
  }

};





calculate.addEventListener('click', () => {

  if (valid.checkValidity()) {

    calculator();

    swal.fire({
      position: 'center',
      title: 'Good job! 👍',
      text: 'Your point is ready 😄.',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    });

  } else {

    swal.fire({
      position: 'center',
      title: 'Oops 😭😭😭',
      text: 'Ensure all input are filled.',
      icon: 'error',
    });

  }
});

window.addEventListener('keyup', e => {
  if (e.key === 'Enter' && valid.checkValidity()) {

    calculator();

    swal.fire({
      position: 'center',
      title: 'Good job! 👍',
      text: 'Your point is ready 😄.',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    });
  } else if (e.key === 'Enter') {

    swal.fire({
      position: 'center',
      title: 'Oops 😭😭😭',
      text: 'Ensure all input are filled.',
      icon: 'error',
    });

  }
});
