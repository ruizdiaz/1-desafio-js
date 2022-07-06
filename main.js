//reservar turno 

for (let i = 1; i<=10; i++) {
    let pediatra = prompt("Ingrese nombre del Pediatra");//elijo pediatra
    let ingresarNombre = prompt("Ingresar nombre");// pongo mi nombre
    alert("turno n° "+i+" Nombre: "+ingresarNombre);//me pone la ubicacion del turno
    break;
    
    
    //primero elige pediatra
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
    }







