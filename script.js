const aboutUs = document.querySelector('#about_us_nav');
aboutUs.addEventListener('click', clicou);
const services = document.querySelector('#services_nav');
services.addEventListener('click', () => {
  document.querySelector('html').scrollTo({
    top:1047.6522216796875,
    left:0,
    behavior:'smooth'
  });
});
const ourProjects = document.querySelector('#our_projects_nav');
ourProjects.addEventListener('click', () => {
  document.querySelector('html').scrollTo({
    top:1595.1304931640625,
    left:0,
    behavior:'smooth'
  });
});
const ourTeam = document.querySelector('#our_team_nav');
ourTeam.addEventListener('click', () => {
  document.querySelector('html').scrollTo({
    top:2517.565185546875,
    left:0,
    behavior:'smooth'
  });
});
const happyClients = document.querySelector('#happy_clients_nav');
happyClients.addEventListener('click', () => {
  document.querySelector('html').scrollTo({
    top:3217.391357421875,
    left:0,
    behavior:'smooth'
  });
});
const price = document.querySelector('#price_nav');
price.addEventListener('click', () => {
  document.querySelector('html').scrollTo({
    top:4031.304443359375,
    left:0,
    behavior:'smooth'
  });
});
const someFacts = document.querySelector('#some_facts_nav');
someFacts.addEventListener('click', () => {
  document.querySelector('html').scrollTo({
    top:5206.2607421875,
    left:0,
    behavior:'smooth'
  });
});
const contactUs = document.querySelector('#contact_us_nav');
contactUs.addEventListener('click', () => {
  document.querySelector('html').scrollTo({
    top:5762.0869140625,
    left:0,
    behavior:'smooth'
  });
});
function clicou() {
  document.querySelector('html').scrollTo({
    top:649.7391357421875,
    left:0,
    behavior: 'smooth'
  });
}
const buttonAbsolute = document.querySelector('.buttonAbsolute');
buttonAbsolute.addEventListener('click', () => {
  document.querySelector('html').scrollTo({
    top:0,
    left:0,
    behavior:'smooth'
  });
});

function subirTela() {
  if(document.querySelector('html').scrollTop === 0) {
    buttonAbsolute.style.display = 'none';
  } else {
    buttonAbsolute.style.display = 'block';
  }
};

window.addEventListener('scroll', subirTela);
