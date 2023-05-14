
import axios from 'axios';
import { Formik } from 'formik';
import React, { useContext, useEffect, useState } from 'react'
import { Link,  redirect,  useNavigate,  useParams } from 'react-router-dom';
import { BaseUrl } from '../../ApiWork/BaseUrl';
import { Provider } from '../../ContextApi/Context';

export default function EditEmployee() {
    const context = useContext(Provider)
    const navigate=useNavigate();
    const[employee,setEmployee]=useState([]);
    const {id}=useParams();

useEffect(() => {
    context.GetEmployeeType();
    getEmployee(id)
}, [])
console.log("employee",employee)


const getEmployee= async(id)=>{
    const resp =await BaseUrl.get("pannel/employees/"+id)
    if(resp.status==200)
    {
        
        setEmployee(resp.data);   

    }
    else{
        alert("there is an error in your program")
    }
}

const editEmployeeLogins=async(data)=>{
    const resp=await BaseUrl.put(`employees/${id}`,data)
    if(resp.status==200)
    {
      navigate('/employee')
    }
    else
    {
        console.log("error ",resp)
        alert("there is an error in your program")
    }
}
const editEmployee=async(data)=>{
    const resp=await axios.put(`https://localhost:7053/api/pannel/employees/${id}`,data)
 
    if(resp.status==200)
    {
      navigate('/employee')
    }
    else
    {
        console.log("error ",resp)
        alert("there is an error in your program")
    }
}
  return (
    <>
      <h1>EditEmployee</h1>

        <Formik
           
           enableReinitialize
            initialValues={
                 {
                    id:employee.id,
                    firstName:employee.firstName,
                    lastName: employee.lastName,
                    mobileNumber: employee.mobileNumber,
                    emailId: employee.emailId ,
                    alternatMolbileNumber: employee.alternatMolbileNumber,
                    createrID: context.userid,
                    gender: employee.gender,
                    employeeTypeID: employee.employeeTypeID,
                    hospitalID: "1",
                    dateOfJoining: employee.dateOfJoining,
                    createdDate: employee.createdDate,
                    userName: employee.userName,
                    password: employee.password, 
                 }          
            }
            onSubmit={ (values) => {
                   editEmployee(values);
                  editEmployeeLogins(values);
                alert("Is Submit");
            }}>
            {({
                values,
                handleBlur,
                handleChange,
                handleSubmit,
                isSubmitting,

            }) => (
                <form onSubmit={handleSubmit}>
                    <>
                        <div class="container">



                            <div class="row">
                                <div class="col-md-6 mb-4">

                                    <div class="form-outline">
                                        <label class="form-label" for="firstName"> FirstName</label>
                                        <input type="text" id="firstName" class="form-control form-control-lg"
                                            name='firstName'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.firstName}
                                        />
                                    </div>

                                </div>
                                <div class="col-md-6 mb-4">

                                    <div class="form-outline">
                                        <label class="form-label" for="lastName">lastName</label>
                                        <input type="text" id="lastName" class="form-control form-control-lg"
                                            name='lastName'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.lastName}
                                        />
                                    </div>

                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 mb-4">

                                    <div class="form-outline">
                                        <label class="form-label" for="firstName"> MobileNumber</label>
                                        <input type="number" id="firstName" class="form-control form-control-lg"
                                            name='mobileNumber'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.mobileNumber}
                                        />
                                    </div>

                                </div>
                                <div class="col-md-6 mb-4">

                                    <div class="form-outline">
                                        <label class="form-label" for="lastName">EmployeeType Name  </label>
                                        {<select  id="lastName" class="form-control form-control-lg"
                                            name='employeeTypeID'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.employeeTypeID}
                                        >
                                            {
                                              context.employeetype.map((item) => (
                                                     <option value={item.id}>{item.name}</option>


                                                ))


                                            }
                                        </select>}
                                    </div>

                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 mb-4">

                                    <div class="form-outline">
                                        <label class="form-label" for="firstName"> emailId</label>
                                        <input type="text" id="firstName" class="form-control form-control-lg"
                                            name='emailId'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.emailId}
                                        />
                                    </div>

                                </div>
                                <div class="col-md-6 mb-4">

                                    <div class="form-outline">
                                        {console.log("values.dateOfJoining",values.dateOfJoining)}
                                        <label class="form-label" for="lastName">Date Of joinning</label>
                                       
                                          <input type="datetime-local" id="lastName" class="form-control form-control-lg"
                                            name='dateOfJoining'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.dateOfJoining}
                                        />

                                    </div>

                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 mb-4">

                                    <div class="form-outline">
                                        <label class="form-label" for="firstName"> alternatMolbileNumber</label>
                                        <input type="number" id="firstName" class="form-control form-control-lg"
                                            name='alternatMolbileNumber'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.alternatMolbileNumber}
                                        />
                                    </div>

                                </div>
                                <div class="col-md-6 mb-4">

                                    <div class="form-outline">
                                        <label class="form-label" for="firstName"> hospitalID</label>
                                        <input type="number" id="firstName" class="form-control form-control-lg"
                                            name='hospitalID'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.hospitalID}
                                        />
                                    </div>

                                </div>

                            </div>
                            <div class="row">
                                <div class="col-md-6 mb-4">

                                    <div class="form-outline">
                                        <label class="form-label" for="firstName"> createrID</label>
                                        <input  id="firstName" class="form-control form-control-lg"
                                            name='createrID'
                                            
                                            onBlur={handleBlur}
                                            value={values.createrID}
                                        />
                                    </div>

                                </div>
                                <div class="col-md-6 mb-4">

                                    <div class="form-outline">
                                        <label class="form-label" for="lastName">gender</label>
                                        <input type="text" id="lastName" class="form-control form-control-lg"
                                            name='gender'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.gender}
                                        />
                                    </div>

                                </div>
                            </div>
                            <div class="row">

                                <div class="col-md-6 mb-4">

                                    
                                        <label class="form-label" for="lastName">createdDate</label>
                                        <input type="datetime-local" id="lastName" class="form-control form-control-lg"
                                            name='createdDate'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.createdDate}
                                        />
                                    


                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 mb-4">

                                    <div class="form-outline">
                                        <label class="form-label" for="firstName"> userName</label>
                                        <input type="text " id="firstName" class="form-control form-control-lg"
                                            name='userName'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.userName}
                                        />
                                    </div>

                                </div>
                                <div class="col-md-6 mb-4">

                                    <div class="form-outline">
                                        <label class="form-label" for="lastName">password</label>
                                        <input type="text" id="lastName" class="form-control form-control-lg"
                                            name='password'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                        />
                                    </div>


                                </div>
                            </div>

                            <button type='submit' className='btn btn-primary'>Submit</button>
                        </div>
                        

                        <Link to="/employee">Got to employee list</Link>

                    </>
                </form>
            )



            }

        </Formik>
      </>
  )
}
