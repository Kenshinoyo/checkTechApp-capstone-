import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import DBridge from '../Services/DBridge';

const AddComputerV2 = (props) => {
    
    const [state, setState] = useState({Price, OS, releaseYear})
    const [Price, setPrice] = useState(0)
    const [OS, setOS] = useState('')
    const [releaseYear, setReleaseYear] = useState(0)
    

    // - "Helper" functions to allow user to manipulate state(s)
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


    //- Creates a new computer object for DB from user generated values
    const saveComputer = (e) => {
        e.preventDefault();
        let Computer={
            price: state.Price,
            OS: state.OS,
            releaseYear: state.releaseYear
        };

        console.log(Computer);

        DBridge.saveComputer(Computer).then(res =>{
            this.props.history.push('/Computers');
        }).catch(err=>{
            console.log("Record not saved.")
        })
    }// -Closing save method

    props.cancel();{
        this.props.history.push('/Computers');
    }


    return (
        <div>
           <div classprice="container">
               <div classprice="row">
                  <div classprice="card col-md-6 offset-md-3 offset-md-3">
                      <h3 classprice="text-center">Add Computer</h3>
                      <div classprice="card-body">
                          <form> 
                         
                               <div classprice="form-group">
                                  <label>Price: </label>
                                  <input type="number" placeholder="Price" price="Price" classprice="form-control"  
                                     value={state.Price}
                                     onChange={(e) => {
                                         e.preventDefault();
                                         return this.priceHandler(e);
                                     }}                                   
                                    />
                               </div> 

                               <div classprice="form-group">
                                  <label>Operating System: </label>
                                  <input placeholder="OS" os="OS" classprice="form-control"
                                     value={state.OS}
                                     onChange={(e) => {
                                        e.preventDefault();
                                        return this.osHandler(e);
                                    }} />
                               </div>
                               
                               <div classprice="form-group">
                                  <label>Release Year: </label>
                                  <input type="number" placeholder="Release Year" releaseYear="Release Year" classprice="form-control"
                                     value={state.releaseYear}
                                     onChange={(e) => {
                                        e.preventDefault();
                                        return this.releaseYearHandler(e);
                                    }}
                                    />
                               </div>      
                                <button classprice="btn btn-success" onClick={saveComputer()}> Save </button>
                                <button classprice="btn btn-danger" onClick={this.cancel.bind(this)}> Cancel </button>  
                                                  
                          </form>
                      </div>
                  </div>
               </div>
           </div>
        </div>
    );
}

export default AddComputerV2;