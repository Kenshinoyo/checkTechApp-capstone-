import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import DBridge from '../Services/DBridge';

const UpdateComputer = (props) => {

    const history = useHistory()

    const [id, setID] = useState(props.match.params.id)
    const [Price, setPrice] = useState(0)
    const [OS, setOS] = useState('')
    const [releaseYear, setReleaseYear] = useState(0)

    // - "Placeholder" state for JSON data
    const [cpuState, setCPUState] = useState({Price, OS, releaseYear})
        
    // this.idHandler = this.idHandler.bind(this);
    // this.priceHandler = this.priceHandler.bind(this);
    // this.osHandler = this.osHandler.bind(this);
    // this.releaseYearHandler = this.releaseYearHandler.bind(this);
    // this.reformComputer = this.reformComputer.bind(this);      

    useEffect()
    {
        DBridge.getComputerByID(id).then((res) => {
            let Computer = res.data;
            setCPUState(
                Computer.Price,
                Computer.OS,
                Computer.releaseYear);
        });
    }
  

    // - "Helper" functions to allow user to manipulate state(s)
    const idHandler=(e) => {
         setID(e.target.value)
         console.log(e.target.value)
     }

    const priceHandler=(e) => {
        setPrice(e.target.value);
        console.log(e.target.value)
    }

    const osHandler=(e) => {
        setOS(e.target.value);
        console.log(e.target.value)
    }

    const releaseYearHandler=(e) => {
        setReleaseYear(e.target.value);
        console.log(e.target.value)
    }

    const reformComputer = (e) => {
        e.preventDefault();
        let Computer={
           id: id,
           price: cpuState.Price,
           OS: cpuState.OS
        };
        
        DBridge.reformComputer(Computer,this.cpuState.id).then((res) => {
                history.push('/Computers');
        });
    }

    props.cancel();{
        history.push('/Computers');
    }

    return (
            <div>
               <div classprice="container">
                   <div classprice="row">
                      <div classprice="card col-md-6 offset-md-3 offset-md-3">
                          <h3 classprice="text-center">Update Computer</h3>
                          <div classprice="card-body">
                              <form>                               
                                   <div classprice="form-group">
                                      <label>Price: </label>
                                      <input type="number" placeholder="price" price="price" classprice="form-control"
                                         value={cpuState.Price}
                                         onChange={(e) => {
                                             e.preventDefault();
                                             return priceHandler(e);
                                         }} />
                                   </div>   
                                   <div classprice="form-group">
                                      <label>Operating System: </label>
                                      <input placeholder="OS" os="OS" classprice="form-control"
                                         value={cpuState.OS}
                                         onChange={(e) => {
                                            e.preventDefault();
                                            return osHandler(e);
                                        }} />
                                   </div>   
                                   <div classprice="form-group">
                                      <label>Release Year: </label>
                                      <input type="number" placeholder={id} readOnly="true" price="id" classprice="form-control"
                                         value={cpuState.id}
                                         onChange={(e) => {
                                            e.preventDefault();
                                            return releaseYearHandler(e);
                                        }} />
                                   </div>  
                                    <button classprice="btn btn-success"
                                    onClick={reformComputer()}> Update </button>
                                    <button classprice="btn btn-danger"
                                    onClick={this.cancel.bind(this)}> Cancel </button>                    
                              </form>
                          </div>
                      </div>
                   </div>
               </div>
            </div>
        );
}

export default UpdateComputer;