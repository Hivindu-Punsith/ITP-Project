import React, { Component } from 'react'
import axios from 'axios'


export default class EditLecturer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lecId: "",
            lecFname: "",
            lecLname: "",
            nic: "",
            dob: "",
            email: "",
            cNumber: "",
            address: "",
            summary: "",
            username: "",
            password: "",
            aQualification: "",
            Rmembership: "",
            Ltype:"",
            salary: "",
            Rdate: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }


    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    onSubmit = (e) => {

        e.preventDefault();

        const id = this.props.match.params.id;
        const { lecId, lecFname, lecLname, nic, dob, email, cNumber, address, username, password, summary, aQualification, Rmembership, Ltype,salary, Rdate } = this.state;

        const data = {
            lecId: lecId,
            lecFname: lecFname,
            lecLname: lecLname,
            nic: nic,
            dob: dob,
            email: email,
            cNumber: cNumber,
            address: address,
            username: username,
            password: password,
            summary: summary,
            aQualification: aQualification,
            Rmembership: Rmembership,
            Ltype:Ltype,
            salary: salary,
            Rdate: Rdate
        }



        console.log(data)

        axios.put(`/lecturer/update/${id}`, data).then((res) => {
            if (res.data.success) {
                alert("Details Updated Succesfully!")
                this.setState({
                    lecId: "",
                    lecFname: "",
                    lecLname: "",
                    nic: "",
                    dob: "",
                    email: "",
                    cNumber: "",
                    address: "",
                    username: "",
                    password: "",
                    summary: "",
                    aQualification: "",
                    Rmembership: "",
                    Ltype:"",
                    salary: "",
                    Rdate: ""
                })
            }
        })
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        axios.get(`/lecturer/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    lecId: res.data.lecturer.lecId,
                    lecFname: res.data.lecturer.lecFname,
                    lecLname: res.data.lecturer.lecLname,
                    nic: res.data.lecturer.nic,
                    dob: res.data.lecturer.dob,
                    email: res.data.lecturer.email,
                    cNumber: res.data.lecturer.cNumber,
                    address: res.data.lecturer.address,
                    username: res.data.lecturer.username,
                    password: res.data.lecturer.password,
                    summary: res.data.lecturer.summary,
                    aQualification: res.data.lecturer.aQualification,
                    Rmembership: res.data.lecturer.Rmembership,
                    Ltype:res.data.lecturer.Ltype,
                    salary: res.data.lecturer.salary,
                    Rdate: res.data.lecturer.Rdate

                });

                console.log(this.state.lecturer);
            }
        });
    }

    render() {
        return (
            <div
                style={{
                    width: '1500px',
                    border: '1px solid black',
                    marginRight: '250px',
                    marginLeft: '290px',
                    background: '#F5F5F5'
                }}>
                <div className="container">
                    <br></br>
                    <center><h3><b>Update Lecturer Details</b></h3></center>

                    <form className="needs-validation" noValidate>

                        <div className="container"></div>

                        <div className="col-md-12">
                            <label className="form-label"><b>Lecturer ID</b></label>
                            <input className="form-control" name="lecId" value={this.state.lecId} onChange={this.handleInputChange}></input>
                        </div><br />

                        <div className="col-md-12">
                            <label className="form-label"><b>First Name</b></label>
                            <input className="form-control" name="lecFname" value={this.state.lecFname} onChange={this.handleInputChange}></input>
                        </div><br />


                        <div className="col-md-12">
                            <label className="form-label"><b>Last Name</b></label>
                            <input className="form-control" name="lecLname" value={this.state.lecLname} onChange={this.handleInputChange}></input>
                        </div><br />

                        <div className="col-md-12">
                            <label className="form-label"><b>NIC number</b></label>
                            <input className="form-control" name="nic" value={this.state.nic} onChange={this.handleInputChange}></input>
                        </div><br />

                        <div className="col-md-12">
                            <label className="form-label"><b>Date of birth</b></label>
                            <input type="date" className="form-control" placeholder="D/M/Y" name="dob" value={this.state.dob} onChange={this.handleInputChange} />
                        </div><br />

                        <div className="col-md-12">
                            <label className="form-label"><b>E-mail</b></label>
                            <input className="form-control" name="email" value={this.state.email} onChange={this.handleInputChange}></input>
                        </div><br />

                        <div className="col-md-12">
                            <label className="form-label"><b>Contact number</b></label>
                            <input className="form-control" name="cNumber" value={this.state.cNumber} onChange={this.handleInputChange}></input>
                        </div><br />

                        <div className="col-md-12">
                            <label className="form-label"><b>Address</b></label>
                            <input className="form-control" name="address" value={this.state.address} onChange={this.handleInputChange}></input>
                        </div><br />

                        <div className="col-md-12">
                            <label className="form-label"><b>Username</b></label>
                            <input className="form-control" name="username" value={this.state.username} onChange={this.handleInputChange}></input>
                        </div><br />

                        <div className="col-md-12">
                            <label className="form-label"><b>Password</b></label>
                            <input className="form-control" name="password" value={this.state.password} onChange={this.handleInputChange}></input>
                        </div><br />


                        <div className="col-md-12">
                            <label className="form-label"><b>Career Summary</b></label>
                            <textarea className="form-control" name="summary" cols="25" rows="5" value={this.state.summary} onChange={this.handleInputChange}></textarea>
                        </div><br />


                        <div className="col-md-12">
                            <label className="form-label"><b>Acedemic qualifications</b></label>
                            <textarea className="form-control" name="aQualification" cols="25" rows="5" value={this.state.aQualification} onChange={this.handleInputChange}></textarea>
                        </div><br />


                        <div className="col-md-12">
                            <label className="form-label"><b>Research interests and memberships</b></label>
                            <textarea className="form-control" name="Rmembership" cols="25" rows="5" value={this.state.Rmembership} onChange={this.handleInputChange}></textarea>
                        </div><br />

                        <div className="col-md-12">
                            <label className="form-label"><b>Lecturer Type</b></label>
                            <select className="form-control"
                                name="Ltype"
                                value={this.state.Ltype}
                                onChange={this.handleInputChange}
                                required >
                                <option selected disabled value="">Select</option>
                                <option>Assistant Lecturer</option>
                                <option>Senior Lecturer</option>
                                <option>Master Lecturer</option>

                            </select>
                        </div><br />


                        <div className="col-md-12">
                            <label className="form-label"><b>Basic Salary</b></label>
                            <input className="form-control" name="salary" value={this.state.salary} onChange={this.handleInputChange} required />
                        </div><br />

                        <div className="col-md-12">
                            <label className="form-label"><b>Registration Date</b></label>
                            <input type="date" className="form-control" name="Rdate" value={this.state.Rdate} onChange={this.handleInputChange} />
                        </div><br />

                        <center><button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Update</button></center>
                        <br></br>
                    </form>

                </div>
            </div>
        )
    }
}