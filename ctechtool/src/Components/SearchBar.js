// import React, { useState, useEffect } from 'react';
// import searchFunction from '../DBActions';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';


// // import Results from './Results';


// const mapStateToProps = (state) => {
//     return { computerResults: state.dbResults.computerResults }

// }

// const SearchBar = (props) => {

//     const [userInput, setUserInput] = useState("");
//     const [searchQuery, setSearchQuery] = useState(""); //<--Ensures searchFunction only uses the user's completed input

//     // - Conditional statement to trigger async function every time the "userInput" state changes
//     useEffect(() => { props.searchFunction(searchQuery) }, [searchQuery])

//     //- Display results on console
//     console.log(props.computerResults);





//     return (
//         <div>
//             <form className="searchForm"
//                 onSubmit={(e) => {
//                     e.preventDefault()
//                     setSearchQuery(userInput)
//                     setUserInput("")
//                 }}
//             >
//                 <div className="ui form">
//                     <div className="field">
//                         <label>Search: </label>
//                         <input
//                             type="text"
//                             onChange={(e) => {
//                                 return setUserInput(e.target.value);
//                             }}
//                             value={userInput}
//                         />
//                         <button type="submit"> 
//                             <Link to="/results">Submit</Link>
//                         </button>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     )
// };

// export default connect(mapStateToProps, { searchFunction })(SearchBar);