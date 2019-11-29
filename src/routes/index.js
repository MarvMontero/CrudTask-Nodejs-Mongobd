const express = require('express');
const router = express.Router();

const Task= require('../models/task');

router.get('/', async (req , res)=> {
    const tasks= await Task.find(); //bringing the data from data base.
    res.render('index' , {
        tasks // tasks : tasks it´s the same.
        //sent the data of tasks to index
    });
});

router.post('/add', async (req ,res) =>{
    const task = new Task(req.body); 
    await task.save(); //this allow me to save the data into the data base. 
    res.redirect('/'); //this redirect to the home page when it saves a data.

});

router.get('/turn/:id', async (req, res)=>{
    const {id}= req.params;//getting id 
    const task= await Task.findById(id);
    task.status= !task.status;
    await task.save();
    res.redirect('/');
});

router.get('/edit/:id', async (req, res)=>{
    const {id} = req.params;
    const task = await Task.findById(id);
    res.render('edit', {
        task
    });
});

router.post('/edit/:id', async (req, res)=>{
    const {id}= req.params;
    await Task.update({_id : id}, req.body);
    res.redirect('/');
});

router.get('/delete/:id',  async (req, res)=>{
    const {id} = req.params; //getting id 
    await Task.remove({_id: id}); //biding the data from the database through the id.
    res.redirect('/');
});
module.exports= router;