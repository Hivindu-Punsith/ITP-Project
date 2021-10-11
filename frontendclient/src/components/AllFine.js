import axios from 'axios';
import React,{ useState } from 'react'
import {Link} from "react-router-dom";

const AllFine = ({PayFines}) => {

  
 

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
             <center> <h1>All Fines</h1></center> <br></br>
          <table className="table">
          <thead>
<tr className="text-info bg-dark">
  <th scopse="col">#</th>
  <th scopse="col">NIC</th>
  <th scopse="col">Book Name</th>
  <th scopse="col">Author</th>
  <th scopse="col">Fines</th>
  <th scopse="col">Return Date</th>
  
</tr>
</thead>

              <tbody> 
              {PayFines.map((Fine,index)=>(                                
                  <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{Fine.NIC}</td>
                                                         
                      <td>{Fine.Book_Name}</td>
                      <td>{Fine.Author}</td>
                      <td>{Fine.Fines}</td>
                      <td>{Fine.Return_Date}</td>
                     
            
                   
                  </tr>
                  ))}

              </tbody>  

            </table>

               </div>

        </div>
    )
}

export default AllFine
