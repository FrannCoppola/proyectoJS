/* let numeroUno = 10;
let numeroDos = 23;
let numeroTres = 5;

let suma = numeroUno + numeroTres;

console.log("resultado", suma);
 */

/* let saludo = "Buenos dias ";
let nombre = prompt("ingrese su nombre");
let bienvenida = (saludo + nombre);

alert (bienvenida); */

for(let i = 1; i <=10; i++){
    let nombreyapellido = prompt ("Ingrese su nombre y apellido, porfavor");
    let mensaje = `Turno n°${i} Nombre: ${nombreyapellido}`;
    alert(mensaje);
}
alert("¡No hay mas turnos disponibles, regrese mañana!");