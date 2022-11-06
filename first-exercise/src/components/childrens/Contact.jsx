import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from "../../models/contact.class";

const ContactComponent = ({ contact }) => {
    return (
        <>
          <p>Name: { contact.name } </p>
          <p>Last name: { contact.last_name } </p>  
          <p>Email: { contact.email } </p>
          <p>Connected: { contact.connected ? 'Contacto En Línea' : 'Contacto No Disponible' } </p>
        </>
    );
};

ContactComponent.propTypes = {
    "contact" : PropTypes.instanceOf(Contact)
};


export default ContactComponent;