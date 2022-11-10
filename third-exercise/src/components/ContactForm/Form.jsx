import React from 'react';
import { func } from "prop-types";
import { ModelContact } from '../../models/ModelContact';
import { useRef } from 'react';

const FormContact = ({ add }) => {

    const nameRef = useRef('');
    const lastNameRef = useRef('');
    const emailRef = useRef('');

    const addContact = e => {
        e.preventDefault();
        const newContact = new ModelContact(
            nameRef.current.value,
            lastNameRef.current.value,
            emailRef.current.value,
            false
        );
        add(newContact);
    }

    return (
        <form onSubmit={addContact}>
            <div>
                <label>Name</label>
                <input ref={nameRef}/>
            </div>
            <div>
                <label>Last name</label>
                <input ref={lastNameRef}/>
            </div>
            <div>
                <label>Email</label>
                <input ref={emailRef}/>
            </div>
            <button type='submit'>Add Contact</button>
        </form>
    );
}

FormContact.protoType = {
    add: func.isRequired
}

export default FormContact;