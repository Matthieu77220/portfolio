import React, {useRef} from 'react';
import emailjs from '@emailjs/browser'

export const ContactMe = () => {
const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('mail_portfolio', 'mon_template', form.current, 'oykL2O3gsBurrNeXh')
            .then(
                () => {
                    console.log('SUCCES');
                },
                (error) => {
                    console.log('FAILED...', error);
                },
            );
    };  

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Objet</label>
            <input type="text" name="title" required/>
            <label>Prénom Nom</label>
            <input type="text" name="name" required/>
            <label>Email</label>
            <input type="email" name="email" required/>
            <label>Message</label>
            <textarea name="message" required/>
            <input type="submit" value="Soumettre" />
        </form>
    );
}

export default ContactMe;