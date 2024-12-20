import React from 'react';  
import DoctorCard from './components/DoctorCard';   
import docImage from './assets/doc1.jpg'; // Dr. Patricio Martínez  
import draImage from './assets/dra1.jpg'; // Dra. Matilde Silva  
import carlosImage from './assets/doc2.jpg'; // Dr. Carlos Andrés Ruiz (asegúrate de que esta ruta sea correcta)  

function App() {  
    // Doctor Card Patricio Martínez  
    const pMartinezData = {  
        name: "Dr. Patricio Martínez",  
        specialty: "Cardiología",  
        experience: 4,  
        availability: "Lunes y viernes",  
        contact: {  
            telefono: "123-456-7890",  
            email: "p.martinez@centromedico.com"  
        },  
        schedule: {  
            lunes: "9:00 AM - 15:00 PM",  
            viernes: "10:00 AM - 13:00 PM",  
        },  
        image: docImage  
    };  

    // Doctor Card Matilde Silva  
    const mSilvaData = {  
        name: "Dra. Matilde Silva",  
        specialty: "Pediatría",  
        experience: 3,  
        availability: "Martes y sábado",  
        contact: {  
            telefono: "+56 9 98765432",  
            email: "m.silva@centromedico.com"  
        },  
        schedule: {  
            martes: "09:00 - 13:00",  
            sabado: "09:00 - 12:00"  
        },  
        image: draImage  
    };  

    // Doctor Card Carlos Andrés Ruiz  
    const cRuizData = {  
        name: "Dr. Carlos Andrés Ruiz",  
        specialty: "Neurología",  
        experience: 26,  
        availability: "Lunes y jueves",  
        contact: {  
            telefono: "+56 9 13579135",  
            email: "c.ruiz@centromedico.com"  
        },  
        schedule: {  
            lunes: "08:00 - 12:00",   
            jueves: "14:00 - 18:00"  
        },  
        image: carlosImage  
    };  

    return (  
        <>  
            <h1>Centro Médico</h1>  
            <br />
            <div className="doctor-cards-container"> {/* Contenedor para alinear tarjetas horizontalmente */}  
                <DoctorCard   
                    name={pMartinezData.name}  
                    specialty={pMartinezData.specialty}  
                    experience={pMartinezData.experience}  
                    availability={pMartinezData.availability}  
                    contact={pMartinezData.contact}  
                    schedule={pMartinezData.schedule}  
                    image={pMartinezData.image}  
                />  
                <DoctorCard   
                    name={mSilvaData.name}  
                    specialty={mSilvaData.specialty}  
                    experience={mSilvaData.experience}  
                    availability={mSilvaData.availability}  
                    contact={mSilvaData.contact}  
                    schedule={mSilvaData.schedule}  
                    image={mSilvaData.image}  
                />  
                <DoctorCard   
                    name={cRuizData.name}  
                    specialty={cRuizData.specialty}  
                    experience={cRuizData.experience}  
                    availability={cRuizData.availability}  
                    contact={cRuizData.contact}  
                    schedule={cRuizData.schedule}  
                    image={cRuizData.image}  
                />  
            </div>  
        </>  
    );  
}  

export default App;