const Tarea = require("./tarea");
require('colors');

class Tareas {
    _listado = {};

    get listadoArr(){

        const listado = [];

        //Extraer cada una de las llaves de un objeto
        Object.keys(this._listado).forEach( key => {
            //Se añade al listado cada tarea
            listado.push(this._listado[key])
        });

        return listado;
    }

    constructor(){
        this._listado = {};
    }

    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    cargarTareasFromArray(tareas=[]){
        tareas.forEach(obj => {
            this._listado[obj.id]=obj;
        });
    }

    listadoCompleto(){
        console.log();
        this.listadoArr.forEach( (tarea, idx) => {
            let i = idx+1;

            if(tarea.completadoEn === null){
                console.log(`${i}. ${tarea.desc}\t\t :: Sin completar`.red);
            }else{
                console.log(`${i}. ${tarea.desc}\t\t :: Completada`.green);
            }
        });
    }
}

module.exports = Tareas;