import {createSlice} from "@reduxjs/toolkit"

export const authSlice=createSlice({
    name:"auth",
    initialState:{
        isAusth:false,
        phone:"",
        data:""
    },
    reducers:{
    setLogin:(state,action)=>{
        state.isAusth=true;
        state.phone=action.payload
    },
    setLogout:(state,action)=>{
     state.isAusth=false;
     state.phone=""
    },
    getData:(state,action)=>{
      state.data=action.payload
    }

    }
})
console.log(authSlice)