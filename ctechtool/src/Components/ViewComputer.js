import React, { Component } from 'react';
import DBridge from '../Services/DBridge';

class ViewComputer extends Component {
    
    //constructor
    constructor(props)
    {
        super(props)
        
             this.state={
                 id: this.props.match.params.id,
                 computer:{}
             }
     
        
        
    }

     componentDidMount()
     {
        DBridge.getcomputerById(this.state.id).then((res) =>{
            this.setState({computer:res.data})
         });
     }
     
    
    render() {
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
                                    <input placeholder={this.state.computer.id} readOnly={true} name="id" className="form-control" />
                                   </div>   
                                   <div className="form-group">
                                      <label>Price: </label>
                                      <input type="number" placeholder={this.state.computer.price} readOnly={true} name="name" className="form-control" />
                                   </div>   
                                   <div className="form-group">
                                      <label>OS: </label>
                                      <input placeholder={this.state.computer.os} readOnly={true} name="grade" className="form-control" />
                                   </div> 
                                                                     
                              </form>
                          </div>
                      </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default ViewComputer;