// * header section

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelectorAll('.links');
const primaryNavigation = document.querySelector('#primary-navigation');

navToggle.addEventListener('click', () => {
  const visible = primaryNavigation.getAttribute('data-visible');

  if (visible === 'false') {
    primaryNavigation.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
  } else {
    primaryNavigation.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
});


links.forEach(link => {
  link.addEventListener('click', () => {
    primaryNavigation.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  });
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


const schCategory = (param) => {
  schCategoryInput.value = param;
};
// * scroll animation

const html = document.querySelector('html');
const header = document.querySelector('.header');
let lastScroll = window.scrollY;

window.addEventListener('scroll', () => {
  const section = document.querySelectorAll('.section');
  let sectionLength = section.length;

  if (lastScroll < window.scrollY) {
    header.classList.add('hide');
  } else {
    header.classList.remove('hide');

  }
  lastScroll = window.scrollY;

  // * scrollSpy 
  while (--sectionLength && scrollY + 42 < section[sectionLength].offsetTop) { }
  links.forEach(link => link.classList.remove('active'));
  links[sectionLength].classList.add('active');
});

// * school section

const schCategoryInput = document.querySelector('.school-input');
const schFilterIcon = document.querySelector('.school-input-icon');
const options = document.querySelector('.options');
const schFilter = document.querySelector('.school-filter');


schFilter.onclick = () => {
  schFilter.classList.toggle('active');
  schFilterIcon.classList.toggle('active');
  options.style.maxHeight = options.scrollHeight + 'px';
};
