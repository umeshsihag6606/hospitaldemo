import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Context, Provider } from '../../ContextApi/Context'

export default function EmployeeListWork() {
    const context=useContext(Provider);
    useEffect(() => {
       context.EmployeeList1(); 
    }, [])
    
  return (
    <div style={{overflow:"auto"}}>
    <h1>employeeList</h1>
    <table class="table table-bordered table-inverse table-responsive" >
        <thead class="thead-inverse">
            <tr>
                <th>firstName</th>
                <th>lastName</th>
                <th>mobileNumber</th>
                <th>emailId</th>
                <th>alternatMolbileNumber</th>
                <th>gender</th>
                <th>employeeTypeName</th>
                <th>hospitalName</th>
                <th>dateOfJoining</th>
                <th>createdDate</th>
                <th>createrID</th>
                <th>userName</th>
                <th>password</th>
                <th>Action</th>

           


            </tr>
            </thead>
            <tbody>
             
               { 
               
                context.employeeList.map((item, index)=>(

                <tr key={index}>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.mobileNumber}</td>
                    <td>{item.emailId}</td>
                    <td>{item.alternatMolbileNumber}</td>
                    <td>{item.gender}</td>
                    <td>{item.employeeTypeName}</td>
                    <td>{item.hospitalName}</td>
                    <td>{item.dateOfJoining}</td>
                    <td>{item.createdDate}</td>
                    <td>{item.createrID}</td>
                    <td>{item.userName}</td>
                    <td>{item.password}</td>
                    <td><Link to={"/employee/edit/"+item.id} className='btn btn-success' >Edit</Link></td>
                </tr>
                ))
               }
            </tbody>
    </table>
    <Link to="/employee/addemployee">Got Add Employee</Link>
    </div>
  )
}
