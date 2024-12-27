import React from 'react';  
import ServiceList from './components/ServiceList';   
import DoctorList from './components/DoctorList';   
import AppointmentForm from './components/AppointmentForm';  
import consultaIcono from './assets/consulta_icono.png';  
import urgenciaIcono from './assets/urgencia_icono.png';  
import especialidadesIcono from './assets/especialidades_icono.png';  

function App() {  
    const services = [  
        {  
            title: "Consultas",  
            description: "Nuestro equipo de profesionales capacitados está disponible para proporcionar atención médica rápida y efectiva.",  
            image: consultaIcono  
        },  
        {  
            title: "Urgencias",  
            description: "Nuestra unidad de urgencias está diseñada para atender situaciones médicas críticas.",  
            image: urgenciaIcono  
        },  
        {  
            title: "Especialidades",  
            description: "Contamos con un equipo de especialistas en diferentes áreas incluyendo cardiología, pediatría, entre otros.",  
            image: especialidadesIcono  
        }  
    ];  

    return (  
        <>  
            <h1>Centro Médico</h1>  
            <br />  
            <div>  
                <ServiceList services={services} />   
            </div>  
            <br />  
            <div>  
                <DoctorList />  
            </div>  
            <br />  
            <AppointmentForm />  
        </>  
    );  
}  

export default App;