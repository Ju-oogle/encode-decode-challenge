function soloLetrasMin(e){
    inputTexto = e.keyCode || e.which;
    teclado = String.fromCharCode(inputTexto).toLowerCase();
    console.log(teclado);
    letras = " abcdefghijklmnñopqrstuvwxyz";
    especiales = "8-37-38-46-164";
    teclado_especial = false;
    for (var i in especiales){
        if(inputTexto==especiales[i]){
            teclado_especial=true;break;
        }
    }
    if (letras.indexOf(teclado) == -1 && !teclado_especial){
        return false;
    }
}
 


