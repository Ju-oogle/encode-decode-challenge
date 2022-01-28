let btnLimpiar = document.querySelector("#btn-limpiar");


//Boton Limpiar
btnLimpiar.addEventListener("click", function (event) {
  document.getElementById("cifrador").reset();//reseteando los campos del formulario
  document.getElementById("btn-limpiar2").reset();//reseteando los campos del formulario
});

