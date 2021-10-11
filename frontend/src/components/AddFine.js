import axios from 'axios';
import React, { useState } from 'react'
import styled from 'styled-components';

const AddFine = () => {
    
  const [NIC, setNIC] = useState("");
  const[Book_Name , setBook_Name] = useState("");
  const[Author, setAuthor] = useState("");
  const[Return_Date, setReturn_Date]= useState("");
  const[Fines , setFines]=useState("")
  
  const changeOnClick = f =>{
    //f.preventDefault();

    const addfine={
      NIC,
      Book_Name,
      Author,
      Return_Date,
      Fines
    };
  

  axios.post("http://localhost:8000/fines/addfine",addfine)
  .then(res=>alert(res.data))
  .catch(err=>{console.log(err);
  });
};
  return (
        <AddFinesContainer>
                <div
      className="container border"
      style={{
        marginTop: "50px",
        width: "50%",
        backgroundImage: `url('https://img.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg?size=626&ext=jpg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
            <center>

              <h1>Add a New Fine</h1>
          <form onSubmit={changeOnClick} encType="multipart/form-data">

  <div className="form-row">

    <div className="form-group col-md-6">
    <label htmlfor="NIC">NIC</label><br/>
    <input type="text" 
    onChange={f => setNIC(f.target.value)}
    className="form-control"  
    placeholder="NIC" required/>
    </div>


    <div className="form-group col-md-6">
      <label htmlfor="Book_Name">Book Name</label><br/>
      <input type="text" 
      onChange={f=> setBook_Name(f.target.value)}
      className="form-control" 
      placeholder="Name of The Book " required/>
      </div>
    
      <div className="form-group col-md-6">
      <label htmlfor="setAuthor">Author</label><br/>
      <input type="text" 
      onChange={f=> setAuthor(f.target.value)}
      className="form-control" 
      placeholder="Author" required/>
      </div>
  </div>

  <div className="form-group col-md-6">
    <label htmlfor="Return_Date">Return Date</label>
    <input type="date"
    onChange={f=>setReturn_Date(f.target.value)} 
    className="form-control"  />
    </div>

  <div className="form-group col-md-6">
    <label htmlfor="Fines">Fines</label><br/>
    <input type="text"
    onChange={f=>setFines(f.target.value)} 
    className="form-control"  
    placeholder="Fines" required/>
  </div>

 <br/>
 <br/>

  
  <button type="submit" className="btn btn-primary">Add </button>
</form> 
</center>.

            </div>
        </AddFinesContainer>
    )
}

export default AddFine

const AddFinesContainer = styled.div`
     
h1{
     font-wight: 1000;
     color :var(--blue);
}
.btn-primary{
    background: var(--blue);
    border:none;
    &:hover{
        background: var(--light-blue);
    }
    
}
`;