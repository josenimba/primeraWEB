window.addEventListener('load',function(){
        //SLIDER

        btnFotoA.addEventListener('click', anteriorFoto)
        btnFotoS.addEventListener('click', siguienteFoto);
        
        var fotos = ['imagenes/pcgaming1.webp','imagenes/pcgaming2.webp','imagenes/pcgaming3.webp','imagenes/pcgaming4.webp','imagenes/grafica1.webp','imagenes/grafica2.webp',];
        var i = 0;
        var fotosTimer;

        fotosTimer = setTimeout(siguienteFoto, 5000);
        
        function siguienteFoto() {
                clearTimeout(fotosTimer);
                i = ++i%fotos.length;
                foto.style.opacity = 0;
                setTimeout(function() {//esta funcion hace transicion, para que no cambie de golpe, usar transition: opacity 0.5s ease-in-out; en el css
                        foto.src = fotos[i];
                        foto.style.opacity = 1;
                }, 500);
                fotosTimer = setTimeout(siguienteFoto, 5000);
        }

        function anteriorFoto() {
        clearTimeout(fotosTimer);
        i = --i < 0 ? fotos.length-1 : i;    
        foto.style.opacity = 0;
        setTimeout(function() { //esta funcion hace transicion, para que no cambie de golpe, usar transition: opacity 0.5s ease-in-out; en el css
          foto.src = fotos[i];
          foto.style.opacity = 1;
        }, 500); 
        fotosTimer = setTimeout(siguienteFoto, 5000);       
        }
});