import React, { useState } from 'react';
import DBridge from '../Services/DBridge';
import { useState } from 'react';

const UpdateComputer = (props) => {

    const [id, setID] = useState(this.props.match.params.id)
    const [price, setPrice] = useState(0)
    const [OS, setOS] = useState('')
    const [releaseYear, setReleaseYear] = useState(0)

    componentDidMount()
    {
        DBridge.getComputerByID(id).then((res) => {
            let Computer = res.data;
            this.setState({
                price: Computer.price,
                OS: Computer.OS,
                releaseYear: Computer.releaseYear
            });
        });
    }

     // - "Helper" functions to allow user to manipulate state(s)
     idHandler=(e) => {
         setID(e.target.value)
         console.log(e.target.value)
     }

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

    reformComputer = (e) => {
        e.preventDefault();
        let Computer={
           id: this.state.id,
           price: this.state.price,
           OS: this.state.OS
        };
        
        DBridge.reformComputer(Computer,this.state.id).then((res) => {
                this.props.history.push('/Computers');
        });
    }

    cancel(){
        this.props.history.push('/Computers');
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
                                         value={price}
                                         onChange={(e) => {
                                             e.preventDefault();
                                             return priceHandler(e);
                                         }} />
                                   </div>   
                                   <div classprice="form-group">
                                      <label>Operating System: </label>
                                      <input placeholder="OS" os="OS" classprice="form-control"
                                         value={OS}
                                         onChange={(e) => {
                                            e.preventDefault();
                                            return osHandler(e);
                                        }} />
                                   </div>   
                                   <div classprice="form-group">
                                      <label>Release Year: </label>
                                      <input type="number" placeholder={id} readOnly="true" price="id" classprice="form-control"
                                         value={id}
                                         onChange={(e) => {
                                            e.preventDefault();
                                            return releaseHandler(e);
                                        }} />
                                   </div>  
                                    <button classprice="btn btn-success"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        return reformComputer(e);
                                    }}> 
                                    Update 
                                    </button>
                                    <button classprice="btn btn-danger"
                                    onClick={this.cancel.bind(this)}>
                                    Cancel 
                                    </button>                    
                              </form>
                          </div>
                      </div>
                   </div>
               </div>
            </div>
        );
}

export default UpdateComputer;