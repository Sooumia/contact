import React, { useState } from 'react';

const AddContact = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState(''); // État pour le message de succès

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email) {
            onAdd({ name, email });
            setName('');
            setEmail('');
            setSuccessMessage('Contact added successfully!'); // Mettre à jour le message de succès

            // Effacer le message après 3 secondes
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
        }
    };

    return (
        <div className="add-contact">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Add Contact</button>
            </form>
            {successMessage && <p className="success-message">{successMessage}</p>} {/* Afficher le message de succès */}
        </div>
    );
};

export default AddContact;