import React from 'react';  
import PropTypes from 'prop-types';  
import './DoctorCard.css'; 

const DoctorCard = ({ name, specialty, experience }) => {  
    return (  
        <div className="doctor-card">  
            <h2>{name}</h2>  
            <p>Especialidad: {specialty}</p>  
            <p>Años de experiencia: {experience}</p>  
        </div>  
    );  
};  

DoctorCard.propTypes = {  
    name: PropTypes.string.isRequired,  
    specialty: PropTypes.string.isRequired,  
    experience: PropTypes.number.isRequired,  
};  

export default DoctorCard;