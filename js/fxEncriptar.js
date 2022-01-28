/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

//Objeto con claves
const claves = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

//Capturo texto ingresado por el usuario para encriptar
let botonEncriptar = document.querySelector("#btn-encriptar");
botonEncriptar.addEventListener("click", function (event) {
  event.preventDefault(); //evita q que cuando hago click carge la pagina de nuevo
  let textoUsuario = document.querySelector("#input-texto").value;
  let textoEncriptado = encriptar(textoUsuario);
  let resultado = document.querySelector("#resultado-msg");
  resultado.value = textoEncriptado;
});

//Fx que encripta el mensaje ingresado
function encriptar(textoUsuario) {
  let textoEncriptado = "";
  for (const clave in claves) {
    textoEncriptado = textoUsuario.replaceAll(clave, claves[clave]);
    //se actualiza el texto del usuario con las modificaciones ya realizadas.
    textoUsuario = textoEncriptado;
  }
  return textoEncriptado;
}
