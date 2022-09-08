let id = 0;
let nombre = '';
let valor = 0;
let cantidad = 0;
let repetir = true;
let respuesta = 0;
let mostarProductos = '';
let arregloProductos = [];

class Producto {
	constructor(id, nombre, valor, cantidad) {
		(this.id = id),
			(this.nombre = nombre),
			(this.valor = valor),
			(this.cantidad = cantidad),
			(this.subtotalProducto = 0);
	}

	subtotalPorProducto() {
		this.subtotalProducto = this.valor * this.cantidad;
	}
}

respuesta = parseInt(
	prompt(
		'Bienvenido al autoservicio "Lo de Juan". Seleccione la opción que desee, y luego presione aceptar. \n\n1.Agregar producto \n2.Salir\n'
	)
);

do {
	if (respuesta == 1) {
		ingresarProducto();
		alert('Producto ingresado con exito. :)');
		respuesta = parseInt(
			prompt(
				'Presione el número correspondiente a la opción del menú que desea realizar y luego haga click en aceptar. \n\n1.Agregar producto \n2.Salir\n'
			)
		);
	} else if (respuesta == 2) {
		repetir = false;
		alert('Ha seleccionado salir.');
	} else {
		alert(
			'Ingresaste una opción incorrecta. Por favor vuelva a intentarlo. :('
		);
		respuesta = parseInt(
			prompt(
				'Presione el número correspondiente a la opción del menú que desea realizar y luego haga click en aceptar. \n\n1.Agregar producto \n2.Salir\n'
			)
		);
	}
} while (repetir);

arregloProductos.forEach(recorrerArreglo);
alert(JSON.stringify(arregloProductos));
console.log(`Arreglo productos: ${JSON.stringify(arregloProductos)}`);
console.log(arregloProductos);
console.log(typeof `Arreglo productos: ${JSON.stringify(arregloProductos)}`);
console.log(typeof arregloProductos);

document.getElementById('mostrar').innerHTML = mostarProductos;
eliminarProducto();
totalGeneral();

mostarProductos = '';
arregloProductos.forEach(recorrerArreglo);
alert(JSON.stringify(arregloProductos));
console.log(arregloProductos);
document.getElementById('mostrar').innerHTML = mostarProductos;

function ingresarProducto() {
	let nuevoProducto;

	id = ++id;
	nombre = prompt(`Introduzca el nombre del producto${id}.`);
	valor = Number(prompt(`Introduzca el valor del producto${id}.`));
	cantidad = Number(prompt(`Introduzca la cantidad del producto${id}.`));
	nuevoProducto = new Producto(id, nombre, valor, cantidad);
	nuevoProducto.subtotalPorProducto();
	console.log(nuevoProducto);
	arregloProductos.push(nuevoProducto);
}

function recorrerArreglo(item, index) {
	mostarProductos += index + ': ' + JSON.stringify(item) + '<br>';
}

function eliminarProducto() {
	let preguntar = true;
	let respuesta = '';
	let borrarProducto = '';
	let productoEncontrado = '';

	respuesta = parseInt(
		prompt('Desea eliminar un producto \n\n1- Sí \n2- No.')
	);

	while (preguntar) {
		if (respuesta == 1) {
			borrarProducto = prompt(
				'Introduzca la información del producto a eliminar'
			);
			productoEncontrado = arregloProductos.find(
				(producto) => producto.nombre === borrarProducto
			);
			if (productoEncontrado) {
				alert('Producto a eliminar encontrado.');
				arregloProductos = arregloProductos.filter(
					(producto) => producto.nombre !== borrarProducto
				);
				respuesta = parseInt(
					prompt('¿Desea eliminar otro producto? \n\n1- Sí \n2- No.')
				);
			} else {
				alert('No se encontro el producto que desea eliminar.');
				respuesta = parseInt(
					prompt('¿Desea eliminar un producto? \n\n1- Sí \n2- No.')
				);
			}
		} else if (respuesta == 2) {
			alert('Ha seleccionado no eliminar productos.');
			preguntar = false;
		} else {
			alert(
				'Ha seleccionado una opción no válida intrduzca (1) si desea eliminar un producto o (2) en caso contrario .'
			);
			respuesta = parseInt(
				prompt('¿Desea eliminar un producto? \n\n1- Sí \n2- No.')
			);
		}
	}
}

function totalGeneral() {
	let productoTotal = arregloProductos.reduce(
		(total, producto) => total + producto.subtotalProducto,
		0
	);
	console.log(`Total : $${productoTotal}`);
	document.getElementById(
		'mostrar-total'
	).innerText = `TOTAL : $${productoTotal}`;
}
