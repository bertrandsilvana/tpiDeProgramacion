// Este juego consiste en descubrir la palabra que se encuentra desordenada , en 3 intentos.

const matriz =[["quirquincho","hipocampo","tiburon"],["lechuza","pelicano","lombriz"],["gusano","escorpión","cangrejo"],["tortuga","nutria","gallina"],["jirafa","jabalí","jaguar"],["colibrí","cuervo","ciervo"],["ballena","huron","liebre"]];
let palabraSeleccionada="";
//console.log(matriz)
let aleatoria =matriz[Math.floor(Math.random()*matriz.length)][Math.floor(Math.random()*matriz[0].length)];
palabraSeleccionada=aleatoria;
//console.log(palabraSeleccionada);
//AHORA DESORDENO LAS LETRAS DE LA PALABRA
function DesordenoLetrasdePalabra (palabra){
let arreglo=palabra.split("");
for(let i=arreglo.length-1;i>=0; i--){
let j=Math.floor(Math.random()*(i+1));
let temporal=arreglo[i];
arreglo[i]=arreglo[j];
arreglo[j]=temporal;
}
return arreglo.join("");
}
//console.log(DesordenoLetrasdePalabra(palabraSeleccionada));
let saludo=prompt("Hola, estas listo para armar este anangrama de animales?, debes resolverlo en 3 intentos");
if (saludo=="si"){
    console.log("la palabra que debes descubrir es" + DesordenoLetrasdePalabra (palabraSeleccionada));
let intentos=1;
let ingresaturespuesta=prompt("Ingresa tu respuesta");
while(ingresaturespuesta!==palabraSeleccionada && intentos<3){
    let resultado=prompt("Palabra incorrecta, vuelve a intentar");
    ingresaturespuesta=resultado;//para actualizar la respuesta
    intentos ++
}
if(ingresaturespuesta==palabraSeleccionada){
    console.log("¡felicitaciones acertaste!")
}else{
    console.log("lo siento se terminaron los intentos, la palabra era:"+palabraSeleccionada);
}
}else {
    let finalizar="gracias por participar";
 alert (finalizar);
}
