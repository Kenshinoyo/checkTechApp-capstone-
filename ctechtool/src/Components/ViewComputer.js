import React, { useState, useEffect } from 'react';
import DBridge from '../Services/DBridge';

const ViewComputer = (props) => {

    
    const [id, setID] = useState(props.match.params.id)
    const [computer, setComputer] = useState({})

    // - "Placeholder" state for JSON data
    const [state, setState] = useState({id, computer})

    // - Acquires JSON data from back end and applies it for user viewing
    useEffect()
    {
        DBridge.getComputerByID(state.id).then((res) => {
            setState({computer:res.data})
        })
    }

    return (
        <div>
           <div className="container">
               <div className="row">
                  <div className="card col-md-6 offset-md-3 offset-md-3">
                      <h3 className="text-center">View computer Details</h3>
                      <div className="card-body">
                          <form>  
                              <div className="form-group">
                                <label>ID#: </label>
                                <input placeholder={props.state.computer.id} readOnly={true} name="id" className="form-control" />
                               </div>   
                               <div className="form-group">
                                  <label>Price: </label>
                                  <input type="number" placeholder={props.state.computer.price} readOnly={true} name="Price" className="form-control" />
                               </div>   
                               <div className="form-group">
                                  <label>OS: </label>
                                  <input placeholder={props.state.computer.OS} readOnly={true} name="OS" className="form-control" />
                               </div> 
                               <div className="form-group">
                                  <label>Release Year: </label>
                                  <input type="number" placeholder={props.state.computer.releaseYear} readOnly={true} name="Release Year" className="form-control" />
                               </div>                                                     
                          </form>
                      </div>
                  </div>
               </div>
           </div>
        </div>
    );
};

export default ViewComputer;