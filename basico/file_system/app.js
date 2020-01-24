const fs = require('fs');

//lo siguiente es la instruccion para la creacion del archivo dato.txt

/* 
fs.appendFile('dato.txt', '... su fondo esta profundo que nisiquiera el agua mas clara lo traiciona', function(error){
    if(error){
        console.log('Error al crear archivo');
    }
    
}); 
*/


console.log('inicializado')
//el siguiente codigo permite una ejecucion asincrona

/* 
fs.readFile('dato.txt', 'utf-8', (error, dato)=>{
    if(error){
        console.log(`Error ${error}`);
    }
    else{
        console.log(dato);
    }
}); 
*/

//el siguiente codigo permite una ejecucion sincrona
let dato  = fs.readFileSync('dato.txt', 'utf-8');
console.log(dato);

console.log('Finalizado')

//para renombrar el archivo dato.txt a dato_renombrado
/*
fs.rename('dato.txt', 'dato_renombrado.txt', (error)=>{
    if(error) throw error;
    console.log('Renombrado');
});
*/

//para introducir texto(o datos) a dato.txt
/*
fs.appendFile('dato.txt', '\n Érase una vez un individuo, de nombre Harry, llamado el lobo estepario.', (error)=>{
    if(error) console.log(`Error ${error}`);
});
*/

//para eliminar datos de dato.txt tenemos el siguiente codigo
/*
fs.unlink('dato2.txt', (error)=>{
    if(error) throw error;
    console.log('Eliminado');
});
*/

//copiar contenido de dato.txt a otro archivo
fs.createReadStream('dato.txt').pipe(fs.createWriteStream('dato3.txt'));