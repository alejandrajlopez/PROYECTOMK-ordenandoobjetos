class Servicio {
    constructor(nombre, precio, detalle, cantidad)
    {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.detalle = detalle;
        this.cantidad = cantidad;
        this.disponible = true;
    }

    Vender()
    {
        this.disponible = false;
    }

}
var arrayServicios = [];
do{
    var comprobacion = prompt('Ingrese un nobre del servicio o fin para terminar de agregar' );
    if (comprobacion === 'fin'|| comprobacion === "FIN" || comprobacion === "Fin" )
    {
        break;
    }
    else{
        nombreP = comprobacion;
        var precioP = prompt('Ingrese el precio del servicio');
        var detalleP = prompt('Ingrese el detalle del servicio');
        var cantidadP = prompt('Ingrese la cantidad comprada del servicio');
        arrayServicios.push(new Servicio(nombreP, precioP, detalleP, cantidadP));
    
    }
}
    while (comprobacion != "fin"|| comprobacion != "FIN" || comprobacion != "Fin")

    console.log(arrayServicios);


    for (var servicio of arrayServicios)
    {
        document.write("<ul><li><h3>Nombre: " + servicio.nombre + "</h3></li>");
        document.write("<li><h3> Detalle: " + servicio.detalle + "</h3></li>");
        document.write("<li><h3> Cantidad: " + servicio.cantidad + "</h3></li>");
        document.write("<li><h3> Precio: " + servicio.precio + "</h3></li>");
        console.log(servicio.nombre);
        console.log(servicio.detalle);
        console.log(servicio.cantidad);
    }

    var pocosTurnosDisponibles = arrayServicios.filter(servicio => servicio.cantidad <= 5 );
    console.log('Servicios con pocos turnos disponibles, comprar nuevamente: ');
    console.log(pocosTurnosDisponibles);
    document.write("<h3> Lista de Servicios con pocos turnos disponibles (menos de 5 unidades): </h3>");

    for (var servicio of pocosTurnosDisponibles)
    {
        document.write("<ul><li><h3>Nombre: " + servicio.nombre + "</h3></li>");
        document.write("<li><h3> Detalle: " + servicio.detalle + "</h3></li>");
        document.write("<li><h3> Cantidad: " + servicio.cantidad + "</h3></li></ul><br>");
        
    }

    var sinTurnosDisponibles = arrayServicios.filter(servicio => servicio.cantidad == 0 || servicio.disponible == false);
    console.log(sinTurnosDisponibles);
    document.write("<h3> Lista de Servicios sin turnos disponibles (cantidad = 0 o disponible = false): </h3>");

    for (var servicio of sinTurnosDisponibles)
    {
        document.write("<ul><li><h3>Nombre: " + servicio.nombre + "</h3></li>");
        document.write("<li><h3> Detalle: " + servicio.detalle + "</h3></li>");
        document.write("<li><h3> Cantidad: " + servicio.cantidad + "</h3></li></ul><br>");
        
    }

    var ingresado = prompt('Ingresar el Servicio que quiere buscar');
    var servicioIngresado = arrayServicios.filter(servicio => servicio.nombre.includes(ingresado));
    console.log(servicioIngresado);
    document.write("<h3> Lista de Productos ingresados para búsqueda: </h3>");

    for (var servicio of servicioIngresado)
    {
        document.write("<ul><li><h3>Nombre: " + servicio.nombre + "</h3></li>");
        document.write("<li><h3> Detalle: " + servicio.detalle + "</h3></li>");
        document.write("<li><h3> Cantidad: " + servicio.cantidad + "</h3></li></ul><br>");
        
    }

    var ordenadosCantidad = []; 
    ordenadosCantidad = arrayServicios.map(elemento => elemento);
    ordenadosCantidad.sort(function(a, b)
    {
        return a.cantidad- b.cantidad;
    });
    console.log('Ordenados por Cantidad Ascendente ');
    console.log(ordenadosCantidad);
    document.write("<h3> Lista de Servicios ordenados por cantidad: </h3>");

    for (var servicio of ordenadosCantidad)
    {
        document.write("<ul><li><h3>Nombre: " + servicio.nombre + "</h3></li>");
        document.write("<li><h3> Detalle: " + servicio.detalle + "</h3></li>");
        document.write("<li><h3> Cantidad: " + servicio.cantidad + "</h3></li></ul><br>");
        
    }

