const express = require("express");
const multer = require("multer");
const router =  express.Router();

const AddBooks = require ("../models/addBook");

const storage  = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./frontend/public/uploads/");
    },

    filename:(req,file,callback)=>{
        callback(null,file.originalname);
    }
})

const upload = multer({storage:storage});
//get data
router.get('/',(req,res)=>{
    AddBooks.find()
    .then(add=>res.json(add))
    .catch (err => res.status(400).json(`Error: ${err}`))
});

// add new data 
router.post('/add',upload.single("BookImage"),(req,res)=>{
    const newBook = new AddBooks ({
        Book_Id:req.body.Book_Id,
        Book_Name:req.body.Book_Name,
        Author:req.body.Author,
        Category:req.body.Category,
        No_of_Copies:req.body.No_of_Copies,
        BookImage:req.file.originalname ,
    })    
    newBook 
    .save()
    .then(()=>res.json("The Book Added Successfully"))
    .catch(err => res.status(400).json(`${err}`));

});

// find by id 
router.get('/:id',(req,res)=>{//we can put any name insted of id 
    AddBooks.findById(req.params.id)
    .then (addBooks => res.json(addBooks))
    .catch (err => res.status(400).json(`Error: ${err}`));
});

//find by id and update
router.put('/update/:id',upload.single("BookImage"),(req,res)=>{
    AddBooks.findById(req.params.id)
    .then(updatebook=> {
        updatebook.Book_Id=req.body.Book_Id;
        updatebook.Book_Name=req.body.Book_Name;
        updatebook.Author=req.body.Author;
        updatebook.Category=req.body.Category;
        updatebook.No_of_Copies=req.body.No_of_Copies;
        updatebook.BookImage=req.file.originalname;
        
        updatebook
        .save()
        .then(()=> res.json("The Book is Updated Successfully"))
        .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
});
//find by id and delete
router.delete('/:id',(req,res)=>{
    AddBooks.findByIdAndDelete(req.params.id)
    .then(() => res.json("The Book is Deleted Successfully"))
    .catch(err => res.status(400).json(`Error: ${err}`));

})

module.exports = router;