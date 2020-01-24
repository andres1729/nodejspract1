const _ =require('lodash');
const argv = require('yargs').argv;

console.log(argv.argv);
let comando = process.argv[2];

if(comando === 'usuario'){
        let x = {"nombre": "David"}
        let y = {"profesion": "matematico"}
        let z = [
            {nombre: "David", apellido: "Hilbert", edad: 26},
            {nombre: "George", apellido: "Cantor", edad: 26},
        ] 
        /*
        let resultado = _.assign(x,y);
        console.log(resultado);
        */

        //_.times(3, ()=> console.log('cuantica'));
 
        //encontrar objetos dentro de otro objetos
        let resultado = _.find(z, {"nombre": "David"});
        console.log(resultado);
    }
    else{
        console.log('Usuario no valido');
    }
