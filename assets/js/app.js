'use strict'

// burbuja: del más interno al más externo, boolean por default es false
// captura: del más externo al más interno, boolean true
/*
var divs = document.querySelectorAll('div');
console.log(divs);

for (var i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', prop);
  divs[i].addEventListener('click', prop, true);
}

function prop(event) {
  alert('Hola soy el div ' + this.className + '\n El click se originó en el div ' + event.target.className);
  //event.stopPropagation();
}

var link = document.getElementById('link');

link.addEventListener('click', function(event){
  event.preventDefault();
})
*/

// guardo en la variable divs la colección de html con todos los divs de mi html
const divs = document.querySelectorAll('div');
console.log(divs);
// creo la función que se va a ejecutar cuando el evento click sea detonado
const prop = (event) => {
  // event.currentTarget = objetivo actual, donde está parado verificando (donde se propagó)
  // event.target = objetivo original del evento, donde se ejecutó, donde nació
  alert(`Hola soy el div ${event.currentTarget.className}
    El click lo originó ${event.target.className}`);
};

// recorro mi colección y en cada iteración le agrego el evento
divs.forEach(element => {
  // fase burbuja
  element.addEventListener('click', prop);
  // fase captura
  element.addEventListener('click', prop, true);
});

// si están ambas fases declaradas se ejecuta primero captura y luego burbuja