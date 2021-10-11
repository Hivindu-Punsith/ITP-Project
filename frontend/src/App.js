import React, { Component,useState,useEffect } from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import axios from 'axios';
import Adminhomeheader from './components/Adminhomeheader';
import Adminhomefooter from './components/Adminhomefooter';

import AppliedAll from './components/AppliedAll'
import MainHome from './components/MainHome'
import adminViewProfile from './components/adminViewProfile'
import adminViewApplication from './components/adminViewApplication'
import updateAdmin from './components/updateAdmin'
import Apply from './components/Apply'
import staffpdf from './components/staffpdf'
import ViewStfApplication from './components/ViewStfApplication'

import Specialevents from './components/Specialevents';
import Loginpage from './components/Loginpage';
import middle from './components/Middle';
import Aboutus from './components/Aboutus';
import Adminspecialevent from './components/Adminspecialevent';
import Createspecialevent from './components/Createspecialevent';
import Editspecialevent from './components/Editspecialevent';
import Adminttrequest from './components/Adminttrequest';
import Adminalltimetables from './components/Adminalltimetables';
import Adminaddttable from './components/Adminaddttable';
import Admineditttables from './components/Admineditttables';
import Displaytimetables from './components/Displaytimetables';
import DimaNavbarTT from './components/DimaNavbarTT';
import DimaNavbarSE from './components/DimaNavBarSE';
import AdminStaffLecAttendance from './components/AdminStaffLecAttendance';
import DimaNavbarAttend from './components/DImaNavBarAttend';
import AdminSTDattendance from './components/AdminSTDattendance';
import AdminApproveLrequests from './components/AdminApproveLrequests';
import AdminApproveLR from './components/AdminApproveLR';
import Adminaddnewattendance from './components/Adminaddnewattendance';
import MarkStudentattendance from './components/MarkStudentattendance';

import AdminHome from './components/AdminHome';
import CreateSub from './components/CreateSub';
import SubHome from './components/SubHome';
import EditSub from './components/EditSub';
import SubDetails from './components/SubDetails';
import SubPdf from './components/SubPdf';
import EnrollmentHome from './components/EnrollmentHome';
import AddEnrollment from './components/AddEnrollment';
import SubStdPreview from './components/SubStdPreview';
import SubAddClient from './components/SubAddClient';

import addLecturer from './components/addLecturer';
import EditLecturer from './components/EditLecturer';
import lecturerHome from './components/lecturerHome';
import PostLecturer from './components/PostLecturer';
import timetableUpdate from './components/timetableUpdate';
import leaveReq from './components/leaveReq';
import DownloadPdf from './components/DownloadPdf'
import LecturerEmail from './components/LecturerEmail';
import lecAdminPage from './components/lecAdminPage';
import viewRegistrations from './components/viewRegistrations'
import CreateRegistration from './components/CreateRegistration';
import detailRequest from './components/detailRequest';
import detailsHome from './components/detailsHome';
import editNotice from './components/editNotice';



import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';

import { FileUploader } from './components/FileUploader';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Preview } from './components/Preview';

import EditCourseFollowpdf from './components/EditCourseFollowpdf';
import Courses from './components/Courses';
import AddCourse from './components/AddCourse';
import Course from './components/Course';
import EditCourse from './components/EditCourse';
import DisplayAll from './components/DisplayAll';
import Login from './components/Login';
import courseInside from './components/courseInside';
import adminCourseDisplay from './components/adminCourseDisplay';
import buyCourse from './components/buyCourse';
import CourseEnrollKeySendEmail from './components/CourseEnrollKeySendEmail';


import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import Malkimainhome from './components/Malkimainhome';
import PostDetails from './components/PostDetails';
import Home from './components/Home';
import addstudent from './components/addstudent';
import ViewStdDetails from './components/ViewStdDetails';
import Registration from './components/Registration';
import profile from './components/profile';
import StdEdit from './components/StdEdit';
import StdPdf from './components/StdPdf';
import StudentEmail from './components/StudentEmail';

