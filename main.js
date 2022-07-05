//reservar turno es por orden de llegada 

    let pediatra = prompt("Ingrese nombre del Pediatra");
let nombre = prompt("Ingrese su nombre");


//primero eligio pediatra
switch(pediatra) {
    case "fernandez":
    alert ("su turno fue agendado con fernandez");
    break;
    case "virgile":
    alert ("su turno fue agendado con virgile")
    break;
    case "garcia":
    alert ("su turno fue agendado con garcia");
    break;
    default:
        alert("No se encuentra" + pediatra);
    break;
}






