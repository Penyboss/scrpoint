//* /====/ Header and Nav /====/

const navToggle = document.querySelector('.nav--toggle');
const sideBar = document.querySelector('.nav--link-container');
const navLink = document.querySelectorAll('.nav--link');

navToggle.addEventListener('click', () => {
  const valid = navToggle.getAttribute('aria-expanded');


  if (valid === 'false') {
    navToggle.setAttribute('aria-expanded', true);
    sideBar.setAttribute('data-visible', true);
  } else {
    navToggle.setAttribute('aria-expanded', false);
    sideBar.setAttribute('data-visible', false);

  }
});

navLink.forEach(link => {
  link.onclick = () => {
    navToggle.setAttribute('aria-expanded', false);
    sideBar.setAttribute('data-visible', false);
  };
});



