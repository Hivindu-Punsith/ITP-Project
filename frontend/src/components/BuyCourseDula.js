import React, {Component} from 'react';
import axios from 'axios';


export default class BuyCourseDula extends Component {

    constructor(props) {
        super(props);
        this.onfill = this.onfill.bind(this);
        this.state ={
            fullName: "",
            address: "",
            email: "",
            phoneNumber: "",
            nic: "",
            courseName: "",
            cardNo: "",
            cvc: "",
            cardHoldersName: "",
            date: ""
        }
    }


    onfill() {
        this.setState({
            fullName: "DUlakshi Madhuhansani",
            address: "Panadura",
            email: "Dula@gmail.com",
            phoneNumber: "0713765765",
            nic: "969876878v",
            courseName: "IT certificate course",
            cardNo: "87654767",
            cvc: "678",
            cardHoldersName: "Mitrarathne D.M",
            date: "2021/11/12"
        });
      }

    handleInputChange =(e) =>{
        const {name,value} =e.target;

        let nam = e.target.name;
        let val = e.target.value;
    
        //validations    
        if (nam === 'nic') {
    
            if(val.length > 12){
                alert("Invalid length in stats!!");
            }
    
        }

        if (nam === 'phoneNumber') {
    
            if(val.length > 10){
                alert("Invalid length in Number!!");
            }
    
        }

        if (nam === 'cardNo') {
    
            if(val.length > 16){
                alert("Invalid length in card number!!");
            }
    
        }

        


        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) =>{
        e.preventDefault();

        const {fullName,address,email,phoneNumber,nic,courseName,cardNo,cvc,cardHoldersName,date} = this.state ;

        const data ={

            fullName:fullName,
            address: address,
            email: email,
            phoneNumber: phoneNumber,
            nic: nic,
            courseName: courseName,
            cardNo: cardNo,
            cvc: cvc,
            cardHoldersName: cardHoldersName,
            date: date

        }

        console.log(data)

        axios.post("/buyCourse/save",data).then ((res) =>{
            if (res.data.success) {
                alert("Details Added Successfully!")
                this.setState(
                    {
                        fullName: "",
                        address: "",
                        email: "",
                        phoneNumber: "",
                        nic: "",
                        courseName: "",
                        cardNo: "",
                        cvc: "",
                        cardHoldersName: "",
                        date: ""

                    }
                )
            }
        })
    }


   


    render() {
        return(
            <div className= "col-md-8 mt-4 mx-auto">
                <h3 className = "h3 mb-3 font-weight-normal"> <center><b><u> Buy Online Course</u></b></center></h3>
                <form className = "needs-validation" onSubmit = {this.onSubmit} >
                    <div className = "form-group" style ={{marginBottom:'15px'}}>
                        <label style = {{marginBottom:'15px'}}> Full Name</label>
                        <input type = "text" 
                        className= "form-control"
                        name = "fullName"
                        placeholder = "Enter Your Full Name"
                        value = {this.state.fullName}
                        onChange = {this.handleInputChange} required/>
                    </div>

                    <div className = "form-group" style ={{marginBottom:'15px'}}>
                        <label style = {{marginBottom:'15px'}}>Address</label>
                        <input type = "text" 
                        className= "form-control"
                        name = "address"
                        placeholder = "Enter Address"
                        value = {this.state.address}
                        onChange = {this.handleInputChange} required/>
                    </div>

                    <div className = "form-group" style ={{marginBottom:'15px'}}>
                        <label style = {{marginBottom:'15px'}}>Email</label>
                        <input type = "email" 
                        className= "form-control"
                        name = "email"
                        placeholder = "Email"
                        value = {this.state.email}
                        onChange = {this.handleInputChange} required/>
                    </div>

                    <div className = "form-group" style ={{marginBottom:'15px'}}>
                        <label style = {{marginBottom:'15px'}}>Phone Number</label>
                        <input type = "text" 
                        className= "form-control"
                        name = "phoneNumber"
                        placeholder = "Phone Number"
                        value = {this.state.phoneNumber}
                        onChange = {this.handleInputChange} required/>
                    </div>

                    <div className = "form-group" style ={{marginBottom:'15px'}}>
                        <label style = {{marginBottom:'15px'}}>NIC No</label>
                        <input type = "text" 
                        className= "form-control"
                        name = "nic"
                        placeholder = "NIC No"
                        value = {this.state.nic}
                        onChange = {this.handleInputChange} required/>
                    </div>

                    <div className = "form-group" style ={{marginBottom:'15px'}}>
                        <label style = {{marginBottom:'15px'}}>Course Name</label>
                        <input type = "text" 
                        className= "form-control"
                        name = "courseName"
                        placeholder = "Course Name"
                        value = {this.state.courseName}
                        onChange = {this.handleInputChange} required/>
                    </div>

                    <div className = "form-group" style ={{marginBottom:'15px'}}>
                        <label style = {{marginBottom:'15px'}}>Card No</label>
                        <input type = "text" 
                        className= "form-control"
                        name = "cardNo"
                        placeholder = "Card No"
                        value = {this.state.cardNo}
                        onChange = {this.handleInputChange} required/>
                    </div>

                    <div className = "form-group" style ={{marginBottom:'15px'}}>
                        <label style = {{marginBottom:'15px'}}>CVV</label>
                        <input type = "text" 
                        className= "form-control"
                        name = "cvc"
                        placeholder = "CVV"
                        value = {this.state.cvc}
                        onChange = {this.handleInputChange} required/>
                    </div>

                    <div className = "form-group" style ={{marginBottom:'15px'}}>
                        <label style = {{marginBottom:'15px'}}>Card Holder's Name</label>
                        <input type = "text" 
                        className= "form-control"
                        name = "cardHoldersName"
                        placeholder = "Card Holder's Name"
                        value = {this.state.cardHoldersName}
                        onChange = {this.handleInputChange} required/>
                    </div>

                    <div className = "form-group" style ={{marginBottom:'15px'}}>
                        <label style = {{marginBottom:'15px'}}>Date</label>
                        <input type = "text" 
                        className= "form-control"
                        name = "date"
                        placeholder = "Date"
                        value = {this.state.date}
                        onChange = {this.handleInputChange} required/>
                    </div>


                    
                    <button className = "btn btn-success"  type ="submit" style={{marginTop:'15px'}} >
                     <i className="far fa-check-square"></i>
                        &nbsp; BUY COURSE
                    </button>
                     
                    

                </form>
                <button
            className="btn btn-success"
            type="submit"
            style={{ marginTop: "15px" }}
            onClick={this.onfill}
          >
            <i className="far fa-check-square"></i>
            &nbsp;Fill the form
          </button>

            </div>
        )
    }
}
