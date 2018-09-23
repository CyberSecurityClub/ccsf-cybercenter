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

// material boxed
const materialboxed = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialboxed, {});

// scrollspy
const scrollspy = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scrollspy, {});