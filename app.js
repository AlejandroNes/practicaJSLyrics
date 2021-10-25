//importaciones
import * as UI from './variables.js';
import {consultaAPI} from './clase.js';

//eventos
document.addEventListener('DOMContentLoaded', ()=>{
    UI.formulario.addEventListener('submit', validarForm);
})

//funciones
function validarForm(e){
    e.preventDefault();
    //validando campos
    const artista = document.querySelector("#artista").value
    const titulo = document.querySelector("#titulo").value
    if( !artista.trim() || !titulo.trim() ){
        mensaje("complete los campos");
        return
    }
       const api = new consultaAPI(artista,titulo);
       api.llamandoAPI();
       
    }

export function mensaje(mensaje){
    const alerta = document.querySelector('.alerta');
    if(!alerta){
        
        const sms = document.createElement('div');
        sms.classList.add('border','text-center','border-danger','text-danger','p-2','rounded','my-1','alerta');
        sms.textContent = mensaje
        UI.formulario.appendChild(sms);
        //tiempo del sms
        setTimeout(()=>{
            sms.remove();
        },2000)
    
    }
}
