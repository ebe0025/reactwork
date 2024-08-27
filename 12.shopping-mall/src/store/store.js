import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./userSlice";
import pList from "../data/ProductList";



let stock = createSlice({
    name : 'stock',
    initialState : [10, 11, 12]
    

})

let list = createSlice({
    name : 'list',
    initialState : [{id: 0, title: '컴퓨터1', count: 3},
                    {id: 1, title: '컴퓨터2', count: 6},
                    {id: 2, title: '컴퓨터3', count: 4}
                    ],
    reducers : {
        changeCount(state, value){
            state.count += value.payload;
        }
    }
})

let plist = createSlice({
    name : 'plist',
    initialState : [],
    reducers : {
        cartItem(state, item){
            let id = state.findIndex(index => index.id === item.payload.id);
            if(id === -1) {
                state.push({id: item.payload.id, title: item.payload.title, count: 1});
            } else {
                state[id].count++;
            }
        },
        increaseCart(state, action){
            if(state[action.payload].title !== "")
                state[action.payload].count++;
        }

        
    }
})
export let {cartItem, increaseCart} = plist.actions;

export let {changeCount} = list.actions;

export default configureStore({
    reducer : {
        // 내보내기에 등록
        user : user.reducer,
        stock : stock.reducer,
        list : list.reducer,
        plist : plist.reducer
    }
})