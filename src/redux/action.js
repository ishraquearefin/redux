import { authSlice } from "./slice";

const {actions:slice}=authSlice
export const Login =(phone)=>(dispatch)=>{
 dispatch(slice.setLogin(phone))   

}
export const Logout =()=>(dispatch)=>{
    dispatch(slice.setLogout())   
    
}
export const getData =()=>(dispatch)=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => dispatch(slice.getData(json)))
    
}