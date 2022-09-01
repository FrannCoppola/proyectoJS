let gastoTotal = 0;
let contador = 0;

alert(`Sume los productos que desea agregar al carrito// coloque 0 para finalizar.`);

ingresarProductos();
mostrarTotal();

function ingresarProductos() {
    const fideos = 100;
    const agua = 240;
    const pan = 320;
    const caramelos = 30;
    precioProductos = prompt(`Ingrese el nombre del producto que desea agregar` + (contador + 1) + `:`);


    while (precioProductos !=0) {
        gastoTotal = calcularTotal(precioProductos);
        contador++;
        precioProductos = prompt(`Ingrese el nombre del producto` + (contador + 1) + `:`);
    }

    if (precioProductos = 0) {
        alert(`Ha terminado de agregar productos`)
        
    }

}
/* Hasta aca todo bien, cuando pongo "0" se finaliza, pero suma los productos literalmente (El total del carrito es de $0fideosagua) */
function calcularTotal(precioProductos) {
    return gastoTotal + precioProductos;
}

function mostrarTotal() {
    alert(`El total del carrito es de $` + gastoTotal);
    alert(`Cantidad de productos: ` +  contador);
}