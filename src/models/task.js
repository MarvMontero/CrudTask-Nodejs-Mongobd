const mongoose = require('mongoose');
const Schema = mongoose.Schema; //es una propiedad que nos permite definir como van a lucir los datos.

const TaskSchema =new Schema({
    title: String,
    description : String,
    status : {
        type: Boolean,
        default : false
    }
    //se coloca por default en falso la propiedad, colocando un objeto y defiendolo.
});

module.exports = mongoose.model('tasks',TaskSchema); //toma el schema y lo utiliza para guardar datos en una colección de mongodb, en este método se coloca el nombre de la colección.