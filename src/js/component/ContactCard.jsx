import React from "react";



const ContactCard =({name, address, phone, email}) => {

    return (
        <>

        <div>
            <div className="contact">
                <img src="https://xgames.com/randomusers/avatar.php?g=pixel"/>
                <div className="contact-info">
                <p className="contact-name">{name}</p>
                <p className="contact-address">{address}</p>
                <p className="contact-phone">{phone}</p>
                <p className="contact-email">{email}</p>
                    </div>
                   
                </div>
             </div>

        </>
    );
}

    export default ContactCard;