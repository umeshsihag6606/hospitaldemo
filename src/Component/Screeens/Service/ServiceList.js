import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Provider } from '../../ContextApi/Context';

export default function ServiceList() {
    const context=useContext(Provider);
    useEffect(() => {
    
    
    context.listService1();
    }, [])

    const DeleteCountry=async(id)=>{
      const resp=await axios.delete(`https://localhost:7053/api/pannel/service/${id}`);
      if(resp.status==200)
      { 

          alert("Deleted SucessFully");
          context.listService1();
      }
      else{
          console.log("there is an errror",resp);
          
      }
  
     }

  
    
  return (
    
    <div className='color1'>
        <h1>Service List</h1>
        <table style={{height:"auto"}} class="table table-striped table-hover table-responsive  color" >
            <thead class="thead-inverse color1" >
                <tr>
                    <th>S.No</th>
                    <th>serviceName</th>
                    <th>amount</th>
                    <th>Service Name</th>
                    <th>isDisCountable</th>
                    <th>CreaterDate</th>
                    <th>validDate</th>
                    <th>Action</th>

                    
                     

                </tr>
                </thead>
                <tbody className='color1'>
                  {
                    context.service.map((item, index)=>(

                    <tr key={index} className="color1">
                        <td scope="row">{index+1}</td>
                      
                        <td><button type='button' onClick={()=>DeleteCountry(item.id)}  className=' btn btn-danger btnm-3' >Delete</button></td>
                        
                      
                    </tr>
                    ))
                  }
                   
                </tbody>
        </table>
        <Link to={"/service"}>Go To Add Service</Link>
    </div>


  )
}
