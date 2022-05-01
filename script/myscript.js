let stars = document.getElementById('stars');
let stars2 = document.getElementById('star2');
let moon = document.getElementById('moon');
let rock = document.getElementById('rock');
let masjid = document.getElementById('masjid');
let text = document.getElementById('text');
let header = document.getElementById('header');

window.addEventListener('scroll', function(){
  let value = window.scrollY;
  stars.style.bottom = value * 0.05 + '%';

  moon.style.bottom = value * -0.5 + 'px';
  rock.style.bottom = value * -0.75 + 'px';
  masjid.style.bottom = value * -0.15 + 'px';


header.style.top = value * 0.5 + 'px';

})






const toggleMenu = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
toggleMenu.onclick = function() {
  toggleMenu.classList.toggle('active');
  navigation.classList.toggle('active');
}
