import React from 'react';
import ContactComponent from './components/container/Contact';

export const App = () => {

    const test_contact = {
        name: 'test name',
        last_name: 'test last name',
        email: 'test@mail.com',
        connected: false,
      };

    return (
        <div>
            <ContactComponent contact={test_contact}/>
        </div>
    );
}
