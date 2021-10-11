import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';

const SearchFine = (props) => {

    const [NIC, setNIC] = useState("");
    const[Book_Name , setBook_Name] = useState("");
    const[Author, setAuthor] = useState("");
    const[Return_Date, setReturn_Date]= useState("");
    const[Fines , setFines]=useState("")

    useEffect(()=>{
        axios.get(`http://localhost:8000/fines/${props.match.params.id}`)
        .then(res=>[
            setNIC(res.data.NIC),
            setBook_Name(res.data.Book_Name),
            setAuthor(res.data.Author),
            setReturn_Date(res.data.Return_Date),
            setFines(res.data.Fines)
        ])
        .catch(err => console.log(err));
    },[props]);
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
             
          <table className="table">
          <thead>
<tr className="text-info bg-dark">
  <th scopse="col">NIC</th>
  <th scopse="col">Book Name</th>
  <th scopse="col">Author</th>
  <th scopse="col">Fines</th>
  <th scopse="col">Return Date</th>

</tr>
</thead>

              <tbody> 
                                          
                  <tr >
                    
                      <td>{NIC}</td>                             
                      <td>{Book_Name}</td>
                      <td>{Author}</td>
                      <td>{Fines}</td>
                      <td>{Return_Date}</td>
                     </tr>
                     </tbody>
                     </table>
     
                     <center>
<Link to="/libraryhome" className="btn btn-primary">Back</Link>
</center>
        </div>

        </div>
    )

    }

    
export default SearchFine
