import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function DasBoard() {
  const [value,setData]=useState([]);
  
  
  const listapi=async ()=>{
    const resp=await axios.get("https://localhost:7053/api/pannel/DashBord");
    if(resp.status==200)
    {
      setData(resp.data);
      console.log("dtaa",resp)
    }
  }
  useEffect(() => {
    listapi();
  }, [])

    return (<>
        <div   style={{height:"650px",width:"auto"}}className='back'>
      <div   className="row row-cols-1 row-cols-md-2 g-4">


        {
          console.log("hello",value)
        }
       
          
 
               
  <div  className="col ">
    <div style={{width:"350px", height:"120px", textAlign:"center"}}  className="card">
      <div className="card-body">
        <h5  className="card-title">Service</h5>
        <h1 className="card-text">{value?.totalService}</h1>
      </div>
    </div>
  </div>
        
  <div className="col">
    <div style={{ width:"350px", height:"120px", textAlign:"center"}}   className="card">
      <div className="card-body">
        <h5 className="card-title">Doctor</h5>
        <h1 className="card-text">{value?.totalDoctor}</h1>
      </div>
    </div>
  </div>
  <div className="col">
    <div style={{width:"350px", height:"120px", textAlign:"center"}}   className="card">
      <div className="card-body">
        <h5 className="card-title">Total OPD</h5>
        <h1 className="card-text">{value?.totalOpd}</h1>
      </div>
    </div>
  </div>
  <div className="col">
    <div style={{width:"350px", height:"120px", textAlign:"center"}}   className="card">
      <div className="card-body">
        <h5 className="card-title">Total Patient</h5>
        <h1 className="card-text">{value?.totalPatient}</h1>
      </div>
    </div>
  </div>
  <div className="col">
    <div style={{ width:"350px", height:"120px", textAlign:"center"}}    className="card">
      <div className="card-body">
        <h5 className="card-title">OPD Today</h5>
        <h1 className="card-text">{value?.todayOpd} </h1>
      </div>
    </div>
  </div>
  <div className="col">
    <div style={{width:"390px", height:"150px", textAlign:"center"}}   className="card">
      <div className="card-body">
        <h1 className="card-title">Week OPD</h1> <h1 className="card-text">{value?.weekOpd} 
        <h2>WeekOPDAmount = {value?.weekOpdAmount}</h2>
        </h1>
      </div>
    </div>
  </div>
  <div className="col my-4">
    <div style={{width:"350px", height:"120px", textAlign:"center"}}   className="card">
      <div className="card-body">
        <h5 className="card-title">Other Staff</h5>
        <h1 className="card-text">{value?.totalOtherStaff}</h1>
      </div>
    </div>
  </div>
  <div className="col my-4">
    <div style={{width:"350px", height:"120px", textAlign:"center"}}   className="card">
      <div className="card-body">
        <h5 className="card-title"> totalOpdAmount</h5>
        <h1 className="card-text">{value?.totalOpdAmount}</h1>
      </div>
    </div>
  </div>
</div>
  
  </div>


 
  </>
  


    )
}
