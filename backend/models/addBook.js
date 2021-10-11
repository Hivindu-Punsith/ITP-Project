const mongoose = require('mongoose') ;
const Schema = mongoose.Schema;

const addBookSchema = new Schema({

     Book_Id:{
         type :String,
         require:true
     },

    Book_Name :{
        type:String,
        require:true
    },

    Author:{
        type:String,
        require:true
    },

    Category:{
        type:String,
        require:true
    },

    No_of_Copies:{
        type:String,
        require:true
    },

    BookImage:{
        type:String,
       
    },
    postdata:{type:Date, default:Date.now}

})

const AddBook = mongoose.model("AddBook",addBookSchema);

module.exports= AddBook;