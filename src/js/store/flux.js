const getState = ({ getStore, getActions, setStore }) => {
	actions:{ loadAgendaContacts


	}
	return {
		store: {
			contact: []
			
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			//changeColor: (index, color) => {
				//get the store
				//const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				//const demo = store.demo.map((elm, i) => {
					//if (i === index) elm.background = color;
					//return elm;
				//});

				//reset the global store
				//setStore({ demo: demo });

				//Get Single Agenda
				loadAgendaContacts: async () => {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/mylikk/contacts");
					if (!response.ok) {
						throw new Error(response.status, response.statusText)
					}
					const data = await response.json();
					setStore ({contacts; data.contacts});
					return data;
				},

			//updatedContact; async () =>
				const response = await fetch 
			method: "POST",
			body JSON.stringify(contactObject),
			headers: {
				Conternt Type 'applications/json'
			}

				deleteContact: async (contactId) => {
					const response = await fetch('https://playground.4geeks.com/contact/agendas/mylikk/contacts/${contactId}', {
						method: "DELETE".
					}); 
					if(!response.ok){
						throw new Error(response.status, response.statusText)
					}
					const data = await response.json();

					const updatedContactList = getActions(). loadAgendaContacts();


					const store = setStore()
					setStore

			}
		}
	};
};

export default getState;
