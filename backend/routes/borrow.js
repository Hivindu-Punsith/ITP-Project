const express = require('express');
const router = express.Router();
const Borrow  = require('../models/borrow');

//get data
router.get('/',(req,res)=>{
    Borrow.find()
    .then(add=>res.json(add))
    .catch (err => res.status(400).json(`Error: ${err}`))
});

// add new data 
router.post('/addborrow',(req,res)=>{
    const newBorrow = new Borrow ({
        NIC:req.body.NIC,
        Book_Name:req.body.Book_Name,
        Borrowed_Date:req.body.Borrowed_Date,
        Return_Date:req.body.Return_Date,
        
    })    
    newBorrow 
    .save()
    .then(()=>res.json("The Books is Borrowed Successfully"))
    .catch(err => res.status(400).json(`Error:${err}`));
});

// find by id 
router.get('/:id',(req,res)=>{//we can put any name insted of id 
    Borrow.findById(req.params.id)
    .then (borrowbook => res.json(borrowbook))
    .catch (err => res.status(400).json(`Error: ${err}`));
});

router.put('/update/:id',(req,res)=>{
    Borrow.findById(req.params.id)
    .then(updateborrow=> {
        updateborrow.NIC=req.body.NIC,
        updateborrow.Book_Name=req.body.Book_Name,
        updateborrow.Borrowed_Date=req.body.Borrowed_Date,
        updateborrow.Return_Date=req.body.Return_Date,
        

        updateborrow
        .save()
        .then(()=> res.json("The Borrowed Book is Updated Successfully"))
        .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
});
//find by id and delete
router.delete('/:id',(req,res)=>{
    Borrow.findByIdAndDelete(req.params.id)
    .then(() => res.json("The Borrowedb Book is Deleted Successfully"))
    .catch(err => res.status(400).json(`Error: ${err}`));

})

module.exports = router;