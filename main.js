//reservar turno 
let lista = [];
function agregarTarea (reserva){
    lista.push(reserva);
    console.log(lista);
}
function sacarTarea(){
    lista.shift()
    console.log(lista);
}
let toDo = parseInt(prompt("Bienvenidos a Sanitos! \n 1 - Reservar Turno \n 2 - Eliminar Turno \n 3 - esc"));
while (toDo != 3) {
    if (toDo === 1) {
      let newReserva = prompt("Ingresar su nombre");// pongo mi nombre
      agregarTarea(newReserva);
      toDo = alert("Su turno fue agendado");
      toDo = parseInt(prompt("Bienvenidos a Sanitos! \n 1 - Quiere reservar otro turno? \n 2 - Eliminar Turno \n 3 - esc"));
    } else if (toDo === 2) {
        let newReserva = prompt("Ingrese su nombre como reservo")
    sacarTarea(newReserva);
    toDo = alert("su turno fue cancelado");
    toDo = parseInt(prompt("Bienvenidos a Sanitos! \n 1 - Reservar Turno \n 2 - Eliminar Turno \n 3 - esc"));
} else {
    alert("Dato erroneo, intente nuevamente"),
    toDo = parseInt(prompt("Bienvenidos a Sanitos! \n 1 - Reservar Turno \n 2 - Eliminar Turno \n 3 - esc"));
}

}
alert("Gracias por su visita, vuelva pronto");

   









