import React, { useState, useEffect} from 'react'

const IncidentData = () =>{
    const [item, setItem] = useState([]);
    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/dashboardIncident")
        .then(res => res.json())
        .then(
            (result)=>{
                console.log('Incident',result.incident)
                setItem(result.incident)
            }
        )
    },[])
    return (
        <div className="row">
            {/* <div className="d_flex my-4, text-uppercase">
                <h1>Fetching User Details from user_details table in MySQL lunamar database</h1>
            </div> */}
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>INCIDENT REPORTED</th>
                        <th>OWNERID</th>
                        <th>FIRST NAME</th>
                        <th>LAST NAME</th>
                    </tr>

           
                </thead>
                <tbody>
                {
                        item.map(item =>(
                           
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.incident}</td>
                                <td>{item.empid}</td>
                                <td>{item.firstname}</td>
                                <td>{item.lastname}</td>
                            </tr>
                        )
                        )
                    }
                </tbody>
            </table>
        </div>
    )
  
}

export default IncidentData