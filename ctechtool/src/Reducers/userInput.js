import { USER_TYPING, USER_ENTRY, USER_ERR } from '../Actions';

const userType = {
    userWord: '',
    err: '',
    isTyping: false
};

function userInput(state = userType, action) {
    switch (action.type) {
        case USER_TYPING:
            return { ...state, isTyping: true };
        case USER_ENTRY:
            return { ...state, userWord: action.payload, isTyping: false };
        case USER_ERR:
            return { ...state, error: action.payload, isTyping: false };
        
        default:
            return state
    }
}

export default userInput