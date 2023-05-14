import { BaseUrl } from "./BaseUrl";

const Opd=(data)=> BaseUrl.post("pannel/opdPatients",data)
const opdList=()=>BaseUrl.get("pannel/OpdPatients")
const GetEmployee=()=>BaseUrl.get("pannel/employees")


export default {
    Opd,opdList,GetEmployee
}

