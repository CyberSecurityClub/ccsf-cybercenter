// sidenav for mobile mode
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

// slider
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
  indicators: false, // remove the 3 dots
  height: 500,
  transition: 500,
  interval: 8000 // 6 seconds
});

// scrollspy
const scrollspy = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scrollspy, {});

// parallax
const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax, {});

// modal program
const modalProgram = document.querySelector('#program');
M.Modal.init(modalProgram, {});

// modal resources
const modalResources = document.querySelector('#resources');
M.Modal.init(modalResources, {});