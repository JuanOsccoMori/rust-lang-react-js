import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../childrens/Contact';

const ContactList = () => {
    const default_contact = new Contact('Test name', 'Testing last name', 'test@mail.com', false);
    return (
        <div>
            <h1>List Contacts: </h1>
            <ContactComponent contact={default_contact}/>
        </div>
    );
}

export default ContactList;