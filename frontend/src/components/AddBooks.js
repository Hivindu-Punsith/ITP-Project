
import axios from 'axios';
import React, { useState } from 'react'
import {Link} from "react-router-dom";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import autoTable from 'jspdf-autotable'
import { jsPDF } from "jspdf";
const AddBooks = ({books}) => {


  function pdfGenerat(){
    var doc = new jsPDF('landscape', 'px', 'a4', 'false');
    
    doc.autoTable({
           
            body: [
                [{ content: '  ', colSpan: 2, rowSpan: 2, styles: { halign: 'center' } }],
              ],
            })
        autoTable(doc, { html: '#table-to-xls' })
       doc.save('books.pdf')
  
          }
  //delete

  const [book, setBook ]=useState([])



   const detelebook = id =>{
     axios.delete(`http://localhost:8000/addBook/${id}`)
     .then(res => alert(res.data))
     setBook(book.filter(elem => elem._id !== id))
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
              
              <br></br>
              <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="btn btn-success"
                    table="table-to-xls"
                    filename="AllBooks"
                    sheet="tablexls"
                    buttonText="Generate All Books Report"/>
                    
              <br></br>
              <button className="btn btn-danger btn-sm"  onClick={pdfGenerat}>Generate PDF</button>

              <br></br>
              <h1>All Books</h1>
          <table className="table" id="table-to-xls" >
          <thead>
<tr className="text-info bg-dark">
  <th scope="col">#</th>
  <th scope="col">Book ID</th>
  <th scope="col">Book Name</th>
  <th scope="col">Author</th>
  <th scope="col">Category</th>
  <th scope="col">Number of Copies</th>
  <th scope="col">Cover Page</th>
  <th scope="col">Actions</th>
</tr>
</thead>

              <tbody id="book"> 
              {books.map((AddBooks,index)=>(                                
                  <tr key={index}>
                    <th scope="row">{index+1}</th>
                      <td><Link to ={{
                              pathname:`/addBook/${AddBooks._id}`
                             }}>{AddBooks.Book_Id}</Link></td>
                             
                      <td>{AddBooks.Book_Name}</td>
                      <td>{AddBooks.Author}</td>
                      <td>{AddBooks.Category}</td>
                      <td>{AddBooks.No_of_Copies}</td>
                      <td><div class="text-center">
    <img src={`/uploads/${AddBooks.BookImage}`} alt="..." style={{height: "55px" ,width: "84px" }}  />
    </div></td>

           
                      <td> 
                      <Link to ={{
        pathname:`/update/${AddBooks._id}`
      }}>
       <button type="button" className="btn btn-success" style={{marginTop:'10px'}} > <i className="fas fa-pencil-alt">&nbsp;</i>Update</button>&nbsp;
    </Link>
  
    <button onClick={()=>detelebook(AddBooks._id)}deletebook type="button" class="btn btn-danger" style={{marginTop:'10px'}} > <i class="far fa-trash-alt"></i>&nbsp;Delete </button>
 
    
    
    </td>                    
                  </tr>
                  ))}

              </tbody>  

            </table>



               </div>
               
    </div>
    )
}

export default AddBooks
