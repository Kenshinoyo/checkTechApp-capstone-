// import React, { Component } from 'react';
// import DBridge from '../Services/DBridge';

// class UpdateComputerV1 extends Component {
    
//     //constructor
    
//     constructor(props)
//     {
//         super(props)
        
//              this.state={
//                  id: this.props.match.params.id,
//                  price: 0,
//                  OS:'',
//                  releaseYear: 0
//              }
     
//         this.idHandler = this.idHandler.bind(this);
//         this.priceHandler = this.priceHandler.bind(this);
//         this.osHandler = this.osHandler.bind(this);
//         this.releaseYearHandler = this.releaseYearHandler.bind(this);
//         this.updateComputer = this.updateComputer.bind(this);

//     }

//      componentDidMount()
//      {
//         DBridge.getComputerByID(this.state.id).then((res) => {
//           let Computer = res.data;
//           this.setState({
//             price: Computer.price,
//             OS: Computer.OS,
//             releaseYear: Computer.releaseYear
//             });
//         });
           
//      }
     
//     idHandler=(event) => {
//         this.setState({
//              id: event.target.value});
//     }

//     priceHandler=(event) => {
//         this.setState({
//            price: event.target.value});
//     }

//     osHandler=(event) => {
//         this.setState({
//              OS: event.target.value});
//     }

//     releaseYearHandler=(event) => {
//         this.setState({
//              releaseYear: event.target.value});
//     }

//    updateComputer = (e) => {
//         e.preventDefault();
//         let Computer={
//            id: this.state.id,
//            price: this.state.price,
//            OS: this.state.OS
//         };
        
//         DBridge.updateComputer(Computer,this.state.id).then((res) => {
//                 this.props.history.push('/Computers');
//         });
      
        
//     }

//     cancel(){
//         this.props.history.push('/Computers');
//     }

//     render() {
//         return (
//             <div>
//                <div classprice="container">
//                    <div classprice="row">
//                       <div classprice="card col-md-6 offset-md-3 offset-md-3">
//                           <h3 classprice="text-center">Update Computer</h3>
//                           <div classprice="card-body">
//                               <form>                               
//                                    <div classprice="form-group">
//                                       <label>Price: </label>
//                                       <input type="number" placeholder="price" price="price" classprice="form-control"
//                                          value={this.state.price} onChange={this.priceHandler} />
//                                    </div>   
//                                    <div classprice="form-group">
//                                       <label>Operating System: </label>
//                                       <input placeholder="OS" price="OS" classprice="form-control"
//                                          value={this.state.OS} onChange={this.osHandler} />
//                                    </div>   
//                                    <div classprice="form-group">
//                                       <label>Release Year: </label>
//                                       <input type="number" placeholder={this.state.id} readOnly="true" price="id" classprice="form-control"
//                                          value={this.state.id} onChange={this.releaseYearHandler} />
//                                    </div>  
//                                     <button classprice="btn btn-success" onClick={this.updateComputer}> Update </button>
//                                     <button classprice="btn btn-danger" onClick={this.cancel.bind(this)}> Cancel </button>                    
//                               </form>
//                           </div>
//                       </div>
//                    </div>
//                </div>
//             </div>
//         );
//     }
// }

// export default UpdateComputerV1;