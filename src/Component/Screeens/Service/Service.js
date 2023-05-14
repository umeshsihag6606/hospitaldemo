import { Formik } from 'formik'
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Provider } from '../../ContextApi/Context'

export default function Service() {
    const context = useContext(Provider)

    useEffect(() => {
     context.getServiceType1();
    
       
    }, [])
    
    return (
        <> 
 <section class="vh-100 gradient-custom" className='color'>
                <div class="container py-5 h-100">
                    <div class="row justify-content-center align-items-center h-100">
                        <div class="col-12 col-lg-9 col-xl-7">
                            <div class="card shadow-2-strong card-registration" style={{ borderRadius: "15px;" }}>
                                <div class="card-body p-4 p-md-5">
                                    <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Add Services</h3>

                                    <Formik
                                    enableReinitialize
                                        initialValues={
                                            {
                                                serviceTypeID:"",
                                                serviceName: "",
                                                isDisCountable: "",
                                                hospitalID:1,
                                                amount: "",
                                                creterDate:"",
                                                validDate: "",
                                                creatorID:context.userid,     
                                            }

                                        }
                                        onSubmit={(values) => {
                                            context.AddService(values)


                                            alert(" buton  Submit is working");
                                        }}>{({
                                            values,
                                            handleBlur,
                                            handleSubmit,
                                            handleChange,
                                            isSubmitting,
                                        }) => (

                                            <form onSubmit={handleSubmit}>

                                                <div class="row">
                                                    <div class="col-md-6 mb-4">

                                                        <div class="form-outline">
                                                            <label class="form-label" for="firstName"> Name</label>
                                                            <input type="text" id="firstName" class="form-control form-control-lg"
                                                                name='serviceName'
                                                            
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.serviceName}
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
                                                </div>


                                                <div class="row">

                                                     
                                                        
                                                    <div class="col-md-6 mb-4" >
                                                            <input type="datetime-local" id="validDay"
                                                                name='creterDate'
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.creterDate}
                                                            />
                                                            <label class="form-label" for="validDay"> CreateDate</label>
                                                        </div>

                                                        <div class="col-md-6 mb-4" >
                                                            <input type="date" id="phoneNumber"
                                                                name='validDate'
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.validDate}
                                                            />
                                                            <label class="form-label" > ValidDate</label>
                                                        </div>
                                                        <div class="col-md-6 mb-4" >
                                                            <input type="text" id="creatorID"
                                                                name='creatorID'
                                                                 
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.creatorID}
                                                                />
                                                            <label class="form-label" > CreatorId</label>
                                                        </div>
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

                                                <div class="row">
                                                    
                                                        <div class="col-md-6 mb-4" >

                                                            <div >
                                                                <input type="text" id="isDisCountable" class="form-control form-control-lg"
                                                                      name='isDisCountable'
                                                                      onChange={handleChange}
                                                                      defaultValue="no"
                                                                      onBlur={handleBlur}
                                                                      value={values.isDisCountable} />
                                                                  
                                                                <label class="form-label" for="isDisCountable" >isDisCountable</label>
                                                              
                                                            </div>

                                                        </div>

                                                        <div class="col-md-6 mb-4">
                                                            <label for="birthdayDate" class="form-label">ServiceTypeID</label>
                                                            {
                                                                console.log("abcd",context.service)
                                                            }
                                                            <select  class="form-control form-control-lg"
                                                                name='serviceTypeID'
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.serviceTypeID} >
                                                                    {
                                                                        context.servicetypeList.map((item)=>(
    
                                                                            <option value={item.id}>{item.name}</option>
                                                                        ))
                                                                    }
                                                                    </select>
 
                                                        </div>

 

                                                </div>


                                                <div class="mt-4 pt-2">
                                                    <button className='btn btn-primary' type='submit'>Submit</button>
                                                    <Link to="/serviceList">Go TO List</Link>
                                                </div>

                                            </form>
                                        )}
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
