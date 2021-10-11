const mongoose = require('mongoose');

const lecturerSchema = new mongoose.Schema({

    lecId:{
        type:String,
        required:true
    },

    lecFname:{
        type:String,
        required:true
    },

    lecLname:{
        type:String,
        required:true
    },
    nic:{
        type:String,
        required:true
    },

    dob:{
        type:String,
        required:true
    },

      email:{
        type:String,
        required:true
    },
    cNumber:{
        type:String,
        required:true
    },

    address:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    },

    summary:{
        type:String,
        required:true
    },

    aQualification:{
        type:String,
        required:true
    },
    Rmembership:{
        type:String,
        required:true
    },

    Rdate:{
        type:String,
        required:true
    },
    Ltype:{
        type:String,
        required:true
    },

    salary:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('lecturerdetails',lecturerSchema);