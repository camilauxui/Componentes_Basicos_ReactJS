import React from 'react';  
import ServiceList from './components/ServiceList';   
import DoctorList from './components/DoctorList'; 
import AppointmentForm from './components/AppointmentForm';

function App() {  
    return (  
        <>  
            <h1>Centro Médico</h1>  
            <br />  
            <div><ServiceList /> </div>
             <br />
            <div><DoctorList />  </div>
            <br />
            <AppointmentForm />
        </>  
    );  
}  

export default App;