import {hero} from './data/hero.js';

export function MyApp(){

    const element = "Hello, world!";
    const nombre = 'Gianni';
    const apellido ='Freire';
    const NombreCon = nombre + ' ' + apellido;

    
    console.log(element);
    console.log( getSaludo(NombreCon) );
    console.log(hero);

    }
    

function getSaludo(nombreCon){
    return 'Hola, ' + nombreCon + '!';
}