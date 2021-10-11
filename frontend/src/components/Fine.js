import axios from 'axios';
import React,{ useState } from 'react'
import {Link} from "react-router-dom";
import autoTable from 'jspdf-autotable'
import { jsPDF } from "jspdf";
const Fine = ({PayFines}) => {

  
  function pdfGenerat(){
    var doc = new jsPDF('landscape', 'px', 'a4', 'false');
    
    doc.autoTable({
           
            body: [
                [{ content: '  ', colSpan: 2, rowSpan: 2, styles: { halign: 'center' } }],
              ],
            })
        autoTable(doc, { html: '#find' })
       doc.save('Fines.pdf')
  
          }

    const [Fine, setFine ]=useState([])

    const deteleFine = id =>{
      axios.delete(`http://localhost:8000/fines/${id}`)
      .then(res => alert(res.data))
      setFine(Fine.filter(elem => elem._id !== id))
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
              <button className="btn btn-danger btn-sm"  onClick={pdfGenerat}>Generate PDF</button>

              <br></br>
             <center> <h1>All Fines</h1></center> <br></br>
          <table className="table" id="find">
          <thead>
<tr className="text-info bg-dark">
  <th scopse="col">#</th>
  <th scopse="col">NIC</th>
  <th scopse="col">Book Name</th>
  <th scopse="col">Author</th>
  <th scopse="col">Fines</th>
  <th scopse="col">Return Date</th>
  <th scopse="col">Actions</th>
</tr>
</thead>

              <tbody> 
              {PayFines.map((Fines,index)=>(                                
                  <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td><Link to ={{
                              pathname:`/disafines/${Fines._id}` 
                             }}>{Fines.NIC}</Link></td>
                                                         
                      <td>{Fines.Book_Name}</td>
                      <td>{Fines.Author}</td>
                      <td>{Fines.Fines}</td>
                      <td>{Fines.Return_Date}</td>
                     
                      <td> 
       
    <button onClick={()=>deteleFine(Fines._id)}deleteBook type="button" class="btn btn-danger" style={{marginTop:'10px'}} > <i class="far fa-trash-alt"></i>&nbsp;Delete </button>
 
    
    
    </td> 
                   
                  </tr>
                  ))}

              </tbody>  

            </table>

               </div>

        </div>
    )
}

export default Fine
