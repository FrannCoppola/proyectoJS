let servicios = [];
let repetir = true;

// clase Producto
class Servicio {
	constructor(nombre, costo, mes) {
		this.nombre = nombre;
		this.costo = costo;
		this.mes = mes;
	}
}

function crearServicio() {
	let nuevoServicio = [];
	let nombre = '';
	let costo = 0;
	let mes = 0;

	nombre = prompt('Introduzca el nombre del servicio');
	costo = Number(prompt('Introduzca el costo del servicio'));
	mes = Number(prompt('Introduzca el mes de facturación'));

	nuevoServicio = new Servicio(nombre, costo, mes);

	return nuevoServicio;
}

function agregarServicios() {
	return servicios.push(crearServicio());
}

while (repetir) {
	let consulta;
	alert(
		'Introduzca los datos del servicio (agua,gas,luz,etc) que desea agregar.'
	);
	agregarServicios();

	do {
		consulta = Number(
			prompt(
				'¿Desea introducir los datos de otro servicio? Seleccione una opción(1 o 2) \n\n1- Si \n2- No'
			)
		);
		if (consulta == 1) {
			alert('Ha seleccionado ingresar un nuevo servicio');
		} else if (consulta == 2) {
			alert('Ha seleccionado no ingresar más servicios');
			repetir = false;
		} else {
			alert(
				':( Ha introducido una opción incorrecta, por favor selecciona la opción(1 o 2)'
			);
		}
	} while (consulta < 1 || consulta > 2);
}

console.log(servicios);
