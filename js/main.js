const imagenesDOM = document.querySelectorAll('.carrusel');

let imagenesRuta = [
  'img/cafe-galeria.png',
  'img/masas-galeria.png',
  'img/granos.png'
];

function rotarCarrusel() {
  let primero = imagenesRuta.shift();
  imagenesRuta.push(primero);

  for (let i = 0; i < imagenesDOM.length; i++) {
    imagenesDOM[i].src = imagenesRuta[i];
  }
}

setInterval(rotarCarrusel, 3000);

//MENU DE HAMBURGESAS RESPONSIVO
const btnHamburguesa = document.getElementById('btn-menu');
const menuEnlaces = document.getElementById('nav-links');

btnHamburguesa.addEventListener('click', function() {
    menuEnlaces.classList.toggle('menu-abierto');
});


//FlECHA HACIA ARRIBA
const btnSubir = document.getElementById('btn-subir');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        btnSubir.classList.add('mostrar'); 
    } else {
        btnSubir.classList.remove('mostrar'); 
    }
});

btnSubir.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});

//MODAL
const btnAbrirModal = document.getElementById('btn-ver-menu');
const modalMenu = document.getElementById('modal-menu');
const btnCerrarModal = document.getElementById('btn-cerrar-modal');

btnAbrirModal.addEventListener('click', function(evento) {
    evento.preventDefault(); 
    modalMenu.classList.add('modal-visible');
});

btnCerrarModal.addEventListener('click', function() {
    modalMenu.classList.remove('modal-visible'); 
});
