var hola = "Hola mundo"; 
let hello = "Hello world";

console.log(hola); 
console.log(hello);

var musica = "Rock";
console.log("Variable música antes del bloque", musica);
//Esto es un bloque
{
    var musica = "pop";
    console.log("Variable música dentro del bloque", musica);
}
console.log("Variable música después del bloque", musica);


let musica2 = "Rock";
console.log("Variable música antes del bloque", musica2);
//Esto es un bloque
{
    let musica2 = "pop";
    console.log("Variable música dentro del bloque", musica2);
}
console.log("Variable música después del bloque", musica2);
