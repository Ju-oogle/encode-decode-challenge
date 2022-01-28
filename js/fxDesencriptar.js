/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

//Capturo texto ingresado por el usuario para desencriptar
let botonDesencriptar = document.querySelector("#btn-desencriptar");

botonDesencriptar.addEventListener("click", function (event) {
  event.preventDefault(); //evita q que cuando hago click carge la pagina de nuevo.
  let textoUsuario = document.querySelector("#input-texto").value;
  let textoDesencriptado = desencriptar(textoUsuario);

  let resultado = document.querySelector("#resultado-msg");
  resultado.value = textoDesencriptado;
});

//Fx que desencripta el mensaje ingresado
function desencriptar(textoUsuario) {
  let textoEncriptado = "";
  for (const clave in claves) {
    textoEncriptado = textoUsuario.replaceAll(claves[clave], clave);
//se actualiza el texto del usuario con las modificaciones ya realizadas.
    textoUsuario = textoEncriptado;
  }
  return textoEncriptado;
}
