
const lista = ['caminar', 'jugar', 'automovil', 'cuaderno', 'radio', 'profesor', 'elefante', 'sonreir', 'laptop', 'celular'];
const palabra = lista[Math.floor(Math.random()*lista.length)];
let guiones = palabra.replace(/\B\w{1}/g, " _");
//expresiones regulares
let contadorFallos = 0;

String.prototype.replaceAt = function(index, character) { 
  return this.substring(0, index) + character + this.substring(index+character.length);
};

document.querySelector('#output').innerHTML=guiones;
document.querySelector('#probar').addEventListener('click', jugar = ()=> {
  const letra =document.querySelector('#letra').value;
  let fallado = true;
  console.log(palabra);
  
  document.querySelector('#output').innerHTML=guiones;

  for(const i in palabra){
    if(letra == palabra[i]){
      guiones = guiones.replaceAt(i*2,letra);
      fallado = false;
    }
  }
  if(fallado){
    contadorFallos++;
    console.log(contadorFallos, "fallos");
    document.querySelector('#img').style.backgroundPosition= -(200*contadorFallos)+'px 0';
    if(contadorFallos==4){
      contadorFallos=0;
      swal.fire('Perdiste', 'no te preocupes, sigue intentando', 'error');
    }
  }else{
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