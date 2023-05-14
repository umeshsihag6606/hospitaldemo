import { BaseUrl } from "./BaseUrl";

const Addservice=(data)=>BaseUrl.post("pannel/services",data)
const listService=()=>BaseUrl.get("pannel/services")
const AddServiceType=(data)=>BaseUrl.post("panel/service/types",data)
const getServiceType=()=>BaseUrl.get("panel/service/types")
 

export default{
    Addservice,listService,getServiceType,AddServiceType
}

