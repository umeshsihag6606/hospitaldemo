import { Formik } from 'formik'
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Provider } from '../../ContextApi/Context'

export default function AddOPD() {
    const context = useContext(Provider)
    useEffect(() => {
        context.GetEnployee();
        context.getServiceType1();
    }, [])

    return (
        <div className='opd'>
            <h1> OPD FORM </h1>
            <Formik
                initialValues={
                    {
                        name: "",
                        date: "",
                        validUptoDate: "",
                        employeeID: 1,
                        serviceID: "",
                        opertorID: context.userid,
                        description: "",
                        weight: "",
                        bp: "",
                        temperature: "",
                        amount: "",
                        disCount: "yes",
                        gender: "",
                        dob: "",
                        matrialStatus: "",
                        mobileNumber: "",
                        emailID: "",
                        address: "",
                        city: ""
                    }

                }
                onSubmit={async(values) => {
                   await context.AddOpd(values)
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
                                            <label class="form-label" for="firstName"> Name</label>
                                            <input type="text" id="firstName" class="form-control form-control-lg"
                                                name='name'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.name}
                                            />
                                        </div>

                                    </div>
                                    <div class="col-md-6 mb-4">

                                        <div class="form-outline">
                                            <label class="form-label" for="lastName">Gender</label>
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

                                        <div class="form-outline">
                                            <label class="form-label" for="firstName"> dob</label>
                                            <input type="date" id="firstName" class="form-control form-control-lg"
                                                name='dob'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.dob}
                                            />
                                        </div>

                                    </div>
                                    <div class="col-md-6 mb-4">

                                        <div class="form-outline">
                                            <label class="form-label" for="lastName">Doctor </label>



                                            {<select type='number' id="lastName" class="form-control form-control-lg"
                                                name='employeeID'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.employeeID}
                                            >
                                                {
                                                    context.opdList.map((item) => (
                                                        <option value={item.id}>{item.firstName+""+item.lastName}</option>


                                                    ))


                                                }
                                            </select>}
                                        </div>

                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 mb-4">

                                        <div class="form-outline">
                                            <label class="form-label" for="firstName"> matrialStatus</label>
                                            <input type="text" id="firstName" class="form-control form-control-lg"
                                                name='matrialStatus'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.matrialStatus}
                                            />
                                        </div>

                                    </div>
                                    <div class="col-md-6 mb-4">

                                        <div class="form-outline">
                                            <label class="form-label" for="lastName">date</label>
                                            <input type="date" id="lastName" class="form-control form-control-lg"
                                                name='date'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.date}
                                            />
                                        </div>

                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 mb-4">

                                        <div class="form-outline">
                                            <label class="form-label" for="firstName"> mobileNumber</label>
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
                                            <label class="form-label" for="lastName">service</label>
                                            <select  id="lastName" class="form-control form-control-lg"
                                                name='serviceID'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.serviceID}  
                                            >
                                                {
                                                    context.servicetypeList.map((item) => (

                                                        <option value={item.id}>{item.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>

                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 mb-4">

                                        <div class="form-outline">
                                            <label class="form-label" for="firstName"> Email</label>
                                            <input type="text" id="firstName" class="form-control form-control-lg"
                                                name='emailID'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.emailID}
                                            />
                                        </div>

                                    </div>
                                    <div class="col-md-6 mb-4">

                                        <div class="form-outline">
                                            <label class="form-label" for="lastName">Bp</label>
                                            <input type="number" id="lastName" class="form-control form-control-lg"
                                                name='bp'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.bp}
                                            />
                                        </div>

                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 mb-4">

                                        <div class="form-outline">
                                            <label class="form-label" for="firstName"> Address</label>
                                            <input type="text" id="firstName" class="form-control form-control-lg"
                                                name='address'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.address}
                                            />
                                        </div>

                                    </div>
                                    <div class="col-md-6 mb-4">

                                        <div class="form-outline">
                                            <label class="form-label" for="lastName">weight</label>
                                            <input type="text" id="lastName" class="form-control form-control-lg"
                                                name='weight'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.weight}
                                            />
                                        </div>


                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 mb-4">

                                        <div class="form-outline">
                                            <label class="form-label" for="firstName"> City</label>
                                            <input type="text" id="firstName" class="form-control form-control-lg"
                                                name='city'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.city}
                                            />
                                        </div>

                                    </div>
                                    <div class="col-md-6 mb-4">

                                        <div class="form-outline">
                                            <label class="form-label" for="lastName">Temperature</label>
                                            <input type="text" id="lastName" class="form-control form-control-lg"
                                                name='temperature'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.temperature}
                                            />
                                        </div>

                                    </div>
                                </div>
                                {/* <div class="row">
                                <div class="col-md-6 mb-4">

                                    <div class="form-outline">
                                        <label class="form-label" for="firstName"> City</label>
                                        <input type="text" id="firstName" class="form-control form-control-lg"
                                            name='mobileNumber'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.mobileNumber}
                                        />
                                        
                                    </div>
                                    <div class="form-outline my-3">
                                        <label class="form-label" for="lastName">Temperature</label>
                                        <input type="number" id="lastName" class="form-control form-control-lg"
                                            name='serviceID'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.serviceID}
                                        />
                                    </div>

                                </div>
                                <div class="col-md-6 mb-4">

                                    <div class="form-outline">
                                      
                                    </div>
                                </div>
                            </div> */}
                               <div class="row">
                                    <div class="col-md-6 mb-4">

                                        <div class="form-outline">
                                            <label class="form-label" for="firstName"> ISDiscountable</label>
                                            <input type="text" id="firstName" class="form-control form-control-lg"
                                                name='disCount'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.disCount}
                                            />
                                        </div>

                                    </div>
                                    <div class="col-md-6 mb-4">

                                        <div class="form-outline">
                                            <label class="form-label" for="lastName">description</label>
                                            <input type="text" id="lastName" class="form-control form-control-lg"
                                                name='description'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.description}
                                            />
                                        </div>

                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 mb-4">

                                        <div class="form-outline">
                                            <label class="form-label" for="firstName"> Valid up to Date</label>
                                            <input type="date" id="firstName" class="form-control form-control-lg"
                                                name='validUptoDate'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.validUptoDate}
                                            />
                                        </div>
                                        <div class="form-outline">
                                            <label class="form-label" for="firstName">  CreaterId</label>
                                            <input  id="firstName" class="form-control form-control-lg"
                                                name='opertorID'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.opertorID}
                                            />
                                        </div>

                                    </div>
                                    <div class="col-md-6 mb-4">

                                        <div class="form-outline">
                                            <label class="form-label" for="lastName">Amount</label>
                                            <input type="number" id="lastName" class="form-control form-control-lg"
                                                name='amount'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.amount}
                                            />
                                        </div>

                                    </div>
                                    
                                        <button type='submit' className='btn btn-primary'>Submit</button>
                                </div>
                            </div>

                            <Link to="/opd/opdlist">Got to Opd list</Link>

                        </>
                    </form>
                )



                }

            </Formik>
        </div>
    )
}
