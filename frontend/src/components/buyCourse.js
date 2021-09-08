import React, { Component ,useState } from 'react'
import axios from 'axios';
export default class buyCourse extends Component {
     
    constructor(props){
        super(props);
        
        
        this.state={
            buyCourse:[]
        };
    }
    
     componentDidMount(){
         this.retrivebuyCourse();
      
     }
  
    retrivebuyCourse(){
      axios.get("http://localhost:8000/retrive")
          .then(response => this.setState({ buyCourse:response.data.existingCourseReceipt }))
          .catch(error => {
              this.setState({ errorMessage: error.message });
              console.error('There was an error!', error);
          });
  }
  onDelete = (id) =>{

    axios.delete(`http://localhost:8000/buycourse/delete/${id}`).then((res)=>{
     
      alert("Delte succesfully")
    this.retrivebuyCourse();
  
  
    })
  }
  
  

  
  
  
      render() {
          return (
              <div>
                 <div className="container">
                 <br></br>
  <h1>Courses Follow Student List</h1>
  <div align="left">
    <p>The Course Follow student In The Institue</p>
    </div>
  <div align="right">
    <p></p>
 
        

</div >
                  &nbsp;
                
              
<table class="table">
                  <thead>
                  <tr class="text-info bg-dark">
                              <th scope="col">No</th>
                              <th scope="col">Full Name</th>
                              <th scope="col">Email</th>
                              <th scope="col">Course Name</th>
                              <th scope="col">nic</th>
                              <th scope="col">Action</th>
                            
                            </tr>
                      </thead>
                 <tbody>
                  {this.state.buyCourse.map((buyCourse,index)=>(
                         <tr>
                         <th scope="row">{index+1}</th>
                             <td>{buyCourse.fullName}</td>
                             <td>{buyCourse.email}</td>
                             <td>{buyCourse.courseName}</td>
                             <td>{buyCourse.nic}</td>
                             
                             <td> <a className="btn btn-danger" href="#" onClick={() => this.onDelete(buyCourse._id)}>
                          <i className="far fa-trash-alt"></i>&nbsp;Remove 
                        </a></td>
                      
                        
                     </tr>  
                  ))}
                  </tbody>
                  </table>
                  </div>
                  </div>
        )
    }
}