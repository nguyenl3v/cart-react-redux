import * as types from './../contants/Message';
import * as Message from './../contants/ActionsType';
const initalState = types.MSG_WELCOME;
const message = (state=initalState,action)=>{
    switch (action.type) {
    case Message.ONCLICK_MSG:
        return action.message
    case Message.DELETE_MSG:
        return action.message
    default: return state;
    }
}
export default message;