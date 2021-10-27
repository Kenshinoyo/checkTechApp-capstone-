import axios from 'axios';
const CT_BASE_URL = "http://localhost:8080/ctapi/";

export const GET_URL_START = 'GET_URL_START'
export const GET_URL_SUCCESS = 'GET_URL_SUCCESS'
export const GET_URL_FAIL = 'GET_URL_FAIL'

class CTBridge{
    
    getComputers(){
        return axios.get(CT_BASE_URL+"/allcomputers")
    }

    createComputer(Computer){
        return axios.post(CT_BASE_URL+"/addcomputer", Computer);
    }

    getComputerByID(id){
        return axios.get(CT_BASE_URL+"/computer/"+ id);
    }

    updateComputer(Computer, id){
        return axios.put(CT_BASE_URL+"/computer/"+ id, Computer);
    }

    deleteComputer(id){
        return axios.delete(CT_BASE_URL);
    }
}

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

export default new CTBridge();
export default searchFunction;