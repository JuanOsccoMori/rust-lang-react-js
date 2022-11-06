import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from "../../models/contact.class";
import StateComponent from '../childrens/State';

const ContactComponent = ({ contact }) => {
    return (
        <>
          <p>Name: { contact.name } </p>
          <p>Last name: { contact.last_name } </p>  
          <p>Email: { contact.email } </p>
          <StateComponent state={true} />
        </>
    );
};

ContactComponent.propTypes = {
    "contact" : PropTypes.instanceOf(Contact)
};


export default ContactComponent;