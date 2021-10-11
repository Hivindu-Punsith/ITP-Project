import React, { Component } from 'react'
import axios from 'axios'
import './style.css'
import addnew from '../images/addnew.gif';


export default class addLecturer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lecId: "LEC" + this.rand(9999, 99999),
            lecFname: "",
            lecLname: "",
            nic: "",
            dob: "",
            email: "",
            cNumber: "",
            address: "",
            username: "LU" + this.rand(99999, 999999),
            password: "R" + this.rand(9999999, 99999999),
            summary: "",
            aQualification: "",
            Rmembership: "",
            Ltype: "",
            salary: "",
            Rdate: ""
        }
    }



    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        })
    }
    onsubmit = (e) => {
        e.preventDefault();
        const { lecId, lecFname, lecLname, nic, dob, email, cNumber, address, username, password, summary, aQualification, Rmembership, Ltype, salary, Rdate } = this.state;
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
            Ltype: Ltype,
            salary: salary,
            Rdate: Rdate
        }
        console.log(data)
        axios.post("/lecturer/save", data).then((res) => {
            if (res.data.success) {
                alert("New Lecturer added Succesfully!")
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
                    Ltype: '',
                    salary: "",
                    Rdate: ""

                })
            }
        })
    }

    onClickDemo = () => {
        this.setState(
            {
                summary: "Renowned academic and researcher in Plant Biotechnology. After graduating from faculty of Agriculture, University of Peradeniya, Sri Lanka, I completed the M.Sc Degree in Pennsylvania State University, USA, and Ph.D. in University of London, UK. I started my career at Faculty of Agriculture University of Peradeniya, Sri Lanka as a Lecturer in Department of Crop Science and promoted to senior Lecturer, Associate Professor, Professor and Senior Professor during my 30 years of service",
                aQualification: "M.Sc. (Agronomy), The Pennsylvania State University,  USA, 1986 B.Sc. (Agriculture), University of Peradeniya, Sri Lanka, 1978",
                Rmembership: "Main Committee Member 2017 to date, Committee on Equating and or Validating of Certificates of Diplomas and Degree (CVECD), National Apprentice & Industrial Training Authority, Sri Lanka",
                Ltype:"Senior lecturer",
                salary: "70000"
            })
    }


    componentDidMount() {
        const id = this.props.match.params.id;

        axios.get(`/reviewer/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({

                    lecFname: res.data.post.lecFname,
                    lecLname: res.data.post.lecLname,
                    nic: res.data.post.nic,
                    dob: res.data.post.dob,
                    email: res.data.post.email,
                    cNumber: res.data.post.cNumber,
                    address: res.data.post.address,
                    Rdate: res.data.post.Rdate
                });

                console.log(this.state.post);
            }
        });
    }

    rand = (min, max) => {
        return Math.floor(Math.random() * max - min + 1) + min;
    }


    render() {
        return (
            <div
                style={{
                    width: '1500px',
                    border: '1px solid black',
                    marginRight: '280px',
                    marginLeft: '290px',
                    background: '#F5F5F5'
                }}
            >
                <div className="container" >
                    <br></br>
                    <center>

                        <h3><b>Add New Lecturer Details</b></h3><br></br>
                        <img src={addnew} style={{ width: '500px', height: 'auto' }}></img>
                        <br></br>
                        <br></br>
                        <h6><p>On this page add new lecturer details to the institute database. In here lecturer ID is auto generating. By viewing the curriculum vitae fill the summary, academic qualifications and Research interests and memberships</p></h6>
                        <br></br>
                    </center>

                    <form className="needs-validation" onSubmit={this.onsubmit}>

                        <div className="col-md-12">
                            <label className="form-label"><b>Lecturer ID</b></label>
                            <input style={{ color: 'red', fontWeight: 'bold' }} className="form-control" name="lecId" value={this.state.lecId} onChange={this.handleInputChange} required ></input>
                        </div><br />

                        <div className="col-md-12">
                            <label className="form-label"><b>First Name</b></label>
                            <input className="form-control" name="lecFname" value={this.state.lecFname} onChange={this.handleInputChange} required ></input>
                        </div><br />


                        <div className="col-md-12">
                            <label className="form-label"><b>Last Name</b></label>
                            <input className="form-control" name="lecLname" value={this.state.lecLname} onChange={this.handleInputChange} required ></input>
                        </div><br />

                        <div className="col-md-12">
                            <label className="form-label"><b>NIC number</b></label>
                            <input className="form-control" name="nic" value={this.state.nic} onChange={this.handleInputChange} required ></input>
                        </div><br />

                        <div className="col-md-12">
                            <label className="form-label"><b>Date of birth</b></label>
                            <input className="form-control" name="dob" value={this.state.dob} onChange={this.handleInputChange} required />
                        </div><br />

                        <div className="col-md-12">
                            <label className="form-label"><b>E-mail</b></label>
                            <input className="form-control" name="email" value={this.state.email} onChange={this.handleInputChange} required ></input>
                        </div><br />

                        <div className="col-md-12">
                            <label className="form-label"><b>Contact number</b></label>
                            <input className="form-control" name="cNumber" value={this.state.cNumber} onChange={this.handleInputChange} required ></input>
                        </div><br />

                        <div className="col-md-12">
                            <label className="form-label"><b>Address</b></label>
                            <input className="form-control" name="address" value={this.state.address} onChange={this.handleInputChange} required ></input>
                        </div><br />

                        <div className="col-md-12">
                            <label className="form-label"><b>Username</b></label>
                            <input style={{ color: 'red', fontWeight: 'bold' }} className="form-control" name="username" value={this.state.username} onChange={this.handleInputChange} required ></input>
                        </div><br />

                        <div className="col-md-12">
                            <label className="form-label"><b>Password</b></label>
                            <input style={{ color: 'red', fontWeight: 'bold' }} className="form-control" name="password" value={this.state.password} onChange={this.handleInputChange} required ></input>
                        </div><br />


                        <div className="col-md-12">
                            <label className="form-label"><b>Career Summary</b></label>
                            <textarea className="form-control" name="summary" cols="25" rows="5" value={this.state.summary} onChange={this.handleInputChange} required ></textarea>
                        </div><br />


                        <div className="col-md-12">
                            <label className="form-label"><b>Acedemic qualifications</b></label>
                            <textarea className="form-control" name="aQualification" cols="25" rows="5" value={this.state.aQualification} onChange={this.handleInputChange} required ></textarea>
                        </div><br />


                        <div className="col-md-12">
                            <label className="form-label"><b>Research interests and memberships</b></label>
                            <textarea className="form-control" name="Rmembership" cols="25" rows="5" value={this.state.Rmembership} onChange={this.handleInputChange} required ></textarea>
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
                        <p>* Enter the basic salary as the type of the lecturer <br></br>
                        </p>
                        <div className="col-md-12">
                            <label className="form-label"><b>Basic Salary</b></label>
                            <input className="form-control" name="salary" value={this.state.salary} onChange={this.handleInputChange} required />
                        </div><br />

                        <div className="col-md-12">
                            <label className="form-label"><b>Registration Date</b></label>
                            <input className="form-control" name="Rdate" value={this.state.Rdate} onChange={this.handleInputChange} required />
                        </div><br />


                        <center>
                            <button type="submit" className="btn btn-primary">Save Details</button>
                            <br></br>
                        </center>
                        <br></br>

                    </form>
                    <center><button className="btn btn-outline-danger btn-sm" onClick={this.onClickDemo}>Demo</button></center><br />

                </div>
            </div>
        )
    }
}