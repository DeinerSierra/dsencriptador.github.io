//variables
const img = document.querySelector('#imgDer');
const textoNoEncontrado = document.querySelector('#texto')
const formulario = document.querySelector('#formulario');
const texto2 = document.querySelector('#texto2');
const btnCopiar = document.querySelector('.btn-copiar');
const btnEncriptar = document.querySelector('.btn-encriptar');
const btnDesencriptar = document.querySelector('.btn-desencriptar');


cargarEventListeners();

function cargarEventListeners() {
    // Contenido cargado
    document.addEventListener('DOMContentLoaded', () => {
       btnCopiar.classList.add('ocultar');
   });
    
}


//Funcion encriptar
function encriptar() {
    let textocifrado = '';
    
    //leer los datos del campo de texto
    const texto = document.querySelector('#inputTexto').value.toLowerCase();

        textocifrado = texto.replace(/e/igm, 'enter');
        textocifrado = textocifrado.replace(/o/igm, 'ober');
        textocifrado = textocifrado.replace(/i/igm, 'imes');
        textocifrado = textocifrado.replace(/a/igm, 'ai');
        textocifrado = textocifrado.replace(/u/igm, 'ufat');
        
        
        
       
       
       img.classList.add('ocultar');
       textoNoEncontrado.classList.add('ocultar');
       texto2.innerHTML = textocifrado;
       console.log(textocifrado);
       btnCopiar.classList.remove('ocultar');
    }
        
    


//Funcion Desencriptar
function desencriptar() {
    let textodecifrado = '';
    
    //leer los datos del campo de texto
    //leer los datos del campo de texto
    const texto = document.querySelector('#texto2').value.toLowerCase();
    
        textodecifrado = texto.replace(/enter/igm, 'e');
        textodecifrado = textodecifrado.replace(/ober/igm, 'o');
        textodecifrado = textodecifrado.replace(/imes/igm, 'i');
        textodecifrado = textodecifrado.replace(/ai/igm, 'a');
        textodecifrado = textodecifrado.replace(/ufat/igm, 'u');
        
        
        
       
       
       img.classList.add('ocultar');
       textoNoEncontrado.classList.add('ocultar');
       texto2.innerHTML = textodecifrado;
       console.log(textodecifrado);
       btnCopiar.classList.remove('ocultar');
    }
        
    



function copiar() {
    texto2.select();
    document.execCommand('copy');
}
