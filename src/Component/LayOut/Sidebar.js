import React from 'react'
import { Link } from 'react-router-dom'


export default function Sidebar() {
  // const SideBarMenu=({item})=>{
  //     <li class="nav-item">
  //     <a class="nav-link" href="index.html">
  //       <i class="mdi mdi-grid-large menu-icon"></i>
  //       <span class="menu-title">{item}</span>
  //     </a>
  //   </li>
  // }
  return (
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
      <ul class="nav">
        <li class="nav-item">
          <Link class="nav-link" to={'/dash'}>

            <i class="mdi mdi-grid-large menu-icon"></i>
            <span class="menu-title">Dashboard</span>
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={'/opdlist'}>

            <i class="mdi mdi-grid-large menu-icon"></i>
            <span class="menu-title">OPDList</span>
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={'/opdreport'}>

            <i class="mdi mdi-grid-large menu-icon"></i>
            <span class="menu-title">OPD REPORT</span>
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={'/service'}>

            <i class="mdi mdi-grid-large menu-icon"></i>
            <span class="menu-title">Services</span>
          </Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to={'/addServiceType'}>

            <i class="mdi mdi-grid-large menu-icon"></i>
            <span class="menu-title">ServicesType</span>
          </Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to={"/ops"}>

            <i class="mdi mdi-grid-large menu-icon"></i>
            <span class="menu-title">OPD</span>
          </Link>
        </li>





        <li class="nav-item">
          <Link class="nav-link" to={'/employee/addemployee'}>
            <i class="mdi mdi-grid-large menu-icon"></i>
            <span class="menu-title">Employee</span>
          </Link>
        </li>



      </ul>
    </nav>

  )
}
