import React, { Component } from 'react'
import axios from 'axios';
import { saveAs } from 'file-saver';

export default class SubDetails extends Component {

    constructor(props){
        super(props);

        this.state={
            subject:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/subject/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    subject:res.data.subject
                });

                console.log(this.state.subject);
            }
        });
    }

    createAndDownloadPdf = () => {
        axios.post('/create-pdf', this.state)
          .then(() => axios.get('/fetch-pdf', { responseType: 'blob' }))
          .then((res) => {
            const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
    
            saveAs(pdfBlob, 'newPdf.pdf');
          })
      }

    render() {

        const {subjectId, subjectName, subjectType, subjectCategory, subjectFee, subjectDes} = this.state.subject;

        return (
            <div style={{marginTop:'20px'}} >
                <h1 style={{marginLeft:'20px'}}>Subject Details</h1>
                <h4 style={{marginTop:'20px', marginLeft:'20px'}}>:{subjectName}</h4>
                <hr/>

                <dl className="row" style={{marginLeft:'20px'}}>
                    <dt className="col-sm-3" style={{marginTop:'20px'}}>subjectId</dt>
                    <dd className="col-sm-9" style={{marginTop:'20px'}}>{subjectId}</dd>

                    <dt className="col-sm-3" style={{marginTop:'20px'}}>subjectName</dt>
                    <dd className="col-sm-9" style={{marginTop:'20px'}}>{subjectName}</dd>

                    <dt className="col-sm-3" style={{marginTop:'20px'}}>subjectType</dt>
                    <dd className="col-sm-9" style={{marginTop:'20px'}}>{subjectType}</dd>

                    <dt className="col-sm-3" style={{marginTop:'20px'}}>subjectCategory</dt>
                    <dd className="col-sm-9" style={{marginTop:'20px'}}>{subjectCategory}</dd>

                    <dt className="col-sm-3" style={{marginTop:'20px'}}>subjectFee</dt>
                    <dd className="col-sm-9" style={{marginTop:'20px'}}>{subjectFee}</dd>

                    <dt className="col-sm-3" style={{marginTop:'20px'}}>subjectDes</dt>
                    <dd className="col-sm-9" style={{marginTop:'20px'}}>{subjectDes}</dd>
                </dl>

                <div>                
                <button style={{marginLeft:'20px'}} className="btn btn-danger" onClick={this.createAndDownloadPdf}><i class="fa fa-file-pdf-o" aria-hidden="true"></i> Download PDF</button>
                </div>
            </div>
        )
    }
}
