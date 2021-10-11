import axios from 'axios';
import React, { useState } from 'react'


const BorrowApp= () => {
    
    const[NIC,setNIC] = useState("");
    const[ Book_Name,setBook_Name] = useState("");
    const[Borrowed_Date,setBorrowed_Date] = useState("");
    const[Return_Date,setReturn_Date] = useState("");
  
  const changeOnClick = e =>{
    e.preventDefault();

    const addborrow={
        NIC,
        Book_Name,
        Borrowed_Date,
        Return_Date
    };
  

  axios.post("http://localhost:8000/borrow/addborrow",addborrow)
  .then(res=>alert(res.data))
  .catch(err=>{console.log(err);
  });
};
  return (
      <div>
         <div
      className="container border"
      style={{
        marginTop: "50px",
        width: "50%",
        backgroundImage: `url('https://cdn.pixabay.com/photo/2020/02/24/18/05/background-4876988_1280.jpg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
       
            <center>

              <h1>Fill The Following Form</h1>
          <form onSubmit={changeOnClick} encType="multipart/form-data">



          <div className="form-row">

            <div className="form-group col-md-6">
                <label htmlFor="NIC">NIC Number</label>
        <input type="text" 
        onChange={e => setNIC(e.target.value)}
        className="form-control"  
            placeholder="NIC Number" />
<br/>

            </div>
            <div className="form-group col-md-6">
        <label htmlFor="Book_Name">Book Name</label><br/>
        <input type="text"
             onChange={e => setBook_Name(e.target.value)}
        className="form-control"  
        placeholder="Book Name" />
        </div>
        </div>
              < br/>

            <div className="form-row">
                <div className="form-group col-md-4">
                <label htmlFor="Borrowed_Date">Borrowing Date</label>
                <input type="date" 
            onChange={e =>setBorrowed_Date(e.target.value)}
                className="form-control"  
                placeholder="NIC Number" />


</div>

        <br/>
        <div className="form-group col-md-4">
        <label htmlFor="Return_Date ">Returning Date</label>
            <input type="date"
            onChange={e => setReturn_Date(e.target.value)}
                    className="form-control"  
            placeholder="First Name" />
            </div>
            </div>

            <br/>

  
  <button type="submit" className="btn btn-danger">Receive </button>
</form> 
</center>

            </div>
            </div>
        
    )
}

export default BorrowApp

