import React from 'react';

function ContactCard(props){

	console.log(props);

	return(
		<div className="contact-card">
            <img align="center" src={props.contact.imgURL}/>
            <h3><font color="#3AC1EF">{props.contact.name}</font></h3>
            <p>Phone: {props.contact.phone}</p>
            <p>Email:{props.contact.email}</p>
        </div>
	)
}

export default ContactCard;