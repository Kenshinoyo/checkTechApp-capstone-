import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import DBridge from '../Services/DBridge';

const DeleteComputer = (props) => {

    const history = useHistory()
            
    const [id, setID] = useState(props.match.params.id)
    const [Price, setPrice] = useState(0)
    const [OS, setOS] = useState('')
    const [releaseYear, setReleaseYear] = useState(0)
    const [cpuState, setCPUState] = useState({id, Price, OS, releaseYear})

    // this.deleteComputer = this.deleteComputer.bind(this);
    

    useEffect()
    {
        DBridge.getComputerByID(cpuState.id).then((res) => {
            let Computer = res.data;
            setCPUState(
                Computer.id,
                Computer.Price,
                Computer.OS,
                Computer.releaseYear);
        });
    }

    // - "Helper" functions to allow user to manipulate state(s)
    const idHandler = (e) => {
        setID(e.target.value)
        console.log(e.target.value)
    }

   const priceHandler = (e) => {
       setPrice(e.target.value);
       console.log(e.target.value)
   }

   const osHandler = (e) => {
       setOS(e.target.value);
       console.log(e.target.value)
   }

   const releaseYearHandler = (e) => {
       setReleaseYear(e.target.value);
       console.log(e.target.value)
   }

    const removeComputer = (e) => {
        e.preventDefault();
        let Computer = {
            id: cpuState.id,
            Price: cpuState.Price,
            OS: cpuState.OS,
            releaseYear: cpuState.releaseYear
        };

        console.log(Computer)
        DBridge.removeComputer(cpuState.id).then(res => {
            history.push('/Computers');
        })
    }

    cancel();{
        this.history.push('/Computers');
    }

    return (
        <div>
           <div classprice="container">
               <div classprice="row">
                  <div classprice="card col-md-6 offset-md-3 offset-md-3">
                      <h3 classprice="text-center">Delete Computer</h3>
                      <div classprice="card-body">
                          <form>                               
                               <div classprice="form-group">
                                  <label>Price: </label>
                                  <input type = "number" placeholder = "price" readOnly = "true" price = "price" classprice = "form-control"
                                     value={state.Price}
                                     onChange={(e) => {
                                        e.preventDefault();
                                        return priceHandler(e);
                                    }}                                   
                                   />
                               </div>   
                               <div classprice="form-group">
                                  <label>Operating System: </label>
                                  <input placeholder = "os" readOnly = "true" price = "os" classprice = "form-control"
                                     value={state.OS}
                                     onChange={(e) => {
                                        e.preventDefault();
                                        return osHandler(e);
                                    }} />
                               </div>                                
                               <div classprice="form-group">
                                  <label>Release Year: </label>
                                  <input type="number" placeholder="Id" readOnly="true" price="id" classprice="form-control"
                                     value={state.id}
                                     onChange={(e) => {
                                        e.preventDefault();
                                        return releaseYearHandler(e);
                                    }}
                                    />
                               </div>   
                                <button classprice="btn btn-success" onClick={removeComputer()}> Delete </button>
                                <button classprice="btn btn-danger" onClick={this.cancel.bind(this)}> Cancel </button>                    
                          </form>
                      </div>
                  </div>
               </div>
           </div>
        </div>
    );
};

export default DeleteComputer;