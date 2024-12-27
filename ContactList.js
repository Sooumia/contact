import React from 'react';


const ContactList = ({ contacts, onEdit, onDelete }) => {
    return (
        <div className="container">
            <div className="contact-list">
                <h2>Contact List</h2>
                {contacts.map((contact, index) => (
                    <div className="contact-card" key={index}>
                        <div className="contact-details">
                            <h3>{contact.name}</h3>
                            <p>{contact.email}</p>
                        </div>
                        <div className="contact-actions">
                            <button className="edit-btn" onClick={() => onEdit(index)}>
                                Edit
                            </button>
                            <button className="delete-btn" onClick={() => onDelete(index)}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactList;