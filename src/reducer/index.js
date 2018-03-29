import ActionType from '../constant/actionType';
// import {combineReducers } from 'redux';
// import $ from 'jquery';
const menuListReducer = (state,action) =>{
    switch(action.type){
        case ActionType.GET_MENULIST_COMPLETE:   
            var newState ={
                listData:action.data
            }
            return newState;
        
        default:
            return state;
    }
}



export default menuListReducer;
