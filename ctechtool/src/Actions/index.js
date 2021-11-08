import axios from 'axios'
import userInput from '../Reducers/userInput'
export const USER_TYPING = 'USER_TYPING'
export const USER_ENTRY = 'USER_ENTRY'
export const USER_ERR = 'USER_ERR'
export const PRICE_ENTRY = 'PRICE_ENTRY'
export const PRICE_SET = 'PRICE_SET'
export const PRICE_ERR = 'PRICE_ERR'


const addComputerAction = (userInput) => dispatch => {

    dispatch({ type: USER_TYPING })
}

// const computerData = () => {
//     DBridge.getComputerByID(id).then((res) => {
//         let Computer = res.data;
//         setCPUState(
//             Computer.Price,
//             Computer.OS,
//             Computer.releaseYear);
//     });
// }

