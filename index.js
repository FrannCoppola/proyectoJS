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
    let precioProductos = Number(
        prompt(
            `Ingrese el nombre del producto que desea agregar ${
                contador + 1
            } : \n\n1- Fideos $${fideos} \n2- Agua $${agua} \n3- Pan $${pan} \n4- Caramelos $${caramelos}`
        )
    );

    while (precioProductos !=0) {
        gastoTotal = calcularTotal(precioProductos);
        contador++;
        precioProductos = Number( 
            prompt(
                `Ingrese el precio del producto que desea agregar ${
                    contador + 1
                } : \n\n1- Fideos $${fideos} \n2- Agua $${agua} \n3- Pan $${pan} \n4- Caramelos $${caramelos}`
            )
        );
    }

    if ((precioProductos = 0)) {
        alert(`Ha terminado de agregar productos`)
        
    }

}

function calcularTotal(precioProductos) {
    return gastoTotal + precioProductos;
}

function mostrarTotal() {
    alert(`Cantidad de productos: ${contador} \n\nEl total es de $${gastoTotal}`);
}