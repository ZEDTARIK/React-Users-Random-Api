import React from 'react'
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div>
            <div className="jumbotron mt3">
                    <h1 className="text-center">React Js CRUD </h1>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <ContactForm />
                </div>
                <div className="col-md-6">
                        <h2>List of Contact</h2>
                </div>
            </div>
        </div>
    )
}

export default Contact
