import React, { Component } from "react";
import axios from "axios";

export default class adminViewApplication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      RegistationNumber:  "STF" + this.rand(9999, 99999),
      AppointedDate: "",
      FirstName: "",
      LastName: "",
      DateOfBirth: "",
      position: "",
      ContactNumber: "",
      NationalIDNumber: "",
      Gender: "",
      Address: "",
      BasicSalary:"",
      Email: "",
      WorkingExp: "",
      CarreerSum: "",
      EducationalQf: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const id = this.props.match.params.id;

    const {
      RegistationNumber,
      AppointedDate,
      FirstName,
      LastName,
      DateOfBirth,
      position,
      ContactNumber,
      NationalIDNumber,
      Gender,
      Address,
      BasicSalary,
      Email,
      WorkingExp,
      CarreerSum,
      EducationalQf
    } = this.state;

    const data = {
      RegistationNumber: RegistationNumber,
      AppointedDate: AppointedDate,
      FirstName: FirstName,
      LastName: LastName,
      DateOfBirth: DateOfBirth,
      position: position,
      ContactNumber: ContactNumber,
      NationalIDNumber: NationalIDNumber,
      Gender: Gender,
      Address: Address,
      BasicSalary: BasicSalary,
      Email:Email,
      WorkingExp:WorkingExp,
      CarreerSum:CarreerSum,
      EducationalQf:EducationalQf
    };

    console.log(data);

    axios.delete(`/application/delete/${id}`).then((res)=>{
    })

    axios.post(`/register/save`, data).then((res) => {
      if (res.data.success) {
        alert("Member Added..!");
        window.location.replace('/applications');
        this.setState({
          RegistationNumber: "",
          AppointedDate: "",
          FirstName: "",
          LastName: "",
          DateOfBirth: "",
          position: "",
          ContactNumber: "",
          NationalIDNumber: "",
          Gender: "",
          Address: "",
          BasicSalary: "",
          Email: "",
          WorkingExp: "",
          CarreerSum: "",
          EducationalQf: ""
        });
      }
    });
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/application/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          FirstName: res.data.post.FirstName,
          LastName: res.data.post.LastName,
          DateOfBirth: res.data.post.DateOfBirth,
          position: res.data.post.position,
          ContactNumber: res.data.post.ContactNumber,
          NationalIDNumber: res.data.post.NationalIDNumber,
          Gender: res.data.post.Gender,
          Address: res.data.post.Address,
          ExpectedSalary: res.data.post.ExpectedSalary,
          Email: res.data.post.Email,
          WorkingExp: res.data.post.WorkingExp,
          CarreerSum: res.data.post.CarreerSum,
          EducationalQf: res.data.post.EducationalQf
        });

        console.log(this.state.post);
      }
    });
  }
  
  rand = (min, max) => {
    return Math.floor(Math.random() * max - min + 1) + min;
  }

  render() {
    return (
      <div style={{ marginLeft: 100 }}>
        <a
          className="btn btn-success"
          href="/staffhome"
          style={{ textDecoration: "none", color: "white" }}
        >
          <i className="fas fa-home"></i>&nbsp;Home
        </a>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <a
          className="btn btn-success"
          href="/applications"
          style={{ textDecoration: "none", color: "white" }}
        >
          <i className="fas fa-file"></i>&nbsp;Applications
        </a>
        <center>
          <h1 className="h1">ADD TO STAFF</h1>
        </center>
        <hr />
        <form className="needs-validation" noValidate>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label
              for="formGroupExampleInput"
              style={{ textDecoration: "none", color: "red" }}
            >
              Registration Number*
            </label>
            <input
              className="form-control"
              name="RegistationNumber"
              value={this.state.RegistationNumber}
              required
              onChange={this.handleInputChange}readOnly
            />
          </div>

          <div className="col-md-3">
            <label
              for="inputCity"
              className="form-label"
              style={{ textDecoration: "none", color: "red" }}
            >
              Date of Appointed*
            </label>
            <input
              type="date"
              className="form-control"
              name="AppointedDate"
              value={this.state.AppointedDate}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <br />
          <div className="mb-3">
            <label
              for="formGroupExampleInput"
              style={{ textDecoration: "none", color: "red" }}
            >
              BasicSalary*
            </label>
            <input
              className="form-control"
              name="BasicSalary"
              value={this.state.BasicSalary}
              required
              onChange={this.handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label for="formGroupExampleInput" class="form-label">
              First Name
            </label>
            <input
              className="form-control"
              name="FirstName"
              value={this.state.FirstName}
              onChange={this.handleInputChange}readOnly
            />
          </div>

          <div className="mb-3">
            <label for="formGroupExampleInput" class="form-label">
              Last Name
            </label>
            <input
              className="form-control"
              name="LastName"
              value={this.state.LastName}
              onChange={this.handleInputChange}readOnly
            />
          </div>

          <div className="mb-3">
            <label for="formGroupExampleInput" class="form-label">
              Date Of Birth
            </label>
            <input
              className="form-control"
              name="DateOfBirth"
              value={this.state.DateOfBirth}
              onChange={this.handleInputChange}readOnly
            />
          </div>

          <div className="mb-3">
            <label for="formGroupExampleInput" class="form-label">
              position
            </label>
            <input
              className="form-control"
              name="position"
              value={this.state.position}
              onChange={this.handleInputChange}readOnly
            />
          </div>

          <div className="mb-3">
            <label for="formGroupExampleInput" class="form-label">
              Contact Number
            </label>
            <input
              className="form-control"
              name="ContactNumber"
              value={this.state.ContactNumber}
              onChange={this.handleInputChange}readOnly
            />
          </div>

          <div className="mb-3">
            <label for="formGroupExampleInput" class="form-label">
              National ID Number
            </label>
            <input
              className="form-control"
              name="NationalIDNumber"
              value={this.state.NationalIDNumber}
              onChange={this.handleInputChange}readOnly
            />
          </div>

          <div className="mb-3">
            <label for="formGroupExampleInput" class="form-label">
              Gender
            </label>
            <input
              className="form-control"
              name="Gender"
              value={this.state.Gender}
              onChange={this.handleInputChange}readOnly
            />
          </div>

          <div className="mb-3">
            <label for="formGroupExampleInput" class="form-label">
              Address
            </label>
            <input
              className="form-control"
              name="Address"
              value={this.state.Address}
              onChange={this.handleInputChange}readOnly
            />
          </div>

          <div className="mb-3">
            <label for="formGroupExampleInput" class="form-label">
              Email
            </label>
            <input
              className="form-control"
              name="Email"
              value={this.state.Email}
              onChange={this.handleInputChange}readOnly
            />
          </div>

          <div className="mb-3">
            <label for="formGroupExampleInput" class="form-label">
            Working Experience
            </label>
            <input
              className="form-control"
              name="WorkingExp"
              value={this.state.WorkingExp}
              onChange={this.handleInputChange}readOnly
            />
          </div>

          <div className="mb-3">
            <label for="formGroupExampleInput" class="form-label">
            Carreer Summary
            </label>
            <input
              className="form-control"
              name="CarreerSum"
              value={this.state.CarreerSum}
              onChange={this.handleInputChange}readOnly
            />
          </div>

          <div className="mb-3">
            <label for="formGroupExampleInput" class="form-label">
            Educational Quilification
            </label>
            <input
              className="form-control"
              name="EducationalQf"
              value={this.state.EducationalQf}
              onChange={this.handleInputChange}readOnly
            />
          </div>

          <button
            className="btn btn-success"
            type="submit"
            style={{ marginTop: "15px" }}
            onClick={this.onSubmit}
          >
            <i className="far fa-check-square"></i>&nbsp;Add To Staff
          </button>
        </form>
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
