const colors = require('colors');

const mostrarMenu = () => {

    return new Promise((resolve)=>{
        console.clear();

        console.log(`${"1.".gray} Crear tarea`.gray);
        console.log(`${"2.".gray} Ver tareas`.gray);
        console.log(`${"3.".gray} Ver completadas`.gray);
        console.log(`${"4.".gray} Ver pendientes`.gray);
        console.log(`${"5.".gray} Completar tareas`.gray);
        console.log(`${"6.".gray} Borrar tareas`.gray);
        console.log(`${"0.".gray} Salir \n`.gray);

        //INTERFAZ A UTILIZAR PARA MOSTRAR Y RECIBIR INFO
        const readline = require('readline').createInterface({
            input: process.stdin,
            output:process.stdout
        });

        //Lo que se le mostrará al usuario
        readline.question('Seleccione una opción: ', (opt)=>{
            //Se deja de esperar info de usuario
            readline.close();
            resolve(opt);
        })
    });
    
}

//Pausa de la app
const pausa = () => {

    return new Promise((resolve)=>{
        //INTERFAZ A UTILIZAR PARA MOSTRAR Y RECIBIR INFO
        const readline = require('readline').createInterface({
            input: process.stdin,
            output:process.stdout
        });

        //Lo que se le mostrará al usuario
        readline.question('\nPresione ENTER para continuar\n', (opt)=>{
                //Se deja de esperar info de usuario
            readline.close();
            resolve();
        })
    });
    
}

module.exports = {
    mostrarMenu,
    pausa
}