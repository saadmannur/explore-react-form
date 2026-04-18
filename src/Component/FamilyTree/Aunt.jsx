import React from 'react';
import Cousine from './Cousine';

const Aunt = ({ asset }) => {
    return (
        <div>
            <h2>Aunt</h2>
            <section className='flex'>
                <Cousine name='joo joo'></Cousine>
                <Cousine name='lolly' asset={asset}></Cousine>
            </section>
        </div>
    );
};

export default Aunt;