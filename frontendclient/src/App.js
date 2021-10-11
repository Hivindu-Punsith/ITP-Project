import React, { Component, useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";

// dima
import Homeheader from "./components/Homeheader";
import Homefooter from "./components/Homefooter";

// diniru
import ClientLogin from "./components/ClientLogin";
import AllSubjectsView from "./components/AllSubjectsView";
import AddEnrollment from "./components/AddEnrollment";
import SubjectEmail from "./components/SubjectEmail";
import SubjectFees from "./components/SubjectFees";

//hivindu
import Apply from "./components/Apply";

// dima
import Specialevents from "./components/Specialevents";
import Loginpage from "./components/Loginpage";
import middle from "./components/Middle";
import Aboutus from "./components/Aboutus";
import Displaytimetables from "./components/Displaytimetables";
import downloadttable from "./components/downloadttable";
import leclogin3 from "./components/lecLogin3";
import MarkStudentattendance from "./components/MarkStudentattendance";

// minosh
import Courses from './components/Courses';
import Course from './components/Course';
import BuyCourseDula from './components/BuyCourseDula';
import Login from './components/Login';
import CourseInside from "./components/CourseInside";

//nethmi
import RegisterTypes from './components/RegisterTypes';
import CreateRegistration from './components/CreateRegistration';
import detailsHome from './components/detailsHome';
import ourlecturers from './components/ourlecturers';
import leclogin from './components/leclogin'
import leclogin2 from './components/leclogin2'
import leaveReq from './components/leaveReq'
import timetableUpdate from "./components/timetableUpdate";

//malki
import Registration from "./components/Registration";
import profile from "./components/profile";

//disa
import LibraryHome from './components/Library';
import AddApllicant from './components/AddApplicant';
import AddBooks from './components/AddBook';
import LibraryLOgin from './components/LibraryLOgin';
import BorrowApp from './components/BorrowApp';
import Fine from "./components/AllFine";


function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/courses")
      .then((res) => setPosts(res.data))
      .catch((error) => console.log(error));
  });

  const [books, setBooks] = useState([])

  useEffect(()=>{

    axios.get('http://localhost:8000/addBook') 
    .then(res=>setBooks(res.data))
    .catch(error => console.log(error));
  },[])


const [Applicants, setApplicant] = useState([])

useEffect(()=>{

  axios.get('http://localhost:8000/applicants') 
  .then(res =>setApplicant(res.data))
  .catch(error => console.log(error));
},[])

const[Borrow,setBorrow] = useState([])
useEffect(()=>{

  axios.get('http://localhost:8000/borrow')
  .then(res=>setBorrow(res.data))
  .catch(error=>console.log(error));
},[])

const [PayFines, setPayFines] = useState([])

useEffect(()=>{

  axios.get('http://localhost:8000/fines') 
  .then(res =>setPayFines(res.data))
  .catch(error => console.log(error));
},[])
  return (
    <BrowserRouter>
      <div>
        <Route path="" component={Homeheader}></Route>

        {/* diniru */}
        <Route path="/login" component={ClientLogin}></Route>
        <Route path="/allsubjects" component={AllSubjectsView}></Route>
        <Route path="/addenrollsub/:id" component={AddEnrollment}></Route>
        <Route path="/subemail" component={SubjectEmail}></Route>
        <Route path="/subfee/:id" component={SubjectFees}></Route>

        {/* dima */}
        <Route path="/" exact component={middle}></Route>
        <Route path="/middle" exact component={middle}></Route>
        <Route path="/special" component={Specialevents}></Route>
        <Route path="/about" component={Aboutus}></Route>
        <Route path="/admin" component={Loginpage}></Route>
        <Route path="/displaytimetables" component={Displaytimetables}></Route>
        <Route path="/downloadttables/:id" component={downloadttable}></Route>
        <Route path="/leclogin3" component={leclogin3}></Route>
        <Route path="/markstudentattendance" component={MarkStudentattendance}></Route>

        {/* minosh */}
        <Route path = "/buycourse" component = {BuyCourseDula}></Route> 
        <Route  path="/course"  render={()=> <Courses posts={posts} />} 
        />
        <Route path="/course1/:id"    render={(props)=>  <Course {...props} posts={posts} />} />
        <Route  path="/log"  render={()=> <Login posts={posts} />} 
        />
        <Route path="/course/:id"    render={(props)=>  <Course {...props} posts={posts} />} />
        <Route  path="/allCourse"  component={Course} />
        <Route path = "/cinside" component = {CourseInside}></Route> 

        {/* nethmi */}
        <Route path="/regtypes" component={RegisterTypes}></Route>
        <Route path="/lecturerreg" component={CreateRegistration}></Route>
        <Route path="/notices" component={detailsHome}></Route>
        <Route path="/lecturerpage" component={ourlecturers}></Route>
        <Route path="/leclogin" component={leclogin}></Route>
        <Route path="/leclogin2" component={leclogin2}></Route>
        <Route path="/leaveRequest" component={leaveReq}></Route>
        <Route path="/timetableRequest" component={timetableUpdate}></Route>



        {/* malki */}
        <Route path="/signupstd" component={Registration}></Route>
        <Route path="/loginstd" component={profile}></Route>

        {/* hivindu */}
        <Route path="/apply" component={Apply}></Route>

        {/* disa */}
        <Route path="/clientlibrary" exact component={LibraryLOgin}></Route>
        <Route path="/libhome"  component={LibraryHome}></Route>
        <Route path="/AddApplicant" component={AddApllicant}/>
        <Route path="/books" render={() => <AddBooks books={books}/>} />
        <Route path="/borrow" render={()=><BorrowApp Borrow={Borrow}/>}/>
        <Route path="/Fines" render={() => <Fine PayFines={PayFines}/>}/>

        <Route path="" component={Homefooter}></Route>
      </div>
    </BrowserRouter>
  );
}


export default App;
