
import './App.css';
import Layout from './Component/LayOut/Layout';
import { Route, Routes, } from 'react-router-dom'
import DasBoard from './Component/Screeens/DasBoard';
import Login from './Component/LayOut/Login';

import ForgetPassword from './Component/LayOut/ForgetPassword';

import { Provider } from './Component/ContextApi/Context';
import Service from './Component/Screeens/Service/Service';
import ServiceList from './Component/Screeens/Service/ServiceList';
import AddOPD from './Component/Screeens/OPD/AddOPD';
import { useContext } from 'react';
import LoginPage from './Component/Screeens/Login';
import OpdList from './Component/Screeens/OPD/OpdList';
import Registraction from './Component/LayOut/Registraction';

import AddEmployee from './Component/Screeens/Employee/AddEmployee';
import EmployeeListWork from './Component/Screeens/Employee/EmployeeListWork';
import ServiceType from './Component/Screeens/Service/ServiceType';
import ServiceTypeList from './Component/Screeens/Service/ServiceTypeList';
import EditEmployee from './Component/Screeens/Employee/EditEmployee';
import OPDList from './Component/Screeens/OPDList';
import OpdReport from './Component/Screeens/OpdReport';






function App() {
  const context = useContext(Provider);


  if (context.loading) {
    return (
      <div>Loading.....</div>
    )
  }


  return (
    <div>

      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path=' /reference' element={<Registraction />} />
        <Route path='/emp/forget' element={<ForgetPassword />} />


        <Route path='/' element={<Layout />}>
          <Route path='/employee' element={<EmployeeListWork />} />
          <Route path='/employee/edit/:id' element={<EditEmployee />} />

          <Route path='/employee/addemployee' element={<AddEmployee />} />
          <Route  path='/opdreport' element={<OpdReport/>}/>
          <Route path='/link' element={<Login />} />
          <Route path='/addServiceType' element={<ServiceType />} />
          <Route path='/ServiceTypelist' element={<ServiceTypeList />} />

          <Route path='/opdlist' element={<OPDList />} />
          <Route path='/dash' element={<DasBoard />} />
          <Route path='/opd' element={<AddOPD />} />
          <Route path='/opd/opdlist' element={<OpdList />} />
          <Route path='/service' element={<Service />} />
          <Route path='/serviceList' element={<ServiceList />} />
          <Route path='/ops' element={<AddOPD />} />

        </Route>

      </Routes>



    </div>);
}

export default App;







