import React from 'react';
import DBCrudTool from '../Components/DBCrudTool';

const Computers = (props) => {
    console.log(props)

    return (
        <div>
            THIS IS OUR COMPUTER PAGE
            <DBCrudTool props = {props} />
        </div>
    )
};

export default Computers