import "./VisitorHome.css";
import React, {useState}  from "react";
import axios from "axios";
import Alert from 'react-bootstrap/Alert'

export default function VisitGarden() {
  const [details ,setDetails] = useState({gname:"", firstName:"",lastName:"",msg:""});
  const [success ,setSuccess] = useState(false)
  const VisitGarden = details=>{
    if(details.gname != "" &&  details.firstName !="" &&  details.lastName !="" && details.msg !="" ){
        console.log("data can be sent from frontend");
        //history.push("/manager_home");            
     } 
      
    else{
      alert("Invalid/Missing Details")
    }
}
  const submitHandler = e =>{
    e.preventDefault();
    const obj ={
      gname:details.gname,
      firstName:details.firstName,
      lastName:details.lastName,
      msg:details.msg
     
    };
console.log(obj);
axios.post('http://127.0.0.1:8000/api/visitorGardenInquiry',obj)
.then(res=> {console.log(res.data); setSuccess(true)})
.catch(error => {
  console.log(error.response)
     });
VisitGarden(details);
//window.location.reload();
   

}
  return (





<div className="inquiry">
<div className="outer">
  <div className="inner">
    <form >

{ success && <Alert variant="success">
    Visit Request Submitted!
</Alert> }

      <h3>Visit Garden</h3>
      <div className="form-group">
        <label>Garden Name</label>
        <input class="form-control" type="text" name="gname" onChange={e=>setDetails({...details, gname: e.target.value})} value={details.gname} required/>
      </div>

      <div className="form-group">
        <label>First Name</label>
        <input class="form-control"type="text" name="firstName" onChange={e=>setDetails({...details, firstName: e.target.value})} value={details.firstName} required/>
      </div>

      <div className="form-group">
        <label>Last Name</label>
        <input class="form-control"type="text" name="lastName" onChange={e=>setDetails({...details, lastName: e.target.value})} value={details.lastName} required/>
      </div>

      <div className="form-group">
        <label>Query</label>
        <input class="form-control" type="text" name="msg" onChange={e=>setDetails({...details, msg: e.target.value})} value={details.msg} required/>
      </div>




      <button onClick={submitHandler} className="btn btn-dark btn-lg btn-block" style={{marginTop:"10px", width:"100%"}}>SUBMIT</button>
    </form>
  </div>
  </div>
  </div>





);
}