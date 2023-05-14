import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function OpdReport() {

  const table = () => {
    {
      data.map((item, index) => (
        <tr>

          <td key={index}>{index + 1} </td>
          <td>{item.startDate}</td>
          <td>{item.endDate}</td>
          <td>{item.doctorName}</td>
        </tr>

      ))
    }

  }
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [data, setData] = useState([]);
  const [doctorName, setDoctorName] = useState("lalit");
  useEffect(() => {
    fetchData();
  }, []);





  const fetchData = async (startDate, endDate, doctorName) => {
    const resp = await axios.get(`https://localhost:7053/api/pannle/opdWithDoctor?StartDate=${startDate}&EndDate=${endDate}&DoctorName=${doctorName}`);
    if (resp.status == 200) {
      alert(JSON.stringify(resp.data))
      console.log("data", resp.data);
      setData(resp.data);
    }
    else {
      alert("error oucer", resp)
    }
    setStartDate("")
    setEndDate("")
    setDoctorName("")

  }
  return (
    <div className='style'>
      <h1>OPD REPORT</h1>



      <div class="form-group">
        <label for="">StartDate</label>
        <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)}
          class="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
        <small id="helpId" class="form-text text-muted">Help text</small>
      </div>
      <div class="form-group">
        <label for="">EndDate</label>
        <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)}
          class="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
        <small id="helpId" class="form-text text-muted">Help text</small>
      </div> <div class="form-group">
        <label for="">Doctor Name </label>
        <select type="text" value={doctorName} onChange={e => setDoctorName(e.target.value)}
          class="form-control" name="" id="" aria-describedby="helpId" >
          <option value="">Select Doctor Name</option>
          <option value='lalit'>lalit</option>
          <option value='umesh'>umesh</option>
          <option value='kuldeep'>kuldeep</option>

        </select>

      </div>

      <button className='btn btn-success mx-3  ' onClick={() => fetchData(startDate, endDate, doctorName)} >   Submit</button>
      <div className="hello">
      
      {
        data.length > 0 && (
          <table className="table table-bordered table-inverse table-responsive">
            <thead>
              <th>S.No</th>
              <th>StartDate</th>

            </thead>
            <tbody>
           { data.map((item, index) => (
        <tr>

          <td key={index}>{index + 1} </td>
          <td>{item.startDate}</td>
          <td>{item.endDate}</td>
          <td>{item.doctorName}</td>
        </tr>

      ))}
            </tbody>
          </table>
        )
        
      
    }
    </div>
    
     
      
    </div>

  )
}
