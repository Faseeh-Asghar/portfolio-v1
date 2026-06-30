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
