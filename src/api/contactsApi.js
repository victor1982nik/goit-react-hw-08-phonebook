import axios from "axios";

//axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export async function fetchContacts()  {
    const result = await axios.get('/contacts');    
    return result.data;
}

export async function addContact(obj){    
    const result = await axios.post("/contacts", obj);    
    return result.data;
}

export async function deleteContact(id){    
    const result = await axios.delete(`/contacts/${id}`);    
    return result.data;
}