import React from 'react';  
import DoctorCard from './components/DoctorCard'; 

function App() {  
    return (  
        <>  
            <h1>Centro Médico</h1>  
            <DoctorCard   
                name="Dr. Juan Pérez"  
                specialty="Cardiología"  
                experience={10}  
            />  
            <DoctorCard   
                name="Dra. Ana López"  
                specialty="Pediatría"  
                experience={5}  
            />  
        </>  
    );  
}  

export default App;