const uniNav = document.querySelector('.uni-nav');

uniNav.addEventListener('click', () => {
  uniNav.classList.toggle('active');
});

// * accordion transition

const accordions = document.querySelectorAll('.accordion-question');

accordions.forEach(accordion => {
  accordion.addEventListener('click', function () {
    let accordionAnswer = this.nextElementSibling;
    let accordHeight = accordionAnswer.scrollHeight;

    if (accordion.classList.contains('active')) {
      accordion.classList.remove('active');
      accordionAnswer.style.maxHeight = '';
    } else {
      for (const accord of accordions) {
        accord.classList.remove('active');
        accord.nextElementSibling.style.maxHeight = '';
      }
      this.classList.add('active');
      accordionAnswer.style.maxHeight = accordHeight + 'px';
    }
  });
});
