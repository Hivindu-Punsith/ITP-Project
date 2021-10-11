import React, { Component } from 'react'
import axios from 'axios';
import { saveAs } from 'file-saver';


export default class PostLecturer extends Component {

    constructor(props){
        super(props);

        this.state={
            lecturer:{}
            
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`/lecturer/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    lecturer:res.data.lecturer,
                    lecId:res.data.lecturer.lecId,
                    lecFname:res.data.lecturer.lecFname,
                    lecLname:res.data.lecturer.lecLname,
                    nic:res.data.lecturer.nic,
                    dob:res.data.lecturer.dob,
                    email:res.data.lecturer.email,
                    cNumber:res.data.lecturer.cNumber,
                    address:res.data.lecturer.address,
                    username:res.data.lecturer.username,
                    password:res.data.lecturer.password,
                    summary:res.data.lecturer.summary,
                    aQualification:res.data.lecturer.aQualification,
                    Rmembership:res.data.lecturer.Rmembership,
                    Ltype:res.data.lecturer.Ltype,
                    salary: res.data.lecturer.salary,
                    Rdate:res.data.lecturer.Rdate
                });

                console.log(this.state.lecturer);
            }
        });
    }
    createAndDownloadPdf = () => {
        axios.post('/createpdflec', this.state)
          .then(() => axios.get('/fetchpdflec', { responseType: 'blob' }))
          .then((res) => {
            const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
    
            saveAs(pdfBlob, 'lecturer.pdf');
          })
      }
    
    render() {

        const{lecId,lecFname,lecLname,nic,dob,email,cNumber,address,username,password,summary,Ltype,salary,aQualification,Rmembership,Rdate} = this.state.lecturer;

        return (

            
            <div style =  {{marginTop:'30px'}} className ="container">
                
               <h2><center><b>Lecturer Details</b></center></h2>
                <hr/>

                <dl className="row">
                    
                    <dt className="col-sm-3"><b>Lecturer ID</b></dt>
                    <dd className="col-sm-9">{lecId}</dd>

                    <dt className="col-sm-3"><b>First Name</b></dt>
                    <dd className="col-sm-9">{lecFname}</dd>
 
                    <dt className="col-sm-3"><b>Last Name</b></dt>
                    <dd className="col-sm-9">{lecLname}</dd>

                    <dt className="col-sm-3"><b>NIC number</b></dt>
                    <dd className="col-sm-9">{nic}</dd>

                    <dt className="col-sm-3"><b>Date Of Birth</b></dt>
                    <dd className="col-sm-9">{dob}</dd>

                    <dt className="col-sm-3"><b>E-mail</b></dt>
                    <dd className="col-sm-9">{email}</dd>

                    <dt className="col-sm-3"><b>Contact Number</b></dt>
                    <dd className="col-sm-9">{cNumber}</dd>

                    <dt className="col-sm-3"><b>Address</b></dt>
                    <dd className="col-sm-9">{address}</dd>

                    <dt className="col-sm-3"><b>Username</b></dt>
                    <dd className="col-sm-9">{username}</dd>

                    <dt className="col-sm-3"><b>Password</b></dt>
                    <dd className="col-sm-9">{password}</dd>

                    <dt className="col-sm-3"><b>Career Summary</b></dt>
                    <dd className="col-sm-9">{summary}</dd>

                    <dt className="col-sm-3"><b>Acedemic qualifications</b></dt>
                    <dd className="col-sm-9">{aQualification}</dd>

                    <dt className="col-sm-3"><b>Research interests and memberships</b></dt>
                    <dd className="col-sm-9">{Rmembership}</dd>

                    <dt className="col-sm-3"><b>Salary</b></dt>
                    <dd className="col-sm-9">{salary}</dd>

                    <dt className="col-sm-3"><b>Type of the lecturer</b></dt>
                    <dd className="col-sm-9">{Ltype}</dd>

                    <dt className="col-sm-3"><b>Registration Date</b></dt>
                    <dd className="col-sm-9">{Rdate}</dd>

                </dl>
                <br></br>
                <br></br>
               <button className="btn btn-danger" onClick={this.createAndDownloadPdf}><i class="fa fa-file-pdf-o" aria-hidden="true"></i> Download PDF</button>
            </div>
            
        )
    }
}
