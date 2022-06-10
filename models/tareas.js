const Tarea = require("./tarea");
require('colors');

class Tareas {
    _listado = {};

    get listadoArr() {

        const listado = [];

        //Extraer cada una de las llaves de un objeto
        Object.keys(this._listado).forEach(key => {
            //Se añade al listado cada tarea
            listado.push(this._listado[key])
        });

        return listado;
    }

    constructor() {
        this._listado = {};
    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    cargarTareasFromArray(tareas = []) {
        tareas.forEach(obj => {
            this._listado[obj.id] = obj;
        });
    }

    listadoCompleto() {
        console.log();
        this.listadoArr.forEach((tarea, idx) => {
            let i = idx + 1;

            if (tarea.completadoEn === null) {
                console.log(`${i}. ${tarea.desc} :: Sin completar`.red);
            } else {
                console.log(`${i}. ${tarea.desc} :: Completada`.green);
            }
        });
    }

    listarPendientesCompletadas(completadas = true) {
        console.log();
        let i = 1;
        this.listadoArr.forEach((tarea, idx) => {
            if (completadas == true) {
                if (tarea.completadoEn !== null) {
                    console.log(`${i}. ${tarea.desc} :: ${tarea.completadoEn}`.green);
                    i++;
                }
            }else{
                if (tarea.completadoEn == null) {
                    console.log(`${i}. ${tarea.desc}`.red);
                    i++;
                }
            }
        });
    }

    borrarTarea( id = ''){
        if(this._listado[id]){
            delete this._listado[id];
        }        
    }

    toggleCompletadas(ids = []){

        ids.forEach( id =>{

            const tarea = this._listado[id];
            if(!tarea.completadoEn){
                tarea.completadoEn = new Date().toISOString();
            }

        });

        this.listadoArr.forEach( tarea => {

            if(!ids.includes(tarea.id)){
                //Guardamos tarea que no se encontrará en los completados para marcar como no completado
                this._listado[tarea.id].completadoEn = null;
            }
        });
    }
}

module.exports = Tareas;