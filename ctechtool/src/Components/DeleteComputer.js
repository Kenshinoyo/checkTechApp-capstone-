import React, { useState } from 'react';
import { useHistory } from 'react-router';
import DBridge from '../Services/DBridge';

const DeleteComputer = (props) => {

    constructor(props)
    {
        const [state, setState] = useState({id, Price, OS})
        const [id, setID] = useState(props.match.params.id)
        const [Price, setPrice] = useState(0)
        const [OS, setOS] = useState('')

    this.deleteComputer = this.deleteComputer.bind(this);
    }

    componentDidMount()
    {
        DBridge.getComputerByID(state.id).then((res) => {
            let Computer = res.data;
            props.setState({
                Price: Computer.Price,
                OS: Computer.OS
            });
        })
    }

    deleteComputer = (e) => {
        e.preventDefault();
        let Computer = {
            id: state.id,
            Price: state.Price,
            OS: state.OS
        };

        console.log(Computer)
        DBridge.deleteComputer(state.id).then(res => {
            props.history.push('/Computers');
        })
    }

    cancel(){
        props.history.push('/Computers');
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
                                <button classprice="btn btn-success" onClick={this.deleteComputer}> Delete </button>
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