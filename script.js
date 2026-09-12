const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
  menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');

    if (navbar.classList.contains('active')) {
      menuIcon.classList.remove('bx-menu');
      menuIcon.classList.add('bx-x');
    } else {
      menuIcon.classList.remove('bx-x');
      menuIcon.classList.add('bx-menu');
    }
  });

  navbar.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active');
      menuIcon.classList.remove('bx-x');
      menuIcon.classList.add('bx-menu');
    });
  });
}
