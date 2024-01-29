function evaluar() {
    if (aceptar.checked) {
        document.body.style.pointerEvents = "auto"
        cookies.remove();

    } else {
        window.addEventListener('load',function(){
        miDiv.removeChild(boton)
        });
        var boton = document.createElement("button");
        var miDiv = document.getElementById("botoncookies");
        
        mensaje.innerHTML = 'Acepta las cookies o paga 2€'
        
        miDiv.innerHTML += '<br>';
        boton.innerHTML = 'PAGA';
        //obtener div
        miDiv.appendChild(boton)
        
    }
}