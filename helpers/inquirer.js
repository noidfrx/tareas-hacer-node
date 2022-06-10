const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?'.green,
        choices: [
            {
                value: '1',
                name: `${'1.'.red} Crear tarea`
            },
            {
                value: '2',
                name: `${'2.'.red} Ver tareas`
            },
            {
                value: '3',
                name: `${'3.'.red} Ver completadas`
            },
            {
                value: '4',
                name: `${'4.'.red} Ver pendientes`
            },
            {
                value: '5',
                name: `${'5.'.red} Completar tareas`
            },
            {
                value: '6',
                name: `${'6.'.red} Borrar tareas`
            },
            {
                value: '0',
                name: `${'0.'.red} Salir`
            }
        ]
    }
];

//MENU
const inquirerMenu = async() => {

    console.clear();
    console.log("-------------------------".blue);
    console.log("  Seleccione una opción  ".white);
    console.log("-------------------------\n".blue);


    const {opcion} = await inquirer.prompt(preguntas);
    return opcion;
}

const pausa = async()=>{
    const {enter} = await inquirer.prompt(
        {
            type: 'input',
            name: 'enter',
            message: '\nPresione ENTER para continuar\n'
        });
    //return enter;
}

const leerInput = async(message) => {
    const {desc} = await inquirer.prompt([
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value){
                if(value.length === 0){
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ]);

    return desc;

}

const listadoTareasBorrar = async(tareas = []) =>{

    //QUEREMOS ESTRUCTURA DE CHOICES UN ARREGLO DE OBJETOS
    /*{
        value: '1',
        name: `${'1.'.red} Crear tarea`
    },*/
    //map en arreglos NOS PERMITE CREAR UN ARREGLO DONDE CADA ESPACIO TENDRÁN LA ESTRUCTURA POR CADA ITERACIÓN
    const choices = tareas.map( (tarea,i) => {
        const idx = `${i+1}`.green;
        return{
            value:tarea.id,
            name:`${idx} ${tarea.desc}`
        }
    });

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]
    const {id} = await inquirer.prompt(preguntas);
    return id;
} 

const confirmar = async(message) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]

    const {ok} = await inquirer.prompt(question);
    return ok;
}

const mostrarListadoChecklist = async(tareas = []) =>{

    //QUEREMOS ESTRUCTURA DE CHOICES UN ARREGLO DE OBJETOS
    /*{
        value: '1',
        name: `${'1.'.red} Crear tarea`
    },*/
    //map en arreglos NOS PERMITE CREAR UN ARREGLO DONDE CADA ESPACIO TENDRÁN LA ESTRUCTURA POR CADA ITERACIÓN
    const choices = tareas.map( (tarea,i) => {
        const idx = `${i+1}`.green;
        return{
            value:tarea.id,
            name:`${idx} ${tarea.desc}`,
            checked: (tarea.completadoEn) ? true : false
        }
    });

    const preguntas = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Seleccione',
            choices
        }
    ]
    const {ids} = await inquirer.prompt(preguntas);
    return ids;
} 

module.exports = {
    inquirerMenu,
    pausa, 
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist
}