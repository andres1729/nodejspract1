/* las funciones flechas se definen como () =>{
    //
}
se asemejan un poco a las funciones lambda
*/

function saludo(){
    console.log('lobo estepario, un ser estraño, salvaje y sombrio')
}
//console.log(module);
let lobos = 3000;
/*
module.exports.saludo = function(){
    console.log('lobo estepario, un ser estraño, salvaje y sombrio');
}

module.exports.lob = lobos; */

module.exports = {
    lob : lobos,
    saludo : function(){
        console.log('de otro mundo que mi mundo');
    }
}

sumar: (a,b)=> a + b;
mostrar: (a) => a+10

