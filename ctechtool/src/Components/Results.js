// import React, { useEffect } from 'react';
// import searchFunction from '../DBActions';
// import { connect } from 'react-redux';


// const mapStateToProps = (state) => {
//     return { computerResults: state.dbResults.computerResults }

// }

// const Results = (props) => {

//      // const [searchResult, setSearchResult] = useState("");
       

//      // - Conditional statement to trigger async function every time the "userInput" state changes
//     useEffect(() => { props.searchFunction(props.searchQuery) }, [props.searchQuery])

// //     //- Create a list of our results
// //     console.log(props.computerResults);

// // const fetchResult = (props) => {
// //     console.log(props.searchQuery.payload) 
// //      return (
// //          <div>
// //              sample
// //              {props.searchQuery.payload}
// //          </div>
// //      )
// //  }



//     return (
//         <div>
            
//             {/* <h1> { props.searchQuery.payload.data.poster } </h1>
//             <p> { props.searchQuery.payload } </p> */}

//          </div>
//     )
// };

// export default connect(mapStateToProps, { searchFunction })( Results );