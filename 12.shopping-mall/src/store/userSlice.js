import { createSlice } from "@reduxjs/toolkit";

// 객체나 배열 변경
let user = createSlice({
    name : 'user1',
    initialState : {name : 'kim', age : 20},
    reducers : {
        /*
        changeName(state){
            return {name : 'park', age : 20};
        }
        */
        changeName(state){
            state.name = 'park';
        },
        increase(state,action){
            state.age += action.payload;
        }
    }
})
export let {changeName, a, increase} = user.actions;
export default user;

/*
let user = createSlice({
    name : 'user',
    initialState : 'kim',
    reducers : {
        changeName(state){
            return 'jiwon ' + state;
        }
    }

}) 
export let {changeName} = user.actions;
*/