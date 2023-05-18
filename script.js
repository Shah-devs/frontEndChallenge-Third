'strict-mode';

const contents = document.querySelectorAll('.content');
const buttons = document.querySelectorAll('.btn');
const answers = document.querySelectorAll('.answers');
const questions = document.querySelectorAll('.question');
const box = document.querySelector('.box');

for (let i = 0; i < contents.length; i++) {
  contents[i].addEventListener('click', function () {
    for (let j = 0; j < questions.length; j++) {
      if (i == j) {
        answers[j].classList.toggle('answers-show');
        questions[j].style.fontWeight =
          questions[j].style.fontWeight == 'bold' ? '400' : 'bold';
        buttons[j].style.rotate =
          buttons[j].style.rotate == '180deg' ? '0deg' : '180deg';
        box.style.transform =
          box.style.transform == 'translate(-485px, 45px)'
            ? 'translate(-465px, 45px)'
            : 'translate(-485px, 45px)';
      } else {
        answers[j].classList.remove('answers-show');
        questions[j].style.fontWeight = '400';
        buttons[j].style.rotate = '0deg';
      }
    }
  });
}
