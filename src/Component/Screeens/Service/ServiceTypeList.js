import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Provider } from '../../ContextApi/Context'

export default function ServiceTypeList() {

    const context = useContext(Provider);
    const {serice,setService}=useState();
    useEffect(() => {
        context.getServiceType1();
    }, [])
    const DeleteServiceType = async (id) => {
        const resp = await axios.delete(`https://localhost:7053/api/panel/service/type/${id}`);
        if (resp.status = 200) {
            alert("success");
            context.getServiceType1();
        }


        // const GetByIDServiceType = async (id) => {
        //     const resp = await axios.get(`https://localhost:7053/api/panel/service/type/${id}`);
        //     if (resp.status = 200) {
        //         alert("success");

        //     }

        // }
    }
    
    const UpdateServiceType =  (item) => {
        
        console.log("here is your answer",item)
        // const resp = await axios.put("https://localhost:7053/api/panel/service/type/" + id, data);
        setService(item.name);           
    }
    return (
        <>
            <div>ServiceTypeList</div>


            <table class="table table-bordered table-inverse table-responsive">
                <thead class="thead-inverse">
                    <tr>
                        <th>S.No</th>
                        <th>name</th>
                        <th>isActive</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        context.servicetypeList.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.isActive}</td>
                                <td><button className='btn btn-danger' onClick={() => DeleteServiceType(item.id)}>Delete</button>
                                <button className='btn btn-Primary' onClick={()=>UpdateServiceType(item)}>Edit</button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
            <Link to="/addServiceType">Go Add ServiceType</Link>
        </>


    )
}
