import React, { useContext, useEffect } from 'react'
import { Formik } from 'formik';
import { Provider } from '../../ContextApi/Context';
import { Link } from 'react-router-dom';

export default function ServiceType() {
    const context =useContext(Provider);
    useEffect(() => {
      context.getServiceType1();
    }, [])
    
    return (<div className='style'>
        <h1>Add ServiceType</h1>

        <div>
            <Formik
                initialValues={
                    {
                        name: ""
                    }
                }
                onSubmit={async (values) => {
                    await context.addServiceType(values)
                    alert("Is Submit")
                    }
                }
            >
                {({
                    values,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    isSubmitting
                }) => (
                    <form onSubmit={handleSubmit} >
                        <div>
                            <label className='form-lable'>ServiceTypeName</label>
                            <input type="text"
                            name='name'
                            placeholder='please enter sirvce Type'
                            className='form-control'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.name} 
                             />

 
                            {/* <input
                            type="text"
                                className='form-control'
                                placeholder='please enter sirvce Type'
                            
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.name}/> */}
                        </div>
                        <button type='submit' className='btn btn-primary' >Submit</button>

                        <Link to="/ServiceTypelist">Go to ServiceType List</Link>
                    </form>
                )}
            </Formik>
        </div>
    </div>
    )
}
