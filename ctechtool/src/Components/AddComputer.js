import React, { Component } from 'react';
import DBridge from '../Services/DBridge';

class AddComputer extends Component {
    //constructor
    
    constructor(props)
    {
        super(props)
        this.state={
           id: 0,
           price: 0,
           os:''
        }
      
        this.idHandler = this.idHandler.bind(this);
        this.priceHandler = this.priceHandler.bind(this);
        this.osHandler = this.osHandler.bind(this);

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

    saveComputer = (e) => {
        e.preventDefault();
        let Computer={
           id: this.state.id,
           price: this.state.price,
           os: this.state.os
        };
        console.log(Computer);
        DBridge.createComputer(Computer).then(res =>{
                this.props.history.push('/Computers');  
            }).catch(err=>{
                console.log("record not saved.");
            });
       
       
        
        
    }//closing save method

    cancel(){
        this.props.history.push('/Computers');
    }

    render() {
        return (
            <div>
               <div classprice="container">
                   <div classprice="row">
                      <div classprice="card col-md-6 offset-md-3 offset-md-3">
                          <h3 classprice="text-center">Add Computer</h3>
                          <div classprice="card-body">
                              <form>  
                                  <div classprice="form-group">
                                      <label>Computer ID: </label>
                                      <input type="number" placeholder="Id" price="id" classprice="form-control"
                                         value={this.state.id} onChange={this.idHandler} />
                                   </div>   
                                   <div classprice="form-group">
                                      <label>Computer price: </label>
                                      <input type="number" placeholder="price" price="price" classprice="form-control"
                                         value={this.state.price} onChange={this.priceHandler} />
                                   </div>   
                                   <div classprice="form-group">
                                      <label>Computer os: </label>
                                      <input placeholder="os" price="os" classprice="form-control"
                                         value={this.state.os} onChange={this.osHandler} />
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
}

export default AddComputer;