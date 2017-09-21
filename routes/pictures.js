const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const db = mongojs('mongodb://virtnet:1234@ds153413.mlab.com:53413/virtnet',['gallery']);

//get all pics
router.get('/pictures',(req,res,next)=>{
    db.gallery.find((err,pictures)=>{
        if(err){
            res.send(err);
        }else{
            res.json(pictures);
        }
    });
});
//get picture by id
router.get('/picture/:id',(req,res,next)=>{
    let id = req.params.id;
    db.gallery.findOne({_id:mongojs.ObjectId(id)},(err,picture)=>{
        if(err){
            res.send(err);
        }else{
            res.json(picture);
        }
    });
});

module.exports = router;