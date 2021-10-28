import React, { Component } from 'react';
import DBridge from '../Services/DBridge';

class DeleteComputer extends Component {
    
    //constructor
    
    constructor(props)
    {
        super(props)
        
             this.state={
                 id: this.props.match.params.id,
                 Price: 0,
                 OS:''
             }
     
        
        this.deleteComputer = this.deleteComputer.bind(this);

    }

     componentDidMount()
     {
        DBridge.getComputerByID(this.state.id).then((res) =>{
          let Computer = res.data;
          this.setState({
                Price:Computer.Price,
                OS:Computer.OS
                });
        });
           
     }
     
    

    
  deleteComputer = (e) => {
        e.preventDefault();
        let Computer={
           id: this.state.id,
           Price: this.state.Price,
           OS: this.state.OS
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
                                      <label>Price: </label>
                                      <input type = "number" placeholder = "price" readOnly = "true" price = "price" classprice = "form-control"
                                         value={this.state.Price} onChange={this.priceHandler} />
                                   </div>   
                                   <div classprice="form-group">
                                      <label>Operating System: </label>
                                      <input placeholder = "os" readOnly = "true" price = "os" classprice = "form-control"
                                         value={this.state.OS} onChange={this.osHandler} />
                                   </div>                                
                                   <div classprice="form-group">
                                      <label>Release Year: </label>
                                      <input type="number" placeholder="Id" readOnly="true" price="id" classprice="form-control"
                                         value={this.state.id} onChange={this.releaseYearHandler} />
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