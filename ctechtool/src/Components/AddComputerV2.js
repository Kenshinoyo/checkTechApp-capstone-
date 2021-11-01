import React, { useState } from 'react';
import DBridge from '../Services/DBridge';

const AddComputerV2 = (props) => {

    const [price, setPrice] = useState(0)
    const [OS, setOS] = useState('')
    const [releaseYear, setReleaseYear] = useState(0)

    priceHandler=(e) => {
        setPrice(e.target.value);
        console.log(e.target.value)
    }

    osHandler=(e) => {
        setOS(e.target.value);
        console.log(e.target.value)
    }

    releaseYearHandler=(e) => {
        setReleaseYear(e.target.value);
        console.log(e.target.value)
    }

    saveComputer = (e) => {
        e.preventDefault();
        let Computer={
            price: price,
            OS: OS,
            releaseYear: releaseYear
        };

        console.log(Computer);

        DBridge.createComputer(Computer).then(res =>{
            this.props.history.push('/Computers');
        }).catch(err=>{
            console.log("Record not saved.")
        })
    }// -Closing save method

    cancel(){
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
                                  <input type="number" placeholder="price" price="price" classprice="form-control"  
                                     value={price}
                                     onChange={(e) => {
                                         return priceHandler(e);
                                     }}                                   
                                    />
                               </div> 

                               <div classprice="form-group">
                                  <label>Operating System: </label>
                                  <input placeholder="OS" os="OS" classprice="form-control"
                                     value={OS}
                                     onChange={(e) => {
                                        return osHandler(e);
                                    }} />
                               </div>
                               
                               <div classprice="form-group">
                                  <label>Release Year: </label>
                                  <input type="number" placeholder="Release Year" releaseYear="Release Year" classprice="form-control"
                                     value={releaseYear}
                                     onChange={(e) => {
                                        return releaseYearHandler(e);
                                    }} />
                               </div>      
                                <button classprice="btn btn-success" onClick={this.saveComputer}> Save </button>
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