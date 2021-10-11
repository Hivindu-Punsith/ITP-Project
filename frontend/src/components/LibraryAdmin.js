import React from 'react'

import Book from './DisaImages/Book.png'
import Applicant from './DisaImages/applicant.png'
import Borrow from './DisaImages/borrowbook.png'
import Fines from'./DisaImages/fine.png'
import Members from './DisaImages/members.png'
import AllBooks from './DisaImages/allbooks.jpg'
import AddFine from './DisaImages/addfine.png'
const LibraryAdmin = () => {
    return (
        <div>
         <div className='container'>
            <center><table>
                
                
                    <tr>

                    <td>
                    <a href='/books'><img src={AllBooks} style={{width:200 , marginTop:'100px', marginLeft:'40px', marginRight:'40px'}}></img></a><br/>
                    <center><a className="btn btn-outline-success" style={{marginTop:'20px'}} href='/books'>&nbsp;All Books&nbsp;</a></center>
                    </td>

                    <td>
                    <a href='/add-books'><img src={Book} style={{width:200 , marginTop:'40px', marginLeft:'40px', marginRight:'40px'}}></img></a><br/>
                    <center><a className="btn btn-outline-success" style={{marginTop:'20px'}} href='/add-books'>&nbsp;Add Books&nbsp;</a></center>
                    </td>
                    </tr>


                    <tr>
                    <td>
                    <a href='/allMembers'><img src={Members} style={{width:200 , marginTop:'40px', marginLeft:'40px', marginRight:'40px'}}></img></a><br/>
                    <center><a className="btn btn-outline-success" style={{marginTop:'20px'}} href='/allMembers'>&nbsp;All Members&nbsp;</a></center>
                    </td>

                    <td>
                    <a href='/ApplicantHome'><img src={Applicant} style={{width:200 , marginTop:'40px', marginLeft:'40px', marginRight:'40px'}}></img></a><br/>
                    <center><a className="btn btn-outline-success" style={{marginTop:'20px'}} href='/ApplicantHome'>&nbsp;All Applicants&nbsp;</a></center>
                    </td>
                    </tr>

                    <tr>
                    <td>
                    <a href='/Fines'><img src={Fines} style={{width:200 , marginTop:'40px', marginLeft:'40px', marginRight:'40px'}}></img></a><br/>
                    <center><a className="btn btn-outline-success" style={{marginTop:'20px'}} href='/Fines'>&nbsp;All Fines&nbsp;</a></center>
                    </td>
                    <td>
                    <a href='/add-fine'><img src={AddFine} style={{width:200 , marginTop:'40px', marginLeft:'40px', marginRight:'40px'}}></img></a><br/>
                    <center><a className="btn btn-outline-success" style={{marginTop:'20px'}} href='/add-fine'>&nbsp;Add Fines&nbsp;</a></center>
                    </td>
                    </tr>

                    <tr>
                    <td>
                    <a href='/AllBorrow'><img src={Borrow} style={{width:200 , marginTop:'40px', marginLeft:'40px', marginRight:'40px'}}></img></a><br/>
                    <center><a className="btn btn-outline-success" style={{marginTop:'20px'}} href='/AllBorrow'>&nbsp;All Borrowed Books&nbsp;</a></center>
                    </td>
                    </tr>

</table></center>
    </div>
 </div>
    )
}

export default LibraryAdmin
