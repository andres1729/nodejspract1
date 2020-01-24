const OS = require('os');
const fs = require('fs');
const mi = require('./mit.js');

let cpu = OS.cpus();
let sistema = OS.platform();
let usuario = OS.hostname();

//mi.saludo();
//console.log(mi.lob);
//let rpt = mi.sumar(2, 2);

setTimeout(() => {
    console.log("yo no supe, en verdad hasta que lei sus anotaciones")
}, 3000)
//let rpt = mi.mostrar(10);
//console.log(rpt);

/*
fs.appendFile('mitlily.txt', 'su tragedia fue la de una soledad enorme', function(error){
    if(error){
        console.log('Error al crear archivo');
    }
    
}); */

/*
fs.appendFile('mit.txt', 'Informacion de la cpu' + JSON.stringify(cpu), function(error){
    if(error){
        console.log('Error al crear archivo');
    }
}); */