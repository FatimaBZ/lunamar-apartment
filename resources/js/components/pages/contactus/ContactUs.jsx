import React, { useState } from "react";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import emailjs from "emailjs-com";
import "./contactus.css";
import { Card } from "react-bootstrap";

export default function ContactUs(e) {
  const form = useRef();
  const [details, setDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    query: "",
    mailSent: false,
    error: null
  });
  const history = useHistory();
  const ContactUs = (details) => {
    if (
      details.fname != "" &&
      details.lname != "" &&
      details.email != "" &&
      details.phone != "" &&
      details.query != ""
    ) {
      history.push("/");
     
      emailjs
        .sendForm(
          "service_nz0158o",
          "template_kvml0g5",
          form.current,
          "user_FToWdb01vYWbtBVQSss1A"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      alert("Please fill the data");
    }
    
  };
  

  const submitHandler = (e) => {
    e.preventDefault();
    const axios = require('axios');
    axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/contact',
      headers: { 'content-type': 'application/json' },
      data: details
    })
      .then(result => {
        alert ("Thank You For Contacting Us");
        console.log("***I am in mailsent cnsole"+result)
        this.setDetails({
          ...details, mailSent: true
        })
      })
      .catch(error => {
        console.log(error.response)
           });
    ContactUs(details);
  };
  return (
    <div className="contactus">
          <div className="outer">
        <div className="inner">
  
      <form ref={form}>
      <h3>Contact Us</h3>
      <div className="form-group">
        <label>First Name</label>
        <input
         className="form-control" 
          type="text"
          name="fname"
          placeholder="Enter your First Name..."
          onChange={(e) => setDetails({ ...details, fname: e.target.value })}
          value={details.fname}
          required
        />
        </div>   <div className="form-group">

        <label>Last Name</label>
        <input
        className="form-control" 
          type="text"
          name ="lname"
          placeholder="Enter your Last Name..."
          onChange={(e) => setDetails({ ...details, lname: e.target.value })}
          value={details.lname}
          required
        />
        </div>
        <div className="form-group">
        <label>Phone number</label>
        <input
          className="form-control" 
          type="number"
          name = "phone"
          placeholder="Enter your number..."
          onChange={(e) => setDetails({ ...details, phone: e.target.value })}
          value={details.phone}
          required
        />
        </div>
        <div className="form-group">
        <label>Email</label>
        <input
         className="form-control" 
          type="email"
          name="email"
          placeholder="Enter your email..."
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
          value={details.email}
          required
        />
        </div>
        <div className="form-group">
        <label>Query</label>
        <textarea
          className="form-control" 
          type="text"
          name = "query"
          placeholder="Enter your query..."
          onChange={(e) => setDetails({ ...details, query: e.target.value })}
          value={details.query}
          required
        />
        </div>
        <button onClick={submitHandler} className="btn btn-dark btn-lg btn-block" style={{marginTop:"10px", width:"100%"}}>
          Submit
        </button>
        <div>
       
          {details.mailSent &&
       <div>Thank you for contacting us.</div>
         }
      </div>
      </form>
      </div></div>
    </div>
  );
}
