import React, {useEffect, useState} from 'react';
import { ModelContact } from '../../models/ModelContact';
import FormContact from '../ContactForm/Form';
import ComponentsContact from './ContactComponents/Components';

const ListContacts = () => {

    const contact = new ModelContact("Jhon", "Doe", "jdoe@mail.com", true);
    // Hook de iniciar un contacto
    const [items, setItems] = useState([contact]);

    const addContact = (item) => {
        const tempItems = [...items]
        tempItems.push(item);
        setItems(tempItems)
    }

    const connectedContact = item => {
        const index = items.indexOf(item);
        const tempItems = [...items];
        tempItems[index].connected = !tempItems[index].connected;
        setItems(tempItems);
    } 

    const deleteContact = item => {
        const index = items.indexOf(item);
        const tempItems = [...items];
        tempItems.splice(index, 1);
        setItems(tempItems);
    }

    useEffect(() => {
        console.log("Iniciando proceso!! jujuiii");
        return () => {
            console.log("Se esta montandooo jujuii!!")
        };
    }, [items]);

    return (
        <div>
            <div>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Last name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, i) => {
                            return (
                                <ComponentsContact
                                    key={i}
                                    contact={item}
                                    remove={deleteContact}
                                    state={connectedContact}
                                />
                            )
                        })}
                    </tbody>
                </table>
                
            </div>
            <div>
                <FormContact add={addContact}/>
            </div>
        </div>
    );
}

export default ListContacts;