import { BaseUrl } from "./BaseUrl";

   
   const  EmployeeList=()=>BaseUrl.get("pannel/employees");
   const AddEmployee =(data)=>BaseUrl.post("pannel/employees",data)
   const EmployeeType=()=>BaseUrl.get("panel/employeeTypes")
   export default {
    EmployeeList,EmployeeType,AddEmployee
   } 