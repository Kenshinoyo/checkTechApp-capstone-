import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom;
import DBridge from '../Services/DBridge';

//- Universal tool to allow for manipulation of JSON data
class DBCrudTool extends Component {
      constructor(props)
      {
        super(props)

            this.state = {
            computers:[] 
          }
          this.addComputer=this.addComputer.bind(this);
          this.editComputer=this.editComputer.bind(this);
          this.deleteComputer=this.deleteComputer.bind(this);
          this.viewComputer=this.viewComputer.bind(this);
      }
    
     componentDidMount() {
         DBridge.getComputers().then((res) => {
             this.setState({computers:res.data});
         });
     }
     
     addComputer()
     {
        
        this.props.history.push('/add-computer');
     }

     editComputer(id)
     {
        this.props.history.push(`/update-computer/${id}`);
        
     }

     deleteComputer(id)
     {
        this.props.history.push(`/delete-computer/${id}`);
        // computerService.deletecomputer(id).then(res => {
        //     this.setState({
        //          computer: this.state.computers.filter(computer => computer.id !== id)
        //     })
        // })
        
     }

     viewComputer(id)
     {
        this.props.history.push(`/view-computer/${id}`);
        
     }

    render() {
        return (
            <div>
                <h2 className="text-center">Computer List</h2>
                <div> 
                    <button className="btn btn-primary" onClick={this.addComputer}> Add Computer</button>
                </div>
                <div>
                    <p></p>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Id#</th>
                                <th>Price</th>
                                <th>OS</th>
                                <th>Release Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.computers.map(
                                     computer =>
                                     <tr key={computer.id}>
                                         <td>{computer.id}</td>
                                         <td>{computer.price}</td>
                                         <td>{computer.OS}</td>
                                         <td>{computer.releaseYear}</td>
                                         <td>
                                            <button onClick={() =>this.editComputer(computer.id)} className="btn btn-primary">Update</button> 
                                            <button onClick={() =>this.deleteComputer(computer.id)} className="btn btn-danger">Delete</button> 
                                            <button onClick={() =>this.viewComputer(computer.id)} className="btn btn-primary">View</button> 
                                         </td>
                                     </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default DBCrudTool;