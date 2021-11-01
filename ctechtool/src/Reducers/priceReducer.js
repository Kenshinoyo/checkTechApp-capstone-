import { PRICE_ENTRY, PRICE_SET, PRICE_ERR } from '../Actions';

const cpuPrice = {
    userPrice: 0,
    err: '',
    isSet: true
};

function priceReducer(state = cpuPrice, action) {
    switch (action.type) {
        case PRICE_ENTRY:
            return { ...state, isSet: false };
        case PRICE_SET:
            return { ...state, userPrice: action.payload, isSet: true };
        case PRICE_ERR:
            return { ...state, error: action.payload, isSet: false };
        
        default:
            return state
    }
}

export default priceReducer