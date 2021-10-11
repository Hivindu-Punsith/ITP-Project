import React ,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Editbooks = ( props) => {

const[Book_Id, setBook_Id] = useState("");
const[Book_Name , setBook_Name] = useState("");
const[Author, setAuthor] = useState("");
const[Category, setCategory] = useState("");
const[No_of_Copies, setNo_of_Copies] = useState("");

useEffect(()=>{
    axios.get(`http://localhost:8000/addBook/${props.match.params.id}`)
    .then(res=>[
        setBook_Id(res.data.Book_Id),
        setBook_Name(res.data.Book_Name),
        setAuthor(res.data.Author),
        setCategory(res.data.Category),
        setNo_of_Copies(res.data.No_of_Copies)
    ])
    .catch(err => console.log(err));
},[props]);

    return (
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
            <br/>
                      <table className="table">
          <thead>
<tr class="text-info bg-dark">
 
  <th scopse="col">Book ID</th>
  <th scopse="col">Book Name</th>
  <th scopse="col">Author</th>
  <th scopse="col">Category</th>
  <th scopse="col">Number of Copies</th>
  
</tr>
</thead>

<tbody> 
                                        
 
                                             
                  <tr >
                    
                      <td>{Book_Id}</td>
                      <td>{Book_Name}</td>
                      <td>{Author}</td>
                      <td>{Category}</td>
                      <td>{No_of_Copies}</td>
                      </tr>
                       
                      </tbody>
</table>
<br/><br/>
<center>
<Link to="/libraryhome" className="btn btn-primary">Back</Link>
</center>
        </div>
    )
}

export default Editbooks
