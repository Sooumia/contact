import React, { useState } from 'react';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import './App.css';


function App() {
    const [contacts, setContacts] = useState([]);

    const addContact = (contact) => {
        setContacts([...contacts, contact]);
    };

    const deleteContact = (index) => {
        setContacts(contacts.filter((_, i) => i !== index));
    };

    const EditContact = (index) => {
        const newName = prompt('Enter new name:', contacts[index].name);
        if (newName) {
            const updatedContacts = [...contacts];
            updatedContacts[index].name = newName;
            setContacts(updatedContacts);
        }
        const newEmail = prompt('Enter new email:', contacts[index].email);
        if (newEmail) {
            const updatedContacts = [...contacts];
            updatedContacts[index].email = newEmail;
            setContacts(updatedContacts);
        }
    };

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<ContactList contacts={contacts} onDelete={deleteContact} onEdit={EditContact}/>} />
                <Route path="/add" element={<AddContact onAdd={addContact} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
