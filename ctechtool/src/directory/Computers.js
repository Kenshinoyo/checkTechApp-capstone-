import React from 'react';
import { useHistory } from 'react-router';
import DBCrudTool from '../Components/DBCrudTool';

const Computers = (props) => {
    console.log(props)

    const history = useHistory();

    return (
        <div>
            THIS IS OUR COMPUTER PAGE
            <DBCrudTool history = {history} />
        </div>
    )
};

export default Computers