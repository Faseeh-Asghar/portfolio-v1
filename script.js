const navbar = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

const hiddenElements = document.querySelectorAll('.hidden-element');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show-element');
      }
    });
  },
  {
    threshold: 0.2,
  }
);

hiddenElements.forEach((el) => {
  observer.observe(el);
});

const hamburgerBtn = document.querySelector('#hamburger-btn');
const navLinks = document.querySelector('.nav-links');

hamburgerBtn.addEventListener('click', function () {
  navLinks.classList.toggle('open');
});

const contactForm = document.querySelector('#contact-form');
const inputName = document.querySelector('#input-name');
const inputEmail = document.querySelector('#input-email');
const inputMessage = document.querySelector('#input-message');
const errorName = document.querySelector('#error-name');
const errorEmail = document.querySelector('#error-email');
const errorMessage = document.querySelector('#error-message');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  let isValid = true;
  if (inputName.value.trim() === '') {
    errorName.innerText = 'Name is required.';
    isValid = false;
  } else {
    errorName.innerText = '';
  }

  if (inputEmail.value.trim() === '') {
    errorEmail.innerText = 'Email is required.';
    isValid = false;
  } else {
    errorEmail.innerText = '';
  }
  if (inputMessage.value.trim() === '') {
    errorMessage.innerText = 'Message cannot be empty.';
    isValid = false;
  } else {
    errorMessage.innerText = '';
  }

  if (isValid) {
    contactForm.innerHTML =
      '<p style="color: #4ade80; font-size: 1.2rem;">✓ Message sent successfully!</p>';
  }
});

inputName.addEventListener('input', function () {
  errorName.innerText = '';
});

inputEmail.addEventListener('input', function () {
  errorEmail.innerText = '';
});

inputMessage.addEventListener('input', function () {
  errorMessage.innerText = '';
});
