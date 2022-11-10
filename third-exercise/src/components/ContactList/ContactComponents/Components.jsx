import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import { ModelContact } from '../../../models/ModelContact';

const ComponentsContact = ({ contact, remove, state }) => {


    const contactStatus = () => {
        return contact.connected ? 
        (<button onClick={() => state(contact)}>{contact.connected ? 'Disconnected' : 'Connected'}</button>) 
        :
        (<button onClick={() => (state(contact))}>{contact.connected ? 'Disconnected' : 'Connected'}</button>)
    }

    useEffect(() => {
        return () => {
            console.log(`Contacto creado -> ${contact}`)
        }
    },[contact])

    return (
        <tr>
            <td>{contact.name}</td>
            <td>{contact.last_name}</td>
            <td>{contact.email}</td>
            <td>{contact.connected ? 'Connected' : 'Disconnected'}</td>
            <td>
                <button onClick={() => remove(contact)}>Remove</button>
                {contactStatus()}
            </td>
        </tr>         
    );
}

ComponentsContact.protoTypes = {
    contact: PropTypes.instanceOf(ModelContact).isRequired,
    state: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}

export default ComponentsContact;
