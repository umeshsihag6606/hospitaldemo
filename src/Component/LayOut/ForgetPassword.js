import React from 'react'
import { Link } from 'react-router-dom'

export default function ForgetPassword() {
    return (
        <div class="container">



            {/* <div class="container">
	 
		<div class="col-md-6 col-md-offset-4">
            <div>
              <div class="panel-body">
                <div class="text-center">
                  <h3><i class="fa fa-lock fa-4x"></i></h3>
                  <h2 class="text-center">Forgot Password?</h2>
                  <p>You can reset your password here.</p>
                  <div class="panel-body">
    
                    <form id="register-form" role="form" autocomplete="off" class="form" method="post">
    
                      <div class="form-group">
                        <div class="input-group">
                          <span class="input-group-addon"><i class="glyphicon glyphicon-envelope color-blue"></i></span>
                          <input id="email" name="email" placeholder="email address" class="form-control"  type="email"/>
                        </div>
                      </div>
                      <div class="form-group">
                        <input name="recover-submit" class="btn btn-lg btn-primary btn-block" value="Reset Password" type="submit"/>
                      </div>
                      
                      <input type="hidden" class="hide" name="token" id="token" value=""/> 
                    </form>
    
                  </div>
                </div>
              </div>
            </div>
          </div>
 
</div> */}

            <div class="card shadow">
                {/* <!-- Card body --> */}
                <div class="card-body p-6">
                    <div class="mb-5">
                        <a href="../index.html"><img src="../assets/images/brand/logo/logo-icon.svg" class="mb-4" alt="" /></a>
                        <h1 class="mb-1 fw-bold">Forgot Password</h1>
                        <p>Fill the form to reset your password.</p>
                    </div>
                    {/* <!-- Form --> */}
                    <form>
                        {/* <!-- Email --> */}
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" id="email" class="form-control" name="email" placeholder="Enter Your Email " required="" />
                        </div>
                        {/* <!-- Button --> */}
                        <div class="mb-3 d-grid">
                            <button type="submit" class="btn btn-primary">
                                Send Resest Link
                            </button>
                        </div>
                        <span>Return to  <Link to="/login">sign in</Link></span>
                    </form>
                </div>
            </div>



        </div>
    )
}
