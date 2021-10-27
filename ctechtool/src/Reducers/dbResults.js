import { GET_URL_START, GET_URL_SUCCESS, GET_URL_FAIL } from "../DBActions";

const initialState = {
    computerResults: {},
    errpr: '',
    isFetching: false
};

function dbResults(state = initialState, aciton) {
    switch (aciton.type) {
        case GET_URL_START:
            return { ...state, isFetching: true };
        case GET_URL_SUCCESS:
            return {...state, computerResults: aciton.payload, isFetching: false };
        case GET_URL_FAIL:
            return { ...state, error: aciton.payload, isFetching: false };
        
        default:
            return state
    }
}

export default dbResults