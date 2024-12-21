import React from 'react';  
import consultaIcono from '../assets/consulta_icono.png'; // Asegúrate de que la ruta es correcta  
import urgenciaIcono from '../assets/urgencia_icono.png'; // Asegúrate de que la ruta es correcta  
import especialidadesIcono from '../assets/especialidades_icono.png'; // Asegúrate de que la ruta es correcta  
import './ServiceList.css';   

const ServiceList = () => {  
    return (  
        <section id="services" className="section-services">  
            <h2>Servicios Médicos</h2>  
            <p>  
                Conoce los servicios disponibles 24 x 7 para garantizar una atención de calidad.  
            </p>  
            <br /><br />  
            <div className="services-grid">  
                <article className="services-item">  
                    <img  
                        src={consultaIcono} 
                        alt="consultas"  
                        className="responsive-img"  
                    />  
                    <h3>Consultas</h3>  
                    <p>  
                        Nuestro equipo de profesionales capacitados está disponible para proporcionar atención médica rápida y efectiva.  
                    </p>  
                </article>  

                <article className="services-item">  
                    <img  
                        src={urgenciaIcono}  
                        alt="Urgencias"  
                        className="responsive-img"  
                    />  
                    <h3>Urgencias</h3>  
                    <p>  
                        Nuestra unidad de urgencias está diseñada para atender situaciones médicas críticas.  
                    </p>  
                </article>  

                <article className="services-item">  
                    <img  
                        src={especialidadesIcono}  
                        alt="Especialidades"  
                        className="responsive-img"  
                    />  
                    <h3>Especialidades</h3>  
                    <p>  
                        Contamos con un equipo de especialistas en diferentes áreas incluyendo cardiología, pediatría, entre otros.  
                    </p>  
                </article>  
            </div>  
        </section>  
       
    );  
};  


export default ServiceList;