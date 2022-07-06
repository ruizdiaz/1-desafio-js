//reservar turno 
let turnos = parseInt(prompt(`Ingrese cuantos turnos quiere`));
while (turnos > 0) {
    alert(`Pediatras disponibles: \n fernandez \n virgile \n garcia`);//me pone la ubicacion del turno

    let pediatra = prompt("Ingrese nombre del Pediatra");//elijo pediatra
    let ingresarNombre = prompt("Ingresar nombre");// pongo mi nombre
  
    
    
    //primero elige pediatra
    switch(pediatra) {
        case "fernandez":
        alert ("su turno fue agendado con fernandez");
        turnos--;
        break;
        case "virgile":
        alert ("su turno fue agendado con virgile");
        turnos--;
        break;
        case "garcia":
        alert ("su turno fue agendado con garcia");
        turnos--;
        break;
        default:
            alert("No se encuentra" + pediatra);
        break;
    }
}
    







