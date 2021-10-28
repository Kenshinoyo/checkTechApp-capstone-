import React, { Component } from 'react';
import DBridge from '../Services/DBridge';

class AddComputer extends Component {
    //constructor
    
    constructor(props)
    {
        super(props)
        this.state={
           price: 0,
           OS:'',
           releaseYear: 0
        }
      
        this.priceHandler = this.priceHandler.bind(this);
        this.osHandler = this.osHandler.bind(this);
        this.releaseYearHandler = this.releaseYearHandler.bind(this);

    }

    priceHandler=(event) => {
        this.setState({
           price: event.target.value});
    }
   
    osHandler=(event) => {
        this.setState({
             OS: event.target.value});
    }
    
    releaseYearHandler=(event) => {
        this.setState({
             releaseYear: event.target.value});
    }

    saveComputer = (e) => {
        e.preventDefault();
        let Computer={
           price: this.state.price,
           OS: this.state.OS,
           releaseYear: this.state.releaseYear
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
                                      <label>Price: </label>
                                      <input type="number" placeholder="price" price="price" classprice="form-control"
                                         value={this.state.price} onChange={this.priceHandler} />
                                   </div> 

                                   <div classprice="form-group">
                                      <label>Operating System: </label>
                                      <input placeholder="OS" os="OS" classprice="form-control"
                                         value={this.state.OS} onChange={this.osHandler} />
                                   </div>
                                   
                                   <div classprice="form-group">
                                      <label>Release Year: </label>
                                      <input type="number" placeholder="Release Year" releaseYear="Release Year" classprice="form-control"
                                         value={this.state.releaseYear} onChange={this.releaseYearHandler} />
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