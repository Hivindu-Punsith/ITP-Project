import React,{Component} from 'react'
import LibMember from './LibraryImages/libmember.jpg'
import Borrow from './LibraryImages/borrow.png'
import welcome from './LibraryImages/welcome.gif'
import Laws from './LibraryImages/laws.jpg'
import Fine from './LibraryImages/fines.jpg'

export default class Library extends Component{
    render(){
        return(
        <div>
            <div style={{ width: '100%' }}>
                <center><img src={welcome} style={{ width: '100%', height: '600px' }} /></center>
            </div>

                <br/>

                <div className='container'>


                    <div className="row" style={{ backgroundColor: '#00ffff', borderRadius: '0px 150px 150px 0px' }}>
                        <table>
                        <tr>
                            <td style={{ width: '40%' }}>
                            <img src={LibMember} style={{ width: '500px', height: '400px' }} />
                            </td>
                                    <td style={{ color: 'white', textAlign: 'center' }}>
                                        <h3 ><b>Want to be a library member </b></h3>
                                        <p>Just fill the following form & submit it </p>
                                        <a className="btn btn-outline-light btn-lg" style={{ width: '200px' }} href='/AddApplicant'>Register now!</a>
                                    </td>
                        </tr>
                        </table>
                    </div><br />

                    <div className="row" style={{ backgroundColor: '#00ffff', borderRadius: '150px 0px 0px 150px' }}>
                        <table>
                            <tr>
                                <td style={{ color: 'white', textAlign: 'center' }}>
                                    <h3 style={{ marginLeft: '30px' }}><b> Do You Want to borrow a book</b></h3>
                                    <p style={{ marginLeft: '30px' }}>Just follow the procedurer</p>
                                    <a className="btn btn-outline-light btn-lg" style={{ width: '200px', marginLeft: '30px' }} href='/books'>Click Here...</a>
                                </td>
                                <td style={{ textAlign: 'right' }}>
                                    <img src={Borrow} style={{ width: '400px', height: '400px' }} />
                                </td>
                            </tr>
                        </table>
                    </div><br />

                        
                    <div className="row" style={{ backgroundColor: '#00ffff', borderRadius: '0px 150px 150px 0px' }}>
                        <table>
                        <tr>
                            <td style={{ width: '40%' }}>
                            <img src={Laws} style={{ width: '500px', height: '400px' }} />
                            </td>
                                    <td style={{ color: 'white', textAlign: 'center' }}>
                                        <h3 ><b>These are the rules </b></h3>
                                            <div className='container'> 
                                            <p>Do not take any book or other library material out of the library without following the borrowing procedures.<br/>
                                            Make sure to return the borrowed items by the due date.<br/>
                                            In case any of the borrowed items being lost, damaged, or destroyed, you are required to replace the lost /damaged/destroyed item with a new one.<br/>
                                            Never write in books or cut pages out of them.<br/>
                                            Return books/materials to their original location on the bookshelf.</p>
                                            </div>
                                        
                                    </td>
                        </tr>
                        </table>
                    </div><br />

                    <div className="row" style={{ backgroundColor: '#f70d1a', borderRadius: '150px 0px 0px 150px' }}>
                        <table>
                            <tr>
                                <td style={{ color: 'white', textAlign: 'center' }}>
                                    <h3 style={{ marginLeft: '30px' }}><b>Return the books on time</b></h3>
                                    <p style={{ marginLeft: '30px' }}>Click below to check the members list with fines</p>
                                    <a className="btn btn-outline-light btn-lg" style={{ width: '200px', marginLeft: '30px' }} href='/Fines'>Click Here...</a>
                                </td>
                                <td style={{ textAlign: 'right' }}>
                                    <img src={Fine} style={{ width: '400px', height: '400px' }} />
                                </td>
                            </tr>
                        </table>
                    </div><br />
                   

                </div>
            </div>
        )
    }
}