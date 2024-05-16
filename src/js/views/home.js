import React from "react";
import ContactCard from './ContactCard.jsx';
import Contacts from './Contacts.jsx';
import AddCOntacts from "./AddContact.jsx";

import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5">

	<div>
		<AddContact/>
	</div>

	<div>
		<Contacts/>
	</div>
	</div>
);
