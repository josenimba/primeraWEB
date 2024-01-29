window.addEventListener('load', function(){ //ESPERAR QUE CARGUE LA PAGINA
    var figuras = this.document.querySelectorAll('#galeria figure');

    //para cada figura de la galeria
    for (let figura of figuras) {
        figura.onclick = function(){
            //clona la figura que se ha hecho click y su contenido
            var nuevaFigura = this.cloneNode(true);
            //se añade la clase 'grande'.
            nuevaFigura.className = 'grande';
            //se añade el comentario
            // console.log(figura.firstElementChild.dataset.detalles)
            //hay que buscar en el primer hijo, porque el dataset est en la img, y no en la figure
            let coment = figura.firstElementChild.dataset.detalles;
            console.log(coment)
            var comentario = document.createElement('p');
            comentario.textContent = coment;
            comentario.style.color = 'white';
            nuevaFigura.appendChild(comentario);
            
            //evento que cierra la foto nueva cuando se hace click
            nuevaFigura.addEventListener('click', function(){
                this.remove();
            }
            );
            //OTRO METODO
            // nuevaFigura.onclick = function(){
            //     this.remove();
            // }

            //añadir imagen
            document.body.appendChild(nuevaFigura);
        }
    }
});