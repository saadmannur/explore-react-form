import React from 'react';
import Spicial from './Spicial';

const Myself = ({ asset }) => {
    return (
        <div>
            <h3>Myself</h3>
            <Spicial asset={asset}></Spicial>
        </div>
    );
};

export default Myself;