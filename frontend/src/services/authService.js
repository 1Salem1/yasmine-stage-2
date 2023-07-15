import axios from 'axios'
import jwtDecode from 'jwt-decode';
import { getItem, addItem, removeItem } from '../storage/localStorage';


export function hasAuthenticated() {
    const token = getItem('token');
    const result = token ? tokenIsValid(token) : false;

    if (false === result) {
        removeItem('token');
    }

    return result;
}




export function DeleteUser(credentials){
    return axios
        .post(`http://localhost:8080/auth/delete`, credentials , { withCredentials: true })
        .then(() => {
            removeItem('token');
            return true;
        });
}





export function GetUser(){
    return axios
        .get(`http://localhost:8080/auth/user` ,{ withCredentials: true } )
        .then(response => response)
    
}






export function login(credentials){
    return axios
        .post(`http://localhost:8080/login`, credentials , { withCredentials: true })
        .then(response => response.data.token)
        .then(token => {
            console.log(token)
            addItem('token', token);
            return true;
        });
}



export function register(credentials){
    return axios
        .post(`http://localhost:8080/register`, credentials , { withCredentials: true  , mode : 'no-cors'})
        .then(response => response.data.token)
        .then(token => {
            addItem('token', token);
            return true;
        });
}


export function logout() {

    return axios
    .post(`http://localhost:8080/auth/logout`)
    .then((res) => {
        console.log(res)
         return res.message
    });



}



function tokenIsValid(token){
    const decoded = jwtDecode(token);
    const { exp: expiration } = decoded;
    

    if (expiration * 1000 > new Date().getTime()) {
        return true;
    }

    return false;
}