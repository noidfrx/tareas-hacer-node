const colors = require('colors');
const { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoChecklist} = require('./helpers/inquirer');
//const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');
const {guardarDB, leerDB} = require('./helpers/guardarArchivo');
//const { mostrarMenu, pausa } = require('./helpers/mensajes');

console.clear();

const main = async() => {

    let opt = 0;
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if(tareasDB){
        //Establecer tareas
        tareas.cargarTareasFromArray(tareasDB);
    }

    do{
        //ESPERAMOS TENER RESPUESTA PROMESA DE LA FUNCION MOSTRAR MENU
        opt = await inquirerMenu();
        switch(opt){

            case '1': 
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea(desc);
            break;
            
            case '2': 
                tareas.listadoCompleto();
            break;
            
            case '3': 
                tareas.listarPendientesCompletadas(true);
            break;
            
            case '4': 
                tareas.listarPendientesCompletadas(false);
            break;
            
            case '5': 
                const ids = await mostrarListadoChecklist(tareas.listadoArr);
                tareas.toggleCompletadas(ids);
            break;
            
            case '6': 
                const id = await listadoTareasBorrar(tareas.listadoArr);
                const ok = await confirmar('¿Está seguro que desea borrar la tarea seleccionada?');

                if(ok){
                    tareas.borrarTarea(id);
                    console.log('Tarea borrada correctamente');
                }
            break;

            case '0': 
            break;
        }

        guardarDB(tareas.listadoArr);    

        if(opt!=='0') await pausa();

    }while(opt !== '0');

}

main();