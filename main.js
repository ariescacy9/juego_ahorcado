// se crea dos listas: palabra y su pista respectiva
const lista = ['caminar', 'jugar', 'automovil', 'cuaderno', 'radio', 'profesor', 'elefante', 'sonreir', 'laptop', 'celular'];
const pista = ['accion movilizarse ', 'recreativo', 'transporte', 'objeto', 'medio de receptor', 'sujeto', 'animal', 'feliz', 'objeto', 'dispositivo']

// se obtiene una palabra aleatoria y tambien se guarda la posicion para su respectiva pista
const palabra = lista[Math.floor(Math.random()*lista.length)];
let positionPista = lista.indexOf(palabra);
let mostrarPista ='la pista es: '+pista[positionPista];

//expresiones regulares hace remplazo de letras por guines sin la primera
let guiones = palabra.replace(/\B\w{1}/g, " _");

// se inicia contador de fallos
let contadorFallos = 0;

// se hace toma la posicion de cada letra para su respectivo cambio
String.prototype.replaceAt = function(index, character) { 
  return this.substring(0, index) + character + this.substring(index+character.length);
};

// se captura las etiquetas del html por id y se les iguala a contenidos guardados
document.querySelector('#output').innerHTML=guiones;
document.querySelector('#pista').innerHTML= mostrarPista;

// se captura el boton y asigna la funcion de evento click
document.querySelector('#probar').addEventListener('click', jugar = ()=> {
  const letra =document.querySelector('#letra').value;
  let fallado = true;
  console.log(palabra);
  
  document.querySelector('#output').innerHTML=guiones;

// se hace la comparacion de caracteres ingresado por el de la palabra, caso verdad se replaza
  for(const i in palabra){
    if(letra == palabra[i]){
      guiones = guiones.replaceAt(i*2,letra);
      fallado = false;
    }
  }

// si falla se suman y muestra la imgen del ahorcado
  if(fallado){
    contadorFallos++;
    console.log(contadorFallos, "fallos");
    document.querySelector('#img').style.backgroundPosition= -(200*contadorFallos)+'px 0';

// se tiene 4 vidas y al final muestra un tipo alert de haber perdido
    if(contadorFallos==4){
      contadorFallos=0;
      swal.fire('Perdiste', 'no te preocupes, sigue intentando', 'error');
    }
  }else{    //si ya no existen caracteres de guiones entonces ya gana y muestra un mensaje
    console.log(guiones.indexOf('_'),"probando");
    if(guiones.indexOf('_') == -1){
      swal.fire('Ganaste', 'eres muy inteligente, sigue jugando', 'success');
      contadorFallos=0;
    }
  }
  console.log(guiones);
  document.querySelector('#output').innerHTML=guiones;
  document.querySelector('#letra').focus();
})