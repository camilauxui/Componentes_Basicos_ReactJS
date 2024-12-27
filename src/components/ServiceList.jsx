import React from 'react';  
import './ServiceList.css';   

const ServiceList = ({ services }) => {  
    return (  
        <section id="services" className="section-services">  
            <h2>Servicios Médicos</h2>  
            <p>  
                Conoce los servicios disponibles 24 x 7 para garantizar una atención de calidad.  
            </p>  
            <br /><br />  
            <div className="services-grid">  
                {services.map((service) => (  
                    <article className="services-item" key={service.id}>  // Usar el id como key  
                        <img  
                            src={service.image}   
                            alt={service.title}  
                            className="responsive-img"  
                        />  
                        <h3>{service.title}</h3>  
                        <p>{service.description}</p>  
                    </article>  
                ))}  
            </div>  
        </section>  
    );  
};  

export default ServiceList;