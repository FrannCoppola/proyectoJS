let baseDatos = [];
let nuevoProducto;
const tbodyTabla = document.querySelector('.table tbody');

function capturar() {
	let productoInput = document.getElementById('producto1').value;
	console.log(productoInput);
	let cantidadInput = document.getElementById('cantidad1').value;
	console.log(cantidadInput);

	nuevoProducto = new Producto(productoInput, cantidadInput);
	console.log(nuevoProducto);
	agregar();
}

class Producto {
	constructor(producto, cantidad) {
		this.producto = producto;
		this.cantidad = cantidad;
	}
}

function agregar() {
	console.log('Datos agregados');
	baseDatos.push(nuevoProducto);
	console.log(baseDatos);

	tbodyTabla.innerHTML = '';

	baseDatos.forEach(function (registro) {
		tbodyTabla.innerHTML += `<tr><td>${registro.producto}</td><td>${registro.cantidad}</td></tr>`;
	});
}
