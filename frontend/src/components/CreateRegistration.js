import React, { useState } from "react";
import axios from "axios";
import { ProgressBar } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
//import background from '../images/hall.png';

const CreateRegistration = (props) => {
  const history = useHistory();
  const [lecFname, setFname] = useState("");
  const [lecLname, setLname] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [cNumber, setCnumber] = useState("");
  const [address, setAddress] = useState("");
  const [Rdate, setRdate] = useState("");
  const [uploads, setUploads] = useState("");

  const [progressPercent, setProgressPercent] = useState();
  const [error, setError] = useState({
    found: false,
    message: "",
  });


  const upload = (e) => {
    setUploads(e.target.files[0]);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("lecFname", lecFname);
    formData.append("lecLname", lecLname);
    formData.append("nic", nic);
    formData.append("dob", dob);
    formData.append("email", email);
    formData.append("cNumber", cNumber);
    formData.append("address", address);
    formData.append("Rdate", Rdate);
    formData.append("uploads", uploads);

    setFname("");
    setLname("");
    setNic("");
    setDob("");
    setEmail("");
    setCnumber("");
    setAddress("");
    setRdate("");


    axios
      .post("/addRe", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (data) => {
          setProgressPercent(Math.round((100 * data.loaded) / data.total));
        },
      })
      .then((res) => {
        res.data = res.data.message;
        alert(res.data);
        history.push('/');
      })
      .catch((err) => {
        setError({
          found: true,
          message: err.response.data.errors,
        });
      });
  };

  
  return (
    <div className="container">
      
      <center>
        <p>
        <h4><b>REGISTRATION FORM: ROYAL EDUCATION INSTITUTE</b></h4>
         <h5><b>INVITED TO REGISTER: Retired lecturers, unemployed lecturers, lecturers currently applying
          their trade in Industry and foreign based lecturers</b></h5>
        </p>
        </center>
        <br></br>

      <div className="card" style={{
        width: '1500px',
        border: '1px solid black',
        marginRight: '10px',
        marginLeft: '-90px',
      }}>
        
        <div className="">
          <br></br>
          <center>
            <h3><b>Lecturer Registration</b></h3>
          </center>
        </div>


        <div className="card-body">
          <form onSubmit={onSubmit} encType="multipart/form-data">
            <div className="mb-3">
              <label htmlFor="lecFname" className="form-label">
                First Name
              </label>
              <input

                className="form-control"
                id="lecFame"
                required
                value={lecFname}
                onChange={(e) => setFname(e.target.value)}
                name="lecFname"

              />
            </div>


            <div className="mb-3">
              <label htmlFor="lecLname" className="form-label">
                Last Name
              </label>
              <input

                className="form-control"
                id="lecLname"
                required
                value={lecLname}
                onChange={(e) => setLname(e.target.value)}
                name="lecLname"
                pattern="[a-zA-Z]*"

              />
            </div>


            <div className="mb-3">
              <label htmlFor="nic" className="form-label">
                NIC number
              </label>
              <input

                className="form-control"
                id="nic"
                required
                value={nic}
                onChange={(e) => setNic(e.target.value)}
                name="nic"
                placeholder="xxxxxxxxxV"
                pattern="^[0-9]{9}[vVxX]$"
                maxLength="10"
                title="Must contain letter V at last"

              />
            </div>

            <div className="mb-3">
              <label htmlFor="dob" className="form-label">
                Date Of Birth
              </label>
              <input
                type="date"
                className="form-control"
                id="dob"
                required
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                name="dob"

              />
            </div>


            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input

                className="form-control"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="email"
                //pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]"


              />
            </div>


            <div className="mb-3">
              <label htmlFor="cNumber" className="form-label">
                Mobile Number
              </label>
              <input

                className="form-control"
                id="cNumber"
                required
                value={cNumber}
                onChange={(e) => setCnumber(e.target.value)}
                name="cNumber"
                pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                title="Must contain 10  numbers"
                maxLength="10"
              />
            </div>


            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input

                className="form-control"
                id="address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                name="address"


              />
            </div>

            <div className="mb-3">
              <label htmlFor="Rdate" className="form-label">
                Registration Date
              </label>
              <input
                type="date"
                className="form-control"
                id="Rdate"
                required
                value={Rdate}
                onChange={(e) => setRdate(e.target.value)}
                name="Rdate"

              />
            </div>

            <div className="mb-3">
              {error.found && (
                <span className="alert-danger" role="alert">
                  {error.message}
                </span>
              )}
              <br />
              {error.found && (
                <span className="alert-danger" role="alert">
                  {error.message}
                </span>
              )}

              <small style={{ color: "red" }}>Upload Only Pdf Format</small><br />
              <label htmlFor="upload" className="form-label">
                Upload your Curriculum Vitae
              </label>
              <br />
              <input
                type="file"
                uploads="uploads"
                required
                className="form-control-file"
                onChange={upload}
              />
            </div>
            {progressPercent && (
              <ProgressBar
                now={progressPercent}
                label={`${progressPercent}%`}
              />
            )}
            <br />
            <center>
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </center>

            
            <Link to="">

            </Link>
          </form>
        </div>
      </div>
    </div>
    
  );
};

export default CreateRegistration;
