import React, { Children, useContext, useEffect } from 'react'
import { Outlet, useFetcher, useLocation, useNavigate } from 'react-router-dom'
import { Provider } from '../ContextApi/Context'
  
import Topbar from '../Topbar'
import Footer from './Footer'
import Login from './Login'
import Sidebar from './Sidebar'

export default function Layout(props) {
    const context = useContext(Provider);
    const navigate = useNavigate();

    const location =useLocation();
    useEffect(() => {
        checkUser();
    }, [])

 const checkUser = () => {   
         if(context.userid == null ) {
            navigate("/login")
        } 
    }
    
    return (
        <>

            <div>

                <div class="container-scroller">
                    <Topbar />
                    <div class="container-fluid page-body-wrapper">
                        <Sidebar />
                        <div class="main-panel">
                            <div class="content-wrapper">
                                <Outlet />
                            </div>
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
