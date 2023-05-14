import React, { useState } from 'react';
import axios from 'axios';

export default function OPDList() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [data, setData] = useState([]);

  const fetchData = async(startDate,endDate) => {
    alert("hello")
     const resp=await axios.get(`https://localhost:7053/api/pannel/opd/betweentetwodates?StartDate=${startDate}&EndDate=${endDate}`)
                                 
    if(resp.status==200)
    {
      console.log("data",resp.data);
      setData(resp.data);
      alert("data is running")
    }
    else{
      alert("error oucer",resp)
    }
  
  }

  return (
    <div>
      <label htmlFor="startDate">Start Date:</label>
      <input type="date" id="startDate" name="startDate" value={startDate} onChange={e => setStartDate(e.target.value)} />

      <label htmlFor="endDate">End Date:</label>
      <input type="date" id="endDate" name="endDate" value={endDate} onChange={e => setEndDate(e.target.value)} />
   <br />
      <button className=' btn btn-primary' onClick={()=>fetchData(startDate,endDate)}>Click </button>
      <div>
       <table class="table table-striped table-inverse table-responsive">
        <thead class="thead-inverse">
          <tr>
            <th>S.NO</th>
            <th>Date</th>
            <th>amount</th>
          </tr>
          </thead>
          <tbody>

            {
              data.map((itetm , index)=>(  
            <tr key={index}>
              <td scope="row">{index+1}</td>
              <td>{itetm.date}</td>
              <td></td>
            </tr>
              ))
            }
           
          </tbody>
       </table>
      </div>
       </div>
  );
}

