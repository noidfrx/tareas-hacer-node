const colors = require('colors');

const mostrarMenu = () => {

    console.clear();
    console.log("-------------------------".blue);
    console.log("  Seleccione una opción  ".blue);
    console.log("-------------------------\n".blue);

    console.log(`${"1.".gray} Crear tarea`.gray);
    console.log(`${"2.".gray} Ver tareas`.gray);
    console.log(`${"3.".gray} Ver completadas`.gray);
    console.log(`${"4.".gray} Ver pendientes`.gray);
    console.log(`${"5.".gray} Completar tareas`.gray);
    console.log(`${"6.".gray} Borrar tareas`.gray);
    console.log(`${"0.".gray} Salir \n`.gray);

}

module.exports = {
    mostrarMenu
}