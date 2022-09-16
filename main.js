
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
    console.log(contadorFallos);
    document.querySelector('#img').style.backgroundPosition= -(200*contadorFallos)+'px 0';
    if(contadorFallos==4){
      console.log('has perdido');
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


let a=12;
let b =10;
let c=1;

function jaja(a,b,c){
  if(a>b){
    if(a>c){
      return ('a es mayor');
    }else {
      return('c es mayor')
    }
  } else{
    return('b es mayor')
  }
}

function mayor(a,b){
  if(a>b){
    return('a mayor')
  }else{
    return('b mayor')
  }
}

mayor(mayor(a,b),c);