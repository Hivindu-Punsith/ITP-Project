import axios from 'axios';
import React, { useState } from 'react'


const AllBorrow = ({Borrow}) => {

    const [borrow, setborrow ]=useState([])

   const deteleborrow = id =>{
     axios.delete(`http://localhost:8000/borrow/${id}`)
     .then(res => alert(res.data))
     setborrow(borrow.filter(elem => elem._id !== id))
   }
    return (
        <div className='container'>
            <h1>All Borrowed Books</h1>
            <table className="table">
                <thead>
                    <tr className="text-info bg-dark">
                    <th scope="col">#</th>
                    <th scope="col">NIC</th>
                    <th scope="col">Book Name</th>
                    <th scope="col">Borrowed Date</th>
                    <th scope="col">Return Date</th>
                    <th scope="col">Actions</th>  
                    </tr>
                </thead>
                <tbody>
                    {Borrow.map((Borrow,index)=>(
                        <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>{Borrow.NIC}</td>
                            <td>{Borrow.Book_Name}</td>
                            <td>{Borrow.Borrowed_Date}</td>
                            <td>{Borrow.Return_Date}</td>
                            <td>
                            <button onClick={()=>deteleborrow(Borrow._id)}deleteborrow type="button" class="btn btn-danger" style={{marginTop:'10px'}} > <i class="far fa-trash-alt"></i>&nbsp;Delete </button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AllBorrow
