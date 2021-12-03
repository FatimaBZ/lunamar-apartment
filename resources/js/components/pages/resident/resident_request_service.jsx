import "./residentHome.css";

import axios from "axios";

import React, { useState } from "react";

import { useRef } from "react";

import Alert from "react-bootstrap/Alert";

export default function ResidentRequestService() {
  const form = useRef();

  const [details, setDetails] = useState({
    apartmentNumber: "",
    serviceName: "",
    incident: "",
  });

  const [success, setSuccess] = useState(false);

  const RequestService = (details) => {
    console.log("hello");

    if (details.apartmentName != "" && details.serviceName != "") {
      console.log("You can enter data");
    } else {
      alert("Please fill the data");
    }
  };

  const requestSubmitted = (e) => {
    console.log("hello");

    e.preventDefault();

    console.log("hello");

    const obj = {
      apartmentNumber: details.apartmentNumber,

      serviceName: details.serviceName,

      incident: details.incident,
    };
    console.log(obj);

    // axios.post('http://localhost:8888/reactProject/residentIncident.php',obj.incident,obj.apartmentName)

    // .then(res=> console.log(res.data))

    // .catch(error => {

    // alert("Service request failed. Try again")

    // console.log(error.response)

    // });

    axios
      .post("http://127.0.0.1:8000/api/storeServiceIncident", obj)

      .then((res) => {
        console.log(res.data);
        setSuccess(true);
      })

      .catch((error) => {
        alert("Service request failed. Try again");

        console.log(error.response);
      });

    RequestService(details);
  };
  return (
    <div className="inquiry">
      <div className="outer">
        <div className="inner">
          <form ref={form}>
            {success && (
              <Alert variant="success">Service Request Submitted!</Alert>
            )}
            <h3>Request A Service</h3>

            <div className="form-group">
              <label>Apartment</label>

              <input
                className="form-control"
                type="number"
                id="apartment-number"
                name="apartmentNumber"
                onChange={(e) =>
                  setDetails({ ...details, apartmentNumber: e.target.value })
                }
                value={details.apartmentNumber}
                required
              />
            </div>

            <div className="form-group">
              <label>Service Needed</label>

              <input
                className="form-control"
                type="text"
                id="service-req"
                name="serviceName"
                onChange={(e) =>
                  setDetails({ ...details, serviceName: e.target.value })
                }
                value={details.serviceName}
                required
              />
            </div>
            <div className="form-group">
              <label>Any Incident You Want To Report?</label>

              <textarea
                class="form-control"
                id="message"
                name="incident"
                rows="8"
                onChange={(e) =>
                  setDetails({ ...details, incident: e.target.value })
                }
                value={details.incident}
              ></textarea>
            </div>

            <button
              onClick={requestSubmitted}
              className="btn btn-dark btn-lg btn-block"
              style={{ marginTop: "10px", width: "100%" }}
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
