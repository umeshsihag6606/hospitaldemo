import React, { useContext, useEffect } from 'react'
import { Formik } from "formik"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Provider } from '../ContextApi/Context';


export default function LoginPage() {
  const context = useContext(Provider);
  const navigate = useNavigate();

 

useEffect(() => {
      checkUser();  
  }, [])
  
  const checkUser = () => {
      if (context.userid != null ) {
          navigate("/dash")
      }
      // else if(!localStorage.getItem("token"))
      //   {
      //    navigate("/login")
      // }
      // else{
      //   console.log("hello");
      // }
      
  }


  return (
    <div>
      <section class="vh-100" style={{ backgroundColor: "#9A616D" }}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-xl-10">
              <div class="card" style={{ borderRadius: " 1rem" }}>
                <div class="row g-0">
                  <div class="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form" class="img-fluid" style={{ borderRadius: "1rem 0 0 1rem" }} />
                  </div>
                  <div class="col-md-6 col-lg-7 d-flex align-items-center">
                    <div class="card-body p-4 p-lg-5 text-black">


                      <Formik
                        initialValues={{
                          userName: "",
                          password: ""
                        }}

                        onSubmit={async (values) => {
                          alert("InSubmit")
                          await context.login1(values.userName,values.password)

                        }}
                      >
                        {({
                          values,
                          handleBlur,
                          handleChange,
                          handleSubmit,
                          isSubmitting
                        }) => (



                          <form onSubmit={handleSubmit}>

                            <div class="d-flex align-items-center mb-3 pb-1">
                              <i class="fas fa-cubes fa-2x me-3" style={{ color: "#ff6219" }}></i>
                              <span class="h1 fw-bold mb-0">Login</span>
                            </div>

                            <h5 class="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Sign into your account</h5>

                            <div class="form-outline mb-4">
                              <input type="text" id="form2Example17" class="form-control form-control-lg"
                                placeholder='Please enter User Name'
                                name='userName'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                onSubmit={handleSubmit}
                                value={values.userName}
                              />
                              <label class="form-label" for="form2Example17">UserCode</label>
                            </div>

                            <div class="form-outline mb-4">
                              <input type="text" id="form2Example27" class="form-control form-control-lg"

                                name='password'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                onSubmit={handleSubmit}
                                value={values.password}

                              />
                              <label class="form-label" for="form2Example27">Password</label>
                            </div>

                            <div class="pt-1 mb-4">
                              <button class="btn btn-dark btn-lg btn-block" type="submit"  >Login</button>
                            </div>

                            <Link to={"/emp/forget"}>Forgot password?</Link>
                            <p class="mb-5 pb-lg-2" style={{ color: "#393f81" }}>Don't have an account?

                            </p>

                            <a href="#!" class="small text-muted">Terms of use.</a>
                            <a href="#!" class="small text-muted">Privacy policy</a>
                          </form>



                        )}

                      </Formik>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

    </div>
  )
}