import NavBar from './components/NavBar';
import CreateItem from './components/CreateItem';
import EditItem from './components/EditItem';
import HomePayment from './components/HomePayment';
import BuyCourseDula from './components/BuyCourseDula';
import CourseReceipt from './components/CourseReceipt';
import GetCourseReceipt from './components/GetCourseReceipt';
import FeesPay from './components/FeesPay';
import feesPayList from './components/feesPayList';
import LecSalary from './components/LecSalary';
import CalculateLecSalary from './components/CalculateLecSalary';
import CalcNetSalry from './components/CalcNetSalry';
import StaffSalary from './components/StaffSalary';
import calculateStaffSalary from './components/calculateStaffSalary';
import CalcStaffSalary from './components/CalcStaffSalary';
import Adminlogin from './components/Adminlogin';


import AddBooks from './components/AddBooks';
import Header from "./components/Header";
import Navbar from './components/DisaNavbar';
import AddNewBooks from './components/AddNewBooks';
import SearchBooks from './components/SearchBooks';
import Editbooks from './components/EditBooks';
import Fine from './components/Fine';
import AddFine from './components/AddFine';
import SearchFine from './components/SearchFine';
import AddApllicant from './components/AddApplicant';
import Applicant from './components/Applicant';
import AddLibraryMember from './components/AddLibraryMember';
import LibraryAdmin from './components/LibraryAdmin';
import Members from './components/Members';
import EditMembers from './components/EditMembers';
import AllBorrow from './components/AllBorrow';
import LibaryEmail from './components/LibaryEmail';
  function App() {

     

      const[posts , setPosts] = useState([])
      const [files, setFiles] = useState([]);

      const onSuccess = (savedFiles) => {
        setFiles(savedFiles)
    };
    
    
      useEffect(() => {
    
        axios.get('http://localhost:8000/courses')
        .then(res => setPosts(res.data) )
        .catch(error => console.log(error));
    
    
      })

       
      const [books, setBooks] = useState([])

  useEffect(()=>{

    axios.get('http://localhost:8000/addBook') 
    .then(res=>setBooks(res.data))
    .catch(error => console.log(error));
  },[])

  const [PayFines, setPayFines] = useState([])

  useEffect(()=>{

    axios.get('http://localhost:8000/fines') 
    .then(res =>setPayFines(res.data))
    .catch(error => console.log(error));
  },[])

  const [Applicants, setApplicant] = useState([])

  useEffect(()=>{

    axios.get('http://localhost:8000/applicants') 
    .then(res =>setApplicant(res.data))
    .catch(error => console.log(error));
  },[])

const[Member,setMember] = useState([])
useEffect(()=>{

  axios.get('http://localhost:8000/member')
  .then(res=>setMember(res.data))
  .catch(error=>console.log(error));
},[])

const[Borrow,setBorrow]= useState([])
useEffect(()=>{
  axios.get('http://localhost:8000/borrow')
  .then(res=>setBorrow(res.data))
  .catch(error=>console.log(error));
},[])

    return (
    <BrowserRouter>
      <div>

{/* minosh  */}



        <Route path=""  component={Adminhomeheader}></Route>

        <Route path="/staffhome" component={MainHome}></Route>
        <Route path="/applications"  component={AppliedAll}></Route>
        <Route path="/updateStf/:id"  component={updateAdmin}></Route>
        <Route path="/adminprofile/:id"  component={adminViewProfile}></Route>
        <Route path="/ViewStfApplication/:id" component={ViewStfApplication}></Route>
        <Route path="/viewapplication/:id"  component={adminViewApplication}></Route> 
        <Route path="/apply"  component={Apply}></Route>   
        <Route path="/pdf/:id" component={staffpdf}></Route>
        


        <Route path="/Admintimetable" component={DimaNavbarTT}></Route>
        <Route path="/middle" component={middle}></Route>
        <Route path="/special" component={Specialevents}></Route>
        <Route path="/adminspecialevent" component={DimaNavbarSE}></Route>
        <Route path="/adminspecialevent" component={Adminspecialevent}></Route>
        <Route path="/about" component={Aboutus}></Route>
        <Route path="/admin"  component={Loginpage}></Route>
        <Route path= "/addnewspecialevent" component={Createspecialevent}></Route>
        <Route path="/editspecialevent/:id" component={Editspecialevent}></Route> 
        <Route path="/Admintimetable" component={Adminttrequest}></Route>
        <Route path="/Admintimetable" component={Adminalltimetables}></Route>
        <Route path="/addnewtimetable" component={Adminaddttable}></Route>
        <Route path="/admineditttables/:id" component={Adminttrequest}></Route>
        <Route path="/admineditttables/:id" component={Admineditttables}></Route>
        <Route path="/displaytimetables" component={Displaytimetables}></Route>
        <Route path="/AdminAttendance" component={DimaNavbarAttend}></Route>
        <Route path="/AdminAttendance" component={AdminStaffLecAttendance}></Route>
        <Route path="/AdminStaffLecAttendance" component={DimaNavbarAttend}></Route>
        <Route path="/AdminStaffLecAttendance" component={AdminStaffLecAttendance}></Route>
        <Route path="/AdminSTDattendance" component={DimaNavbarAttend}></Route>
        <Route path="/AdminSTDattendance" component={AdminSTDattendance}></Route>
        <Route path="/AdminApproveLrequests" component={DimaNavbarAttend}></Route>
        <Route path="/AdminApproveLrequests" component={AdminApproveLrequests}></Route>
        <Route path="/AdminApproveLR/:id" component={AdminApproveLR}></Route>
        <Route path="/addnewattendance" component={Adminaddnewattendance}></Route>
        <Route path="/addnewstdattendance" component={MarkStudentattendance}></Route>

       
        <Route path="/adminhome" exact component={AdminHome}></Route>
        <Route path="/Adminsubhome" component={SubHome}></Route>
        <Route path="/addsub" component={CreateSub}></Route>
        <Route path="/editsub/:id" component={EditSub}></Route>
        <Route path="/subject/:id" component={SubDetails}></Route>
        <Route path="/downloadsub/:id" component={SubPdf}></Route>
        <Route path="/enrollhome" component={EnrollmentHome}></Route>
        <Route path="/addEnrollment" component={AddEnrollment}></Route>
        <Route path="/stdview" component={SubStdPreview}></Route>
        <Route path="/subjectclientadd/:id" component={SubAddClient}></Route>

        <Route path ="/lechome" component ={lecturerHome}></Route>
        <Route path= "/addLec/:id" component={addLecturer}></Route>
        <Route path ="/editLec/:id" component={EditLecturer}></Route>
        <Route path ="/postLec/:id" component={PostLecturer}></Route>
        <Route path ="/timetableReq" component={timetableUpdate}></Route> 
        <Route path ="/leaveReq" component={leaveReq}></Route> 
        <Route path ="/download/:id" component={DownloadPdf}></Route>
        <Route path ="/lecConfirmationSend/:id" component={LecturerEmail}></Route>
        <Route path ="/viewRegistrations" component={viewRegistrations}></Route>
        <Route path ="/lecturerRegistration" component={CreateRegistration}></Route>
        <Route path ="/publishNotice" component={detailRequest}></Route>
        <Route path ="/viewNotice" component={detailsHome}></Route>
        <Route path ="/lecAdminPage" component={lecAdminPage}></Route>
        <Route path ="/editnotice/:id" component={editNotice}></Route>

      

{/* minosh */}
    

    <Route  path="/CourseInside"   component={FileUploader} />
       <Preview/>
      <ToastContainer/>
   
       
        <Route   exact path="/view"  render={()=> <Courses posts={posts} />} />
        <Route path="/course/:id"    render={(props)=>  <Course {...props} posts={posts} />} />
        <Route path="/Cupdate/:id"    render={(props)=>  <EditCourse {...props} posts={posts} />} />
        <Route  path="/add-course"  component={AddCourse} />
        <Route  path="/allCourse"  component={Login} />
        <Route  path="/Admincoursepage"  render={()=> <DisplayAll posts={posts} />} />
        <Route  path="/followed"  component={buyCourse} />
        <Route path="/course/:id"    render={(props)=>  <adminCourseDisplay {...props} posts={posts} />} />
        <Route  path="/buyCoursepdf/:id"  component={EditCourseFollowpdf} />
        <Route  path="/EnrollKeySend"  component={CourseEnrollKeySendEmail} />

       



        <Route path="/AdminStudnethome"  component={Malkimainhome}></Route>
        <Route path="/add" component={CreatePost}></Route>
        <Route path="/stdupdateedit/:id" component={EditPost}></Route>
        <Route path="/post/:id" component={PostDetails}></Route>
        <Route path="/studentapplications" component={Home}></Route>
        <Route path="/addstudent/:id" component={addstudent}></Route>
        <Route path="/view/:id" component={ViewStdDetails}></Route>
        <Route path="/registration" component={Registration}></Route>
        <Route path="/profile/:id" component={profile}></Route>
        <Route path="/stdEdit/:id" component={StdEdit}></Route>
        <Route path="/stdPdf/:id" component={StdPdf}></Route>
        <Route path="/getmail" component={StudentEmail}></Route>

        <Route path="/" exact component={Adminlogin}></Route>
        <Route path="/adminmainhomelogin" component={Adminlogin}></Route>
        <Route path ="/paymenthome" component = {NavBar}></Route>
        <Route path ="/paymenthome" component = {HomePayment}></Route>
        <Route path ="/additem" component = {NavBar}></Route>
        <Route path = "/additem" component ={CreateItem}></Route> 
        <Route path ="/edititem/:id" component = {NavBar}></Route>
        <Route path = "/edititem/:id" component ={EditItem}></Route> 
        <Route path ="/buycourse" component = {NavBar}></Route>
        <Route path = "/buycourse" component = {BuyCourseDula}></Route>
        <Route path ="/cReceipt" component = {NavBar}></Route>
        <Route path = "/cReceipt" component = {CourseReceipt}></Route>
        <Route path ="/getCourseR/:id" component = {NavBar}></Route>
        <Route path = "/getCourseR/:id" component = {GetCourseReceipt}></Route>
        <Route path ="/feespay" component = {NavBar}></Route>
        <Route path = "/feespay" component = {FeesPay}></Route>
        <Route path ="/paidlist" component = {NavBar}></Route>
        <Route path = "/paidlist" component = {feesPayList}></Route>
        <Route path ="/calculatesalary" component = {NavBar}></Route>
        <Route path = "/calculatesalary" component = {LecSalary}></Route>
        <Route path="/calculatesalry/:id" component={LecSalary}></Route>
        <Route path="/calculatesalry/:id" component={CalcNetSalry}></Route>
        <Route path="/calculatesalry/:id" component={CalculateLecSalary}></Route>
        <Route path ="/calculateStaffsalary" component = {NavBar}></Route>
        <Route path="/calculateStaffsalary" component={StaffSalary}></Route>
        <Route path="/calculatestaffsalry/:id" component={StaffSalary}></Route>
        <Route path="/calculatestaffsalry/:id" component={CalcStaffSalary}></Route>
        <Route path="/calculatestaffsalry/:id" component={calculateStaffSalary}></Route>
      

        <Route exact path ="/libraryhome" component={LibraryAdmin}/>
      <Route path="/books" render={() => <AddBooks books={books}/>} />
      <Route path="/addBook/:id" render={props => <SearchBooks{...props} books={books}/>} />
      <Route path="/update/:id" render={props => <Editbooks{...props} books={books}/>} />
      <Route path="/add-books" component={AddNewBooks} />
      <Route path="/Fines" render={() => <Fine PayFines={PayFines}/>}/>
      <Route path="/add-fine" component={AddFine} />
      <Route path="/disafines/:id" render={props => <SearchFine{...props} PayFines={PayFines}/>} />
      <Route path="/ApplicantHome" render={() => <Applicant Applicants={Applicants}/>}/>
      <Route path="/AddApplicant" component={AddApllicant}/>
      <Route path="/addtolibray/:id" render={props => <AddLibraryMember{...props}  Applicants={Applicants}/>} />
      <Route path="/allMembers" render={() => <Members   Member={Member}/>}/>
      <Route path="/updateMember/:id" render={props => <EditMembers{...props} Member={Member}/>} />
      <Route path="/AllBorrow" render={()=><AllBorrow Borrow={Borrow}/>}/>
      <Route  path="/Email"  component={LibaryEmail} />


    

        <Route path="" component={Adminhomefooter}></Route>

      </div>
    </BrowserRouter>
    )
  }

  export default App;