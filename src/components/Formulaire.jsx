import React, { useRef } from "react";

export default function Formulaire() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault(); 
    };

    return (
    
        <form className="col-md-6" ref={form} onSubmit={sendEmail}>
            <h3 className="titre-color">Formulaire de contact</h3>
            <hr />
            <div class="form-group">
                <input type="Nom" className="form-control my-3" placeholder="Votre nom" required autoComplete="off" />
                <input type="email" className="form-control my-3" placeholder="Votre adresse email" required autoComplete="off" />
                <input type="Numéro" className="form-control my-3" placeholder="Votre numéro de téléphone" required autoComplete="off" />
                <input type="Sujet" className="form-control my-3" placeholder="Sujet" required autoComplete="off" />
                <textarea type="message" className="form-control my-3" placeholder="Votre message" rows="4" required />
                <input type="submit" class="btn btn-primary btn-lg my-3" value="Envoyer" />
            </div>
        </form>  
    );
};

