import * as UI from './variables.js';
import {mensaje} from './app.js';
export {consultaAPI};

class consultaAPI{
    constructor(artista,titulo){
        this.artista = artista;
        this.titulo = titulo;
    }

    async llamandoAPI(){
       try {
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.titulo}`;
        const respuesta = await fetch(url);
        const data = await respuesta.json();
        mostrarHTML(data);
       } catch (error) {
           console.log(error)
           mensaje('no encontrado');
       }
            
       
    }
}

async function mostrarHTML(data){
    if(data.lyrics){
        UI.respuesta.innerHTML = `
        <p>${data.lyrics}</p>
        `
    }else{
        UI.respuesta.innerHTML = `
        <p class="text-center text-muted p-2 mt-5">Canción no encontrada</p>
        `
    }
}