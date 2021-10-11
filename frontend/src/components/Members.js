import React, { useState } from 'react'
import {Link} from "react-router-dom";
import axios from 'axios';

const Members = ({Member}) => {

    const [Members, setMembers ]=useState([])

    const deteleMember = id =>{
      axios.delete(`http://localhost:8000/member/${id}`)
      .then(res => alert(res.data))
      setMembers(Members.filter(elem => elem._id !== id))
    }
 


    return (
        <div>
                    <div
      className="container border"
      style={{
        marginTop: "50px",
        width: "100%",
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9QXZMet9OUNTyqEvHbHqMoTUlsaRtNK9iGA&usqp=CAU')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
              <br></br>
              <h1>All Libarary Members</h1>
          <table className="table">
          <thead>
<tr className="text-info bg-dark">
  <th scopse="col">#</th>
  <th scopse="col">NIC</th>
  <th scopse="col">First Name</th>
  <th scopse="col">Last Name </th>
  <th scopse="col">Address</th>
  <th scopse="col">Email</th>
  <th scopse="col">Category</th>
  <th scopse="col">Action</th>
</tr>
</thead>

              <tbody> 
              {Member.map((Members,index)=>(                                
                  <tr key={index}>
                    <th scope="row">{index+1}</th>
                      <td>{Members.NIC}</td>
                      <td>{Members.First_Name}</td>
                      <td>{Members.Last_Name}</td>
                      <td>{Members.Address}</td>
                      <td>{Members.Email}</td>
                      <td>{Members.Student_category}</td>
                      <td> 
                      <Link to ={{
        pathname:`/updateMember/${Members._id}`
      }}>
       <button type="button" className="btn btn-success" style={{marginTop:'10px'}} > <i className="fas fa-pencil-alt"></i>&nbsp;Update</button>&nbsp;
    </Link>
  
    <button onClick={()=>deteleMember(Members._id)}deleteBook type="button" class="btn btn-danger" style={{marginTop:'10px'}} > <i class="far fa-trash-alt"></i>&nbsp;Delete </button>
 
    
    
    </td>




                  </tr>
                  ))}

              </tbody>  

            </table>

               </div>
        </div>
    )
}

export default Members
