import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export async function registerUser(data)  {
    const result = await axios.post('/users/signup', data); 
    console.log(result) ;
    return result.data;
}

export async function logInUser(data)  {
    const result = await axios.post('/users/login', data); 
    console.log(result) ;
    return result.data;
}

export async function logOutUser()  {
    const result = await axios.post('/users/logout'); 
    console.log(result) ;
    return result.data;
}

export const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
  };

export async function refreshUser()  {
    const result = await axios.get('/users/current'); 
    console.log(result) ;
    return result.data;
}
  
//   export async function fetchContacts()  {
//     const result = await axios.get('/contacts');    
//     return result.data;
// }

// export async function addContact(data){    
//     const result = await axios.post("/contacts", data);    
//     return result.data;
// }

// export async function deleteContact(id){    
//     const result = await axios.delete(`/contacts/${id}`);    
//     return result.data;
// }