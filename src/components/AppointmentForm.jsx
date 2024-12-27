import React, { useState } from 'react';  
import './AppointmentForm.css'; 

const AppointmentForm = () => {  
    const [formData, setFormData] = useState({  
        name: '',  
        email: '',  
        phone: '',  
        doctor: '',  
        date: '',  
    });  

    const handleChange = (e) => {  
        const { name, value } = e.target;  
        setFormData({ ...formData, [name]: value });  
    };  

    const handleSubmit = (e) => {  
        e.preventDefault();  
        // acà se puede configurar el envío del formulario
        console.log('Cita agendada:', formData);  
        // Resetear el formulario  
        setFormData({  
            name: '',  
            email: '',  
            phone: '',  
            doctor: '',  
            date: '',  
        });  
    };  

    return (  
        <section id="appointment" className="appointment-form">  
            <h2>Agendar cita médica</h2>  
            <form onSubmit={handleSubmit}>  
                <div>  
                    <label htmlFor="name">Nombre:</label>  
                    <input  
                        type="text"  
                        id="name"  
                        name="name"  
                        value={formData.name}  
                        onChange={handleChange}  
                        required  
                    />  
                </div>  
                
                <div>  
                    <label htmlFor="email">Email:</label>  
                    <input  
                        type="email"  
                        id="email"  
                        name="email"  
                        value={formData.email}  
                        onChange={handleChange}  
                        required  
                    />  
                </div>  

                <div>  
                    <label htmlFor="phone">Teléfono:</label>  
                    <input  
                        type="tel"  
                        id="phone"  
                        name="phone"  
                        value={formData.phone}  
                        onChange={handleChange}  
                        required  
                    />  
                </div>  

                <div>  
                    <label htmlFor="doctor">Doctor:</label>  
                    <select  
                        id="doctor"  
                        name="doctor"  
                        value={formData.doctor}  
                        onChange={handleChange}  
                        required  
                    >  
                        <option value="">Selecciona un doctor</option>  
                        <option value="Dr. Patricio Martínez">Dr. Patricio Martínez</option>  
                        <option value="Dra. Matilde Silva">Dra. Matilde Silva</option>  
                        <option value="Dr. Carlos Andrés Ruiz">Dr. Carlos Andrés Ruiz</option>  
                    </select>  
                </div>  

                <div>  
                    <label htmlFor="date">Fecha:</label>  
                    <input  
                        type="date"  
                        id="date"  
                        name="date"  
                        value={formData.date}  
                        onChange={handleChange}  
                        required  
                    />  
                </div>  

                <button type="submit">Agendar Cita</button>  
            </form>  
        </section>  
    );  
};  

export default AppointmentForm;