import React from 'react';  
import DoctorCard from './DoctorCard';  // Asegúrate de que la ruta sea correcta  
import pMartinezImage from '../assets/doc1.jpg'; // Dr. Patricio Martínez  
import mSilvaImage from '../assets/dra1.jpg'; // Dra. Matilde Silva  
import carlosImage from '../assets/doc2.jpg'; // Dr. Carlos Andrés Ruiz   

const doctors = [  
    {  
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
        image: pMartinezImage  
    },  
    {  
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
        image: mSilvaImage  
    },  
    {  
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
    }  
];  

const DoctorList = () => {  
    return (  
        <div className="doctor-cards-container">  
            {doctors.map((doctor, index) => (  
                <DoctorCard   
                    key={index}  
                    name={doctor.name}  
                    specialty={doctor.specialty}  
                    experience={doctor.experience}  
                    availability={doctor.availability}  
                    contact={doctor.contact}  
                    schedule={doctor.schedule}  
                    image={doctor.image}  
                />  
            ))}  
        </div>  
    );  
};  

export default DoctorList;