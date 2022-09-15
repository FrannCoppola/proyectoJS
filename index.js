let input1 = document.getElementById('nombre');
let input2 = document.getElementById('cliente');
let miFormulario = document.getElementById('formulario');
let boton = document.getElementById('boton');
let mostrarHijosFormulario = document.getElementById(
	'mostrar-hijos-formulario'
);
let cantidadElementosFormulario = document.getElementById(
	'cantidad-elementos-formulario'
);

function validarFormulario(e) {
	e.preventDefault();
	console.log('Enviando mensaje desde la función validarFormulario()');
}

function validarFormulario2(e) {
	//Cancelamos el comportamiento del evento submit
	e.preventDefault();
	console.log(
		'\nEnviando mensaje desde la función validarFormulario2() esta es otra función'
	);

	//Obtenemos el elemento desde el cual se disparó el evento
	let formulario = e.target;
	console.log(formulario);

	const coleccionHijos = miFormulario.children;
	let elementosFormulario = '';
	for (let i = 0; i < miFormulario.children.length; i++) {
		elementosFormulario += coleccionHijos[i].tagName + '<br>';
	}

	mostrarHijosFormulario.innerHTML = elementosFormulario;
	cantidadElementosFormulario.innerHTML = `Cantidad de elementos del formulario : ${coleccionHijos.length}`;
}
