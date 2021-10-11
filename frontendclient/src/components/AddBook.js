import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddBooks = ({ books }) => {

const [serachItem1,setserachItem1] =useState([]);
  return (
    <div>
      <br />
      <h1 style={{ fontSize: "90px", textAlign: "center" }}>Our Books</h1>
      <hr style={{ height: "3px" }}></hr>
      <div
      className="container border"
      style={{
        marginTop: "50px",
        width: "100%",
        backgroundImage: `url('https://cdn.wallpapersafari.com/32/64/nQjfNW.jpg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
<br></br>

                <input className="form-control" style={{width:'400px', marginLeft:'30px'}} type="search" placeholder="Search The Book" onChange={event=>{setserachItem1(event.target.value)}} ></input>

        <br></br>

        <div class="d-flex justify-content-center">
       
          <div className="col-12 col-md-7 col-lg-78 mx-0 mb-2">
            <table className="table table-borderless" id="table-to-xls" >
              <tbody>
                {books.filter((AddBooks)=>{
                       if(serachItem1==""){
      return AddBooks
    }else if(AddBooks.Book_Name.toLowerCase().includes(serachItem1.toLowerCase())){
      return AddBooks
    }
})

.map((AddBooks, index) => (
                  <tr className="card p-0 overflow-hidden h-100 shadow">
                    <td>
                      <div>
                        <img
                          src={`/uploads/${AddBooks.BookImage}`}
                          alt="..."
                          style={{
                            height: "200px",
                            width: "200px",
                            marginLeft: "250px",
                            
                          }}
                        />
                        <b style={{ fontSize: "40px", marginLeft: "90px" }}>
                          {AddBooks.Book_Name}
                        </b>
                      </div>
                    </td>
                    <td
                      className="card-text"
                      style={{ fontSize: "25px", textAlign: "center" }}
                    >
                      {AddBooks.Author}
                    </td>
                    <td><center>
                    <Link to ={{
        pathname:`/borrow`
      }}>
    <button type="button" class="btn btn-danger">&nbsp;Borrow</button>
    </Link>
                    </center></td>
                  </tr>
                
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBooks;