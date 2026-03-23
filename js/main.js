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
