import React, { Component } from 'react';
import axios from 'axios';

export default class FeesPay extends Component {


    constructor(props) {
        super(props);
        this.onfill = this.onfill.bind(this);
        this.state = {
            fullName: "",
            studentID: "",
            date: "",
            phoneNumber: "",
            email: "",
            lecturerName: "",
            courseID: "",
            cardNo: "",
            cvc: "",
            cardHoldersName: "",

        }
    }

    onfill() {
        this.setState({
            fullName: "Tharushi ",
            studentID: "STD001",
            date: "2021/11/03",
            phoneNumber: "0712344344",
            email: "tharushi@gmail.com",
            lecturerName: "Kamal perera",
            courseID: "CID001",
            cardNo: "4674384839",
            cvc: "345",
            cardHoldersName: "Tharushi"
        });
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;


        let nam = e.target.name;
        let val = e.target.value;

        //validations
        if (nam === 'phoneNumber') {

            if (val.length > 10) {
                alert("Invalid length in Number!!");
            }

        }

        if (nam === 'cardNo') {

            if (val.length > 16) {
                alert("Invalid length in card number!!");
            }

        }


        this.setState({
            ...this.state,
            [name]: value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { fullName, studentID, date, phoneNumber, email, lecturerName, courseID, cardNo, cvc, cardHoldersName } = this.state;

        const data = {

            fullName: fullName,
            studentID: studentID,
            date: date,
            phoneNumber: phoneNumber,
            email: email,
            lecturerName: lecturerName,
            courseID: courseID,
            cardNo: cardNo,
            cvc: cvc,
            cardHoldersName: cardHoldersName


        }


        console.log(data)

        axios.post("/feesPay/save", data).then((res) => {
            if (res.data.success) {
                alert("Successfully Recorded Your Payment!")
                this.setState(
                    {
                        fullName: "",
                        studentID: "",
                        date: "",
                        phoneNumber: "",
                        email: "",
                        lecturerName: "",
                        courseID: "",
                        cardNo: "",
                        cvc: "",
                        cardHoldersName: "",


                    }
                )
            }
        })
    }

    render() {
        return (
            <div className="col-md-8 mt-4 mx-auto">
                <h3 className="h3 mb-3 font-weight-normal"> <center><b><u> Fees Payment For The Courses</u></b></center></h3>
                <form className="needs-validation" onSubmit={this.onSubmit}>
                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '15px' }}>Full Name</label>
                        <input type="text"
                            className="form-control"
                            name="fullName"
                            placeholder="Enter Your Full Name"
                            value={this.state.fullName}
                            onChange={this.handleInputChange} required />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '15px' }}>Student ID</label>
                        <input type="text"
                            className="form-control"
                            name="studentID"
                            placeholder="Enter Student ID"
                            value={this.state.studentID}
                            onChange={this.handleInputChange} required />
                    </div>


                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '15px' }}>Date</label>
                        <input type="text"
                            className="form-control"
                            name="date"
                            placeholder="Date"
                            value={this.state.date}
                            onChange={this.handleInputChange} required />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '15px' }}>Phone Number</label>
                        <input type="text"
                            className="form-control"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            value={this.state.phoneNumber}
                            onChange={this.handleInputChange} required />
                    </div>


                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '15px' }}>Email</label>
                        <input type="email"
                            className="form-control"
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleInputChange} required />
                    </div>



                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '15px' }}>Lecturer Name</label>
                        <input type="text"
                            className="form-control"
                            name="lecturerName"
                            placeholder="Lecturer Name"
                            value={this.state.lecturerName}
                            onChange={this.handleInputChange} required />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '15px' }}>Course ID</label>
                        <input type="text"
                            className="form-control"
                            name="courseID"
                            placeholder="Course ID"
                            value={this.state.courseID}
                            onChange={this.handleInputChange} required />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '15px' }}>Card No</label>
                        <input type="text"
                            className="form-control"
                            name="cardNo"
                            placeholder="Card No"
                            value={this.state.cardNo}
                            onChange={this.handleInputChange} required />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '15px' }}>CVV</label>
                        <input type="text"
                            className="form-control"
                            name="cvc"
                            placeholder="CVV"
                            value={this.state.cvc}
                            onChange={this.handleInputChange} required />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '15px' }}>Card Holder's Name</label>
                        <input type="text"
                            className="form-control"
                            name="cardHoldersName"
                            placeholder="Card Holder's Name"
                            value={this.state.cardHoldersName}
                            onChange={this.handleInputChange} required />
                    </div>



                    <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} >
                        <i className="far fa-check-square"></i>
                        &nbsp; PAY
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









