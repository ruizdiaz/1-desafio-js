//Ingresar Socios A sanitos
class socio {
    constructor(nombre, apellido, dni, fechaNacimiento) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.fechaNacimiento = fechaNacimiento;
    }
}
const crearSocios = () => {
    let nombreSocio = prompt("Ingresa tu Nombre").toLowerCase;
    let apellidoSocio = prompt("Ingresa tu Apellido").toLowerCase;
    let dniSocio = parseInt(prompt("Ingrese su DNI"));
    let fechaNacimientoSocio = parseInt(prompt("Ingresa tu Fecha de nacimiento DD/MM/AAAA"));
const socio1 = new socio (nombreSocio, apellidoSocio, dniSocio, fechaNacimientoSocio);
return socio1;
}
console.log(socio);




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
function buscarTarea(){
    lista.find()
    console.log(lista);
}
let toDo = parseInt(prompt("Bienvenidos a Sanitos! \n 1 - Reservar Turno \n 2 - Turno \n 3 - Eliminar turno \n 4 - esc"));
while (toDo != 4) {
    if (toDo === 1) {
      let newReserva = prompt("Ingresar su nombre");
      agregarTarea(newReserva);
      toDo = alert("Su turno fue agendado");
      toDo = parseInt(prompt("Bienvenidos a Sanitos! \n 1 - Quiere reservar otro turno? \n 2 - Turno \n 3 - Eliminar turno \n 4 - esc"));
    
    } else if (toDo === 2) {
        lista.forEach(el => {alert(`${lista} tiene un turno registrado`)})
          toDo = parseInt(prompt("Bienvenidos a Sanitos! \n 1 - Reservar Turno \n 2 -  Turno \n 3 - Eliminar turno \n 4 - esc"));
        }
    
    else if (toDo === 3) {
        let newReserva = prompt("Ingrese su nombre como reservo")
    sacarTarea(newReserva);
    toDo = alert("su turno fue cancelado");
    toDo = parseInt(prompt("Bienvenidos a Sanitos! \n 1 - Reservar Turno \n 2 - Turno \n 3 - Eliminar turno \n 4 - esc"));

    } else  {
        alert("Dato erroneo, intente nuevamente"),
        toDo = parseInt(prompt("Bienvenidos a Sanitos! \n 1 - Reservar Turno \n 2 -  Turno \n 3 - Eliminar turno \n 4 - esc"));
    }
}
    alert("Gracias por su visita, vuelva pronto");


    






