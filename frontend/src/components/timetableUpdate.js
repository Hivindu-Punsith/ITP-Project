import React, { Component } from 'react'
import axios from 'axios'


export default class timetableUpdate extends Component {
    
    constructor(props){
        super(props);
        this.state={
            timetableId:"",
            lecId:"",
            lecname:"",
            subject:"",
            day:"",
            time:""
        }
    }

    

handleInputChange =(e) =>{
    const {name,value} =e.target;



    this.setState({
        ...this.state,
        [name]:value
    })
}
onsubmit = (e) =>{
    e.preventDefault();
    const {timetableId,lecId,lecName,subject,day,time} = this.state;
    const data ={
        timetableId: timetableId,
        lecId : lecId,
        lecName:lecName,
        subject:subject,
        day:day,
        time:time
        
    }
    console.log(data)
    axios.post("/timetablereq/save",data).then((res) =>{
        if(res.data.success){
            alert("Your request send Succesfully!")
            this.setState({
                timetableId:"",
                lecId:"",
                lecname:"",
                subject:"",
                day:"",
                time:""
            })
        }
    })
}



render(){
    return (
        <div className ="timetable">
       <div className = "container" >
           
       <center><h1><b><u>Update Timetable Request Form</u></b></h1></center>
          
       <form className="needs-validation" noValidate>

       <div class="form-outline mb-4">
       <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm"><b>Time Table ID</b></label>
    <input type="text" className="form-control" name="timetableId" value={this.state.timetableId} onChange={this.handleInputChange}/>
    </div>
<br></br>
    <div class="form-outline mb-4">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm"><b>Lecturer ID</b></label>
    <input type="text" className="form-control" name="lecId" value={this.state.lecId} onChange={this.handleInputChange}/>
    </div>
       <br></br>
    <div class="form-outline mb-4">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm"><b>Lecturer Name</b></label>
    <input type="text" className="form-control" name="lecName" value={this.state.lecName} onChange={this.handleInputChange}/>
    </div>   
<br></br>
    <div class="form-outline mb-4">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm"><b>Subject To Be Updated</b></label>
    <input type="text" className="form-control" name="subject" value={this.state.subject} onChange={this.handleInputChange}/>
    </div>

    <div class="form-outline mb-4">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm"><b>Day To Be Updated</b></label>
    <input type="text" className="form-control" name="day" value={this.state.day} onChange={this.handleInputChange}/>
    </div>
<br></br>
    
    <div class="form-outline mb-4">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm"><b>Time Required To Change</b></label>
    <input type="text" className="form-control" name="time" value={this.state.time} onChange={this.handleInputChange}/>
    </div>
<br></br>
<br></br>
<center><button type="submit" className="btn btn-primary" onClick={this.onsubmit}>Send Request</button></center>
</form>

</div>
</div>

)
}
}