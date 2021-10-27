import React, { Component } from 'react';
import DBridge from '../Services/DBridge';

class DeleteComputer extends Component {
    
    //constructor
    
    constructor(props)
    {
        super(props)
        
             this.state={
                 id: this.props.match.params.id,
                 price: 0,
                 os:''
             }
     
        
        this.deleteComputer = this.deleteComputer.bind(this);

    }

     componentDidMount()
     {
        DBridge.getComputerById(this.state.id).then((res) =>{
          let Computer = res.data;
          this.setState({price:Computer.price,
                  os:Computer.os
                });
        });
           
     }
     
    

    
  deleteComputer = (e) => {
        e.preventDefault();
        let Computer={
           id: this.state.id,
           price: this.state.price,
           os: this.state.os
        };

        console.log(Computer);
        DBridge.deleteComputer(this.state.id).then(res => {
            
            this.props.history.push('/Computers');
        })
      
        
    }

    cancel(){
        this.props.history.push('/Computers');
    }

    render() {
        return (
            <div>
               <div classprice="container">
                   <div classprice="row">
                      <div classprice="card col-md-6 offset-md-3 offset-md-3">
                          <h3 classprice="text-center">Delete Computer</h3>
                          <div classprice="card-body">
                              <form>  
                                  <div classprice="form-group">
                                      <label>Computer ID: </label>
                                      <input placeholder="Id" readOnly="true" price="id" classprice="form-control"
                                         value={this.state.id} onChange={this.idHandler} />
                                   </div>   
                                   <div classprice="form-group">
                                      <label>Computer price: </label>
                                      <input type = "number" placeholder = "price" readOnly = "true" price = "price" classprice = "form-control"
                                         value={this.state.price} onChange={this.priceHandler} />
                                   </div>   
                                   <div classprice="form-group">
                                      <label>Computer os: </label>
                                      <input placeholder = "os" readOnly = "true" price = "os" classprice = "form-control"
                                         value={this.state.os} onChange={this.osHandler} />
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
    }
}

export default DeleteComputer;