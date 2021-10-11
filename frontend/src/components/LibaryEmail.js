import React from 'react'
import emailjs from "emailjs-com";
const LibaryEmail = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm(
          "service_5ax5k69",
          "template_oeoff4o",
          e.target,
          "user_BuRCp1Xp2lK8p6JaIXH7N"
        ).then(res=>{
            alert("email send success!");
            console.log(res);
        }).catch(err=> console.log(err));
      }
      return (
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
          <h1 style={{ marginTop: "25px" }}>Send The Libarary Credentials To Students</h1>
          <form
            className="row"
            style={{ margin: "25px 85px 75px 100px" }}
            onSubmit={sendEmail}
          >
            <label>name</label>
            <input type="" name="name" className="form-control" />
    
            <label>Email</label>
            <input type="email" name="useremail"  className="form-control" />
    
            <label>Message</label>
            <textarea name="message" value="Password :member123" rows="4" className="form-control" />
            <input
              type="submit"
              value="Send"
              className="form-control btn btn-primary"
              style={{ marginTop: "30px" }}
            />
          </form>
        </div>
      );
    };

export default LibaryEmail
