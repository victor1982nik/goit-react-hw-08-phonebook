import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export async function registerUser(data)  {
    const result = await axios.post('/users/signup', data);    
    return result.data;
}