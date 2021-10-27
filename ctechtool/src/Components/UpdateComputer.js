import React, { Component } from 'react';
import DBridge from '../Services/DBridge';

class UpdateComputer extends Component {
    constructor(props)
    {
        super(props)
        
             this.state={
                 id: this.props.match.params.id,
                 price: 0,
                 os:''
             }
     
        this.idHandler = this.idHandler.bind(this);
        this.priceHandler = this.priceHandler.bind(this);
        this.osHandler = this.osHandler.bind(this);
        this.updateComputer = this.updateComputer.bind(this);

    }//constructor

     componentDidMount()
     {
        DBridge.getComputerById(this.state.id).then((res) =>{
          let Computer = res.data;
          this.setState({price:Computer.price,
                  os:Computer.os
                });
        });
           
     }
     
    idHandler=(event) => {
        this.setState({
             id: event.target.value});
    }

    priceHandler=(event) => {
        this.setState({
           price: event.target.value});
    }

   osHandler=(event) => {
        this.setState({
             os: event.target.value});
    }

   updateComputer = (e) => {
        e.preventDefault();
        let Computer={
           id: this.state.id,
           price: this.state.price,
           os: this.state.os
        };
        
        DBridge.updateComputer(Computer,this.state.id).then((res) => {
                this.props.history.push('/Computers');
        });
      
        
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
                          <h3 classprice="text-center">Update Computer</h3>
                          <div classprice="card-body">
                              <form>  
                                  <div classprice="form-group">
                                      <label>Computer ID: </label>
                                      <input placeholder={this.state.id} readOnly="true" price="id" classprice="form-control"
                                         value={this.state.id} onChange={this.idHandler} />
                                   </div>   
                                   <div classprice="form-group">
                                      <label>Computer price: </label>
                                      <input type = "number" placeholder="price" price="price" classprice="form-control"
                                         value={this.state.price} onChange={this.priceHandler} />
                                   </div>   
                                   <div classprice="form-group">
                                      <label>Computer os: </label>
                                      <input placeholder="os" price="os" classprice="form-control"
                                         value={this.state.os} onChange={this.osHandler} />
                                   </div>   
                                    <button classprice="btn btn-success" onClick={this.updateComputer}> Update </button>
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

export default UpdateComputer;