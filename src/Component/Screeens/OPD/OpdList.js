import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Provider } from '../../ContextApi/Context'
 

export default function OpdList() {
    const context=useContext(Provider);
    useEffect(() => {
      context.getOpdList();
    }, [])
    
  return (
    <>
    <div class="container">
      <div class="row">  
     <h1>Opd List</h1>
     
   <div style={{overflow:"auto"}} >
        <table  class="table table-hover ">
            <thead class="thead-inverse">
                <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>dob</th>
                    <th>Doctor</th>
                    <th>matrialStatus</th>
                    <th>date</th>
                    <th>mobileNumber</th>
                    <th>service</th>
                    <th>Email</th>
                    <th>Bp</th>
                    <th>Address</th>
                    <th>disCount</th>

                    <th>weight</th>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Valid up to Date</th>
         

                </tr>
                </thead>
                <tbody>
                   {
                    context.opd.map((item, index)=>(
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.gender}</td>
                            <td>{item.dob}</td>
                            <td>{item.employeeName}</td>
                            <td>{item.dob}</td>
                            <td>{item.date}</td>
                            <td>{item.mobileNumber}</td>
                            <td>{item.serviceName}</td>
                            <td>{item.emailID}</td>
                            <td>{item.bp}</td>
                            <td>{item.address}</td>
                            <td>{item.disCount}</td>
                            <td>{item.weight}</td>
                            <td>{item.city}</td>
                            <td>{item.temperature}</td>
                            <td>{item.validUptoDate}</td>     
                        </tr>
                    ))
                   }
                   
                </tbody>
        </table>
        </div>
        </div>
    </div>
        <Link to="/opd" className='btn btn-primary'> Go to Add Opd</Link>
    </>
  )
}
