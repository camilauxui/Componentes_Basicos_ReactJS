import React from 'react';  
import DoctorCard from './components/DoctorCard'; 
import docImage from './assets/doc1.jpg';

function App() {  
    // Datos del doctor
    const doctorData = {
        name: "Dr. Patricio Martínez",
        specialty: "Cardiología",
        experience: 4,
        availability: "Lunes a Viernes, 9 AM - 5 PM",
        contact: {
            telefono: "123-456-7890",
            email: "patricio.martinez@centromedico.com"
        },
        schedule: {
            lunes: "9 AM - 5 PM",
            martes: "9 AM - 5 PM",
            miercoles: "9 AM - 5 PM",
            jueves: "9 AM - 5 PM",
            viernes: "9 AM - 5 PM",
            sabado: "Cerrado",
            domingo: "Cerrado"
        },
        image: docImage
    };

    return (  
        <>  
            <h1>Centro Médico</h1>  
            <DoctorCard   
                name={doctorData.name}  
                specialty={doctorData.specialty}  
                experience={doctorData.experience}  
                availability={doctorData.availability}  
                contact={doctorData.contact}  
                schedule={doctorData.schedule}  
                image={doctorData.image}  
            />  
        </>  
    );  
}  

export default App;