import axios from 'axios'

export const GET_URL_START = 'GET_URL_START'
export const GET_URL_SUCCESS = 'GET_URL_SUCCESS'
export const GET_URL_FAIL = 'GET_URL_FAIL'

const searchFunction = (userInput) => dispatch => {

    dispatch({ type: GET_URL_START })

    axios.get(`http://localhost:8080/ctapi&t=${userInput}`)

        .then(response => dispatch({
            payload: response.data,
            type: GET_URL_SUCCESS
        }))
        .catch(err => dispatch({
            payload: err.message,
            type: GET_URL_FAIL
        }))
}

export default searchFunction;