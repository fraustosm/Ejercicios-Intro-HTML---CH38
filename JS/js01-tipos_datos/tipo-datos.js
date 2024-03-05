console.log("Sesión JS01 tipos de datos");

*
 Cuando se realizna operaciones que exceden los límites
 de MAX_SAFE_INTEGER se produce una pérdida de precisión.
*/
console.log( `MAx_SAFE_INTEGER + 1 : ${ Number.MAX_SAFE_INTEGER + 1} ` ); // 9007199254740992
console.log( `MAx_SAFE_INTEGER + 2 : ${ Number.MAX_SAFE_INTEGER + 2} ` ); // 
console.log( `MAx_SAFE_INTEGER + 3 : ${ Number.MAX_SAFE_INTEGER + 3} ` ); // 
console.log( `MAx_SAFE_INTEGER + 4 : ${ Number.MAX_SAFE_INTEGER + 4} ` ); // 
console.log( `MAx_SAFE_INTEGER + 5 : ${ Number.MAX_SAFE_INTEGER + 5} ` ); //

/*
 Tipo de dato null
 Una variable que intensionalmente se borra el tipo
 de dato.

*/
let myVarNull; // undefined
console.log(`Tipo de dato en myVarNull: ${ typeof myVarNull}`); // undefined
myVarNull = "Death Metal";
console.log(`Tipo de dato en myVarNull: ${typeof myVarNull}`); // string
myVarNull = null;
console.log(`Tipo de dato en myVarNull: ${typeof myVarNull}`); // object
console.log(`myVarNull es null: ${ myVarNull === null }`); // true

/*
 Tipo de dato boolean
 Tiene dos estados: true y false 

*/
console.log(`Tipo de dato verdadero: ${ true }`);
console.log(`Tipo de dato false: ${ false }`);