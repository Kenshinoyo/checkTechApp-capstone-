import axios from 'axios';
const CT_BASE_URL = "http://localhost:8080/ctapi";

class DBridge{
    
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
        return axios.delete(CT_BASE_URL+"/computer/"+ id);
    }
}

export default new DBridge();