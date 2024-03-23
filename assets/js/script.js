// JavaScript (script.js)
const ReproductorModule = (() => {
    const insertarVideo = (url, id) => {
        const iframe = document.getElementById(id);
        iframe.setAttribute('src', url);
    };

    class Multimedia {
        constructor(url) {
            this.url = url;
            this.getUrl = () => this.url;
        }

        setInicio() {
            return "Este método es para realizar un cambio en la URL del video";
        }
    }

    class Reproductor extends Multimedia {
        constructor(url, id) {
            super(url);
            this.id = id;
        }

        playMultimedia() {
            insertarVideo(this.getUrl(), this.id);
        }

        setInicio(tiempo) {
            const url = `${this.getUrl()}?start=${tiempo}`;
            super.url = url;
            return "Tiempo de inicio establecido";
        }
    }

    return {
        Reproductor: Reproductor
    };
})();

// Crear instancias de Reproductor para cada iframe y mostrar los videos
const musicaReproductor = new Reproductor("https://www.youtube.com/embed/dWgG3bnVUS0?si=GuPWgPJ531eiQg-6", "iframeMusica");
const peliculaReproductor = new Reproductor("https://www.youtube.com/embed/1roy4o4tqQM?si=Psyd5qnWDMGCvwpd", "iframePelicula");
const serieReproductor = new Reproductor("https://www.youtube.com/embed/a1zmhHLVrq0?si=iuky9OuRIVGZ-BCA", "iframeSerie");

musicaReproductor.playMultimedia();
peliculaReproductor.playMultimedia();
serieReproductor.playMultimedia();

// Establecer tiempo de inicio para el video de la serie
serieReproductor.setInicio(30);
serieReproductor.playMultimedia();
