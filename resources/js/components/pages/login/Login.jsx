import React, { useState } from "react";
import validator from 'validator'
import "./login.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
export default function Login(props) {
  const adminUser = {
    email: "test@admin.com",
    password: "admin123",
    role: ""
  }

  const history = useHistory();

  const LoginUser = details => {
    if (details.email != "" && details.password != "") {
      console.log("Manager Logged in");
      //history.push("/manager_home");            
    }
    //else if(details.email == adminUser.email &&  details.password == adminUser.password && details.role == "Admin"){
    //   console.log("Admin Logged in");
    //   history.push("/admin_home");
    // } else if(details.email === adminUser.email &&  details.password === adminUser.password && details.role === "Resident"){
    //   console.log("Resident Logged in");
    //   history.push("/resident_home");
    // } 
    else {
      alert("Invalid Details")
    }
  }

  const [details, setDetails] = useState({ email: "", password: "" });

  const submitHandler = e => {
    const { handleLogin } = props;
    e.preventDefault();



    const obj = {
      email: details.email,
      password: details.password,
      // email:details.email,
      // password:details.password,
      // role:details.role

    };

    console.log(obj);
    axios.post('http://127.0.0.1:8000/api/user-login',obj)
    .then(res=> {
      let json_array = res.data.data;
      
      console.log('hi',json_array);
      console.log("role",json_array.rolename);
      if(json_array.rolename=="Resident"){
        
        history.push("/resident_home");
        //console.log("res");
      }
      else if(json_array.rolename=="Manager"){
        history.push("/manager_home");
        //console.log("res");
      }
      else if(json_array.rolename=="Admin"){
        history.push("/admin_home");
        //console.log("res");
      }
      else if(json_array.rolename=="Visitor"){
        history.push("/visitor_home");
        //console.log("res");
      }
      else{
        alert("Your role has to be Admin, Manager, Resident or Visitor")
      }

    })
    .catch(error => {
      alert("Login could not be performed. Try again")
      console.log(error.response)
         });
        //history.push('/manager_home');

        LoginUser(details);
        handleLogin(details.email);
    }

  return (
    // <div className="login">
    //   <span className="loginTitle">Login</span>
    //   <form className="loginForm" >
    //     <label>Email</label>
    //     <input className="loginInput" id="email" type="email" placeholder="Enter your email" onChange={e=>setDetails({...details, email: e.target.value})} value={details.email} />
    //     <label>Password</label>
    //     <input className="loginInput" id="password" type="password" placeholder="Enter your password" required="" onChange={e=>setDetails({...details, password: e.target.value})} value={details.password}/>
    //     {/* <label>Role</label>
    //     <input
    //         type="text"
    //         className="loginInput"
    //         id="role"
    //         placeholder="Enter Role (Admin, Manager, Resident)"

    //         onChange={e=>setDetails({...details, role: e.target.value})} value={details.role}
    //       /> */}
    //     <button className="loginButton" onClick={submitHandler}>Login</button>
    //   </form>

    // </div>
    <div className="login">
      <div className="outer">
        <div className="inner">
          <form>

            <h3>Log in</h3>

            <div className="form-group">
              <label>Email</label>
              <input type="email" id="email" className="form-control" placeholder="Enter email" onChange={e=>setDetails({...details, email: e.target.value})} value={details.email} />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" id="password" className="form-control" placeholder="Enter password" required="" onChange={e=>setDetails({...details, password: e.target.value})} value={details.password}/> 
            </div>

            {/* <div className="form-group">
              <label>Role</label>
              <input type="text" id="role" className="form-control" placeholder="Enter Role (Admin, Manager, Resident)" onChange={e=>setDetails({...details, role: e.target.value})} value={details.role} />
            </div> */}


            <button onClick={submitHandler} className="btn btn-dark btn-lg btn-block" style={{marginTop:"10px", width:"100%"}}>Sign in</button>
          </form>
        </div></div></div>
  );
}