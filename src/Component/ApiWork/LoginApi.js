import { BaseUrl } from "./BaseUrl"

 

 const login=(data)=>BaseUrl.post("/login/checklogin",data);

 export
 {
    login
 }
 