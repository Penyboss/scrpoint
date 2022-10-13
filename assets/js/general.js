
//* /====/ Theme Toggle /====/

const themeToggle = document.querySelector('.theme--toggle');

themeToggle.addEventListener('click', () => {
  themeToggle.classList.toggle('active');

  if (document.body.classList.contains('dark--theme')) {
    document.body.classList.add('light--theme');
    document.body.classList.remove('dark--theme');

    localStorage.setItem('theme', 'light');
  } else {
    document.body.classList.add('dark--theme');
    document.body.classList.remove('light--theme');

    localStorage.setItem('theme', 'dark');
  }
});

if (localStorage.getItem('theme') === 'light') {
  themeToggle.classList.remove('active');
  document.body.classList.add('light--theme');
  document.body.classList.remove('dark--theme');
} else {
  themeToggle.classList.add('active');
  document.body.classList.remove('light--theme');
  document.body.classList.add('dark--theme');
}

//* /====/ Accordion /====/

const accordion = document.querySelectorAll('.accordion--question-container');

for (const question of accordion) {
  question.addEventListener('click', function () {
    const answer = this.nextElementSibling;
    let height = answer.scrollHeight;

    if (this.classList.contains('active')) {
      this.classList.remove('active');
      answer.style.maxHeight = 0;


    } else {

      accordion.forEach(each => {
        each.classList.remove('active');
        each.nextElementSibling.style.maxHeight = 0;
      });

      answer.style.maxHeight = height + 'px';
      this.classList.add('active');
    }
  });
}


//* /====/ OffLine Indicator /====/


const offlineIndicator = document.querySelector('.offline--indicator');

setInterval(function () {

  if (navigator.onLine) {

    offlineIndicator.style.display = 'none';


  } else {
    offlineIndicator.style.display = 'block';
  }
}, 2000);

//* /====/ Scroll Effect /====/

window.onscroll = () => {
  const toTop = document.querySelector('.toTop');

  if (window.scrollY >= 500) {
    toTop.classList.add('active');
  } else {
    toTop.classList.remove('active');
  }
};


//* /====/ Scroll Animation /====/


const sr = ScrollReveal({
  distance: '100px',
  duration: 1500,
  delay: 50,
  reset: false
});

sr.reveal(
  '.left',
  { origin: 'left', interval: 200 }
);

sr.reveal(
  '.bottom'
); 