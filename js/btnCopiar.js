//Fx de Copy-Paste del mensaje resultante de la encriptación - desencriptación.

let botonCopiar = document.querySelector("btn-copiar");

function msgCopiar() {
  let textoCopiado = document.querySelector("#resultado-msg").value;
    navigator.clipboard.writeText(textoCopiado);
    alert("copied!");
}