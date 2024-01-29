var lista =['videos/video1.mp4','videos/video2.mp4','videos/video3.mp4','videos/video4.mp4'];
        var indice = 1;

window.addEventListener('load', function(){
        
            video.onended = function(){
                
                this.src = lista[indice];
                info.innerHTML = 'Reproduciendo: '+lista[indice];
                indice = (indice+1)%lista.length;
            }
        
        });