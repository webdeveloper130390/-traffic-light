const lights = document.querySelectorAll('.light');
setInterval(() => {
  const seconds = new Date().getSeconds() % 60;
  lights.forEach(light => {
    light.style.opacity = '0.3'
  });
  if (seconds >= 0 && seconds < 4) {
    lights[0].style.opacity = '1'
  } else if (seconds >= 4 && seconds < 8) {
    lights[1].style.opacity = '1'
  } else {
    lights[2].style.opacity = '1'
  }
}, 1000);
document.addEventListener('contextmenu', function (p) {
  p.preventDefault();
  alert("Kodni ko'rish taqiqlanadi !!!")
})