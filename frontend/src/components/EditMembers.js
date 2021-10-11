import React , {useState , useEffect}from 'react'
import axios from 'axios';
import styled from'styled-components';


const EditMembers = props => {

    const[NIC, setNIC] = useState("");
    const[First_Name,setFirst_Name] = useState("");
    const[Last_Name, setLastName] = useState("");
    const[Address, setAddress] = useState("");
    const[Email,SetEmail] = useState("");
    const[Student_category,setStudent_category] = useState("");
   
    
    const changeOnClick = e=>{
         

        const members={
            NIC,
            First_Name,
            Last_Name,
            Address,
            Email,
            Student_category
            
        };
        setNIC(" ");
        setFirst_Name(" ");
        setLastName(" ");
        setAddress(" ");
        SetEmail(" ");
        setStudent_category(" ");

        axios.put(`http://localhost:8000/member/updateMember/${props.match.params.id}`,members)
        .then(res=>alert(res.data))
        .catch(err=>{console.log(err);
        });
    };

    useEffect(()=>{
        axios.get(`http://localhost:8000/member/${props.match.params.id}`)
        .then(res=>[
          setNIC(res.data.NIC),
          setFirst_Name(res.data.First_Name),
          setLastName(res.data.Last_Name),
          setAddress(res.data.Address),
          SetEmail(res.data.Email),
          setStudent_category(res.data.Student_category)
     
        ])
        .catch(err => console.log(err));
      },[]);
    return (
        <div>
              <EditMemberContainer>
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
              <h1>Update Member </h1>
        <form onSubmit={changeOnClick} encType="multipart/form-data">

            <br/>

        <div className="form-row">
            <div className="form-group col-md-6">
            <label htmlFor="NIC">NIC NUmber</label>
            <input type="text" 
            onChange={e => setNIC(e.target.value)}
            value={NIC}
            className="form-control"  
            placeholder="NIC Number" />


            </div>

            <br/>

          <div className="form-group col-md-6">
            <label htmlFor="First_Name ">First Name</label><br/>
            <input type="text"
             onChange={e => setFirst_Name(e.target.value)}
             value={First_Name}
            className="form-control"  
            placeholder="First Name" />
            </div>
        </div>

            <br/>

        <div className="form-group col-md-6">
            <label htmlFor="Last_Name">Last Name</label><br/>
            <input type="text"
            onChange={e => setLastName(e.target.value)} 
            value={Last_Name}
            className="form-control"  
            placeholder="Last Name" />
          </div>

          <br/>

          <div className="form-group col-md-6">
            <label htmlFor="Address">Address</label><br/>
            <input type="text"
            onChange={e => setAddress(e.target.value)} 
            value={Address}
            className="form-control"  
            placeholder="Address" />
          </div>

          <br/>

          <div className="form-group col-md-6">
            <label htmlFor="Email">Email</label><br/>
            <input type="text"
            onChange={e => SetEmail(e.target.value)} 
            value={Email}
            className="form-control"  
            placeholder="ABC@gmail.com" />
          </div>

          <br/>

          <div className="form-group col-md-6">
            <label htmlFor="Student_category">Applicant Category</label>
            <select  
            onChange={e => setStudent_category(e.target.value)}
            value={Student_category} 
            className="form-control">
            <option selected>Ordinary Level</option>
            <option>Advance Level</option>
            <option>Course </option>
            <option>Staff</option>
            
  
            </select>
          </div>

          <br/>
  
          <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </center>
    
      </div>
      </EditMemberContainer>
    )
        </div>
    )
}

export default EditMembers

const EditMemberContainer = styled.div`
     
h1{
     font-wight: 12000;
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