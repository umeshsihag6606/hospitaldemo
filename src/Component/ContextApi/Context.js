import React, { Component, createContext } from 'react'
import jwt_decode from "jwt-decode";
// import axios from "axios"
import { login } from '../ApiWork/LoginApi';
import OpdApi, { OpdLogin } from '../ApiWork/OpdApi';
import ServiceApi from '../ApiWork/ServiceApi';
import { BaseUrl } from '../ApiWork/BaseUrl';
import EmployeeLogin from '../ApiWork/EmployeeLogin';
import { Navigate } from 'react-router-dom';




const Provider = createContext();


class Context extends Component {

  constructor(props) {
    super(props)

    this.state = {
      employeeList:[],
      employeetype:[],
      service: [],
      opd: [],
      opdList: [],
      loading: false,
      userid: null,
      servicetypeList: [],
      // tokenrender: false,
    }
  }
  componentDidMount() {
    this.defaultFunction();
    console.log("logion id is",login)
  }


//-----DEFAULT FYNCTION---------------------------------------
  defaultFunction = async () => {
    const token = this.getUserLocalStorage();
    if (token) {
      BaseUrl.defaults.headers["Authorization"] = "Bearer " + token;
      await this.decodeToken(token);
    }

    this.setState({ loading: false });
    console.log("userid....", this.state.userid)
  }

   login1 = async (userName, password) => {
    const resp = await login({ userName: userName, password: password });

    if (resp.status == 200) {
      alert("login");
      console.log("token", resp.data)
      await this.decodeToken(resp.data.token);
       
      this.SteUserLocalStorage(resp.data.token);
      this.props.navigate("/dash")
      return true;
    }
    else if (userName == userName, password == password) {
      this.props.navigate("/dash")
      return true;
    }
    else {
      alert("there is an error in your api")
    }
  }
  SteUserLocalStorage = (token) => {
    localStorage.setItem("token", token);
  }
//-----GET LOCALSTORAGE-------------------------------
  getUserLocalStorage = (token) => {
    return localStorage.getItem("token");
  }

  // RemoveLocalStorage = () => { 
  //   //  localStorage.removeItem("token");
  //   //  this.setState({tokenrender:true})
  //   localStorage.clear();
  //    this.props.navigate("/login")
  // }


  handleLogout = () => {
      this.setState({userid:null});
      localStorage.clear();
       
      this.props.navigate("/login")
  }  
  
 




//-------------- DECODE TOKEN ----------------------------------------------
  decodeToken = (token) => {
    var decoded = jwt_decode(token);
    const userid = decoded.id;
    this.setState({ userid: userid})
    console.log('deocded token', userid.id)

  }
  AddService = async (data) => {
    const resp = await ServiceApi.Addservice(data);
    if (resp.status == 200) {
      alert("add service is calling in submit")

      console.log(resp.data);
      let token = this.decodeToken(resp.data.token);
      console.log(token);
    }
    else {
      alert("errro occured")
    }

  }

  listService1 = async () => {
    const resp = await ServiceApi.listService();
    if (resp.status == 200) {
      this.setState({
        service: resp.data

      });
      alert(" hello in submit")
      console.log(resp);
    }
    else {
      alert("api error");
    }
  }


  getOpdList = async () => {
    const resp = await OpdApi.opdList();
    if (resp.status == 200) {
      this.setState({ opd: resp.data });
      alert("Sucess")
    }
    else {
      alert("api cannot work proper");
    }
  }
  AddOpd = async (data) => {
    const resp = await OpdApi.Opd(data);

    if (resp.status == 200) {
      alert("In Sumbmit");
      console.log(resp.data);
       console.log(token);
      let token = this.decodeToken(resp.data.token)
    }
    else {
      console.log("there is an in correct value in your data");
      alert("there is an error in your api calling");
    }


  }
  GetEnployee = async () => {
    const resp = await OpdApi.GetEmployee();
    if(resp.status==200)
    {
      this.setState({opdList:resp.data});
    }

  }


  getServiceType1 = async () => {

    const resp = await ServiceApi.getServiceType();
    if (resp.status == 200) {
      this.setState({ servicetypeList: resp.data });
    }
    else {
      console.log("there is an error ", resp)
    }
  }

  addServiceType=async(data)=>{
  const resp=await ServiceApi.AddServiceType(data);
  if(resp.status==200)
  {
    alert("In Submit")
    let token=this.decodeToken(resp.data.token)
    console.log(token);
  }
  else{
    alert("there is an error in your api calling")
  }
  }



  //-----------------------employee  api work  --------------------

  EmployeeList1 =async ()=>{
    const resp=await EmployeeLogin.EmployeeList();
    if(resp.status==200)
    { 
      this.setState({employeeList:resp.data})
      console.log(resp.data)
   

    }
    else{
      alert("there is an error in your api calling ")
    }
  }
  GetEmployeeType=async ()=>{
    const resp=await EmployeeLogin.EmployeeType();
    if(resp.status==200)
    {
       
      this.setState({employeetype:resp.data})

    }
    else{
      alert("there is an error in your program")
    }
  }

  addEmployee1 =async(data)=>{  
     const resp=await EmployeeLogin.AddEmployee(data);

     if(resp.status==200)
     {
      alert(data)
      console.log(resp.data);
      let token = this.decodeToken(resp.data.token)
      console.log(token);
 
     }
     else{
      console.log("there is an in correct value in your data");
      alert("there is an error in your api calling");
     }
  }


  render() {
    return (

      <Provider.Provider value={{

        ...this.state,
        loginUser: this.loginUser,
        login1: this.login1,
        GetEnployee:this.GetEnployee,
        getServiceType1: this.getServiceType1,
        AddService: this.AddService,
        listService1: this.listService1,
        AddOpd: this.AddOpd,
        getOpdList: this.getOpdList,
        GetEmployeeType:this.GetEmployeeType,
        addEmployee1:this.addEmployee1,
        EmployeeList1:this.EmployeeList1,
        addServiceType:this.addServiceType,
        handleLogout: this.handleLogout,

      }}>
        {
          this.props.children
        }
{/* {this.state.tokenrender&&  <Navigate to="/login"/>} */}
      </Provider.Provider>
    )
  }
}

export {
  Context, Provider
}