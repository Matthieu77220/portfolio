import React, {useRef} from 'react';
import emailjs from '@emailjs/browser'
import Footer from './Footer'
import Header from './Header'

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
        <>
            <Header />
                <div className="flex justify-center mt-30 mb-20">
                    <form ref={form} onSubmit={sendEmail} className="flex flex-col w-180 h-130 p-35 justify-center rounded-2xl bg-gradient-to-r from-black/80 to-purple-900/80">
                        <h1 className="mb-5 ml-32 text-3xl font-bold text-purple-300">Me contacter</h1>
                        <label className="text-purple-300 mr">Objet</label>
                            <input type="text" name="title" required className="border-2 border-purple-300 hover:border-purple-700 text-white" />
                        <label className="text-purple-300">Prénom Nom</label>
                            <input type="text" name="name" required className="border-2 border-purple-300 hover:border-purple-700 text-white" />
                        <label className="text-purple-300">Email</label>
                            <input type="email" name="email" required className="border-2 border-purple-300 hover:border-purple-700 text-white" />
                        <label className="text-purple-300"> Message</label>
                            <textarea name="message" required className="p-10 border-2 border-purple-300 hover:border-purple-700 text-white" />
                        <button 
                            type="submit"
                            className="p-4 w-50 ml-30 mt-10 bg-purple-700 text-white font-semibold shadow hover:bg-purple-500 transition rounded-full"
                        >
                            Soumettre
                        </button>
                    </form>
                </div>
            <Footer />
        </>
    );
}

export default ContactMe;