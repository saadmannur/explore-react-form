import React from 'react';
import Cousine from './Cousine';

const Uncle = () => {

    return (
        <div>
            <h2>Uncle</h2>
            <section className='flex'>
                <Cousine name="Ersh"></Cousine>
                <Cousine name="Mike"></Cousine>
            </section>
        </div>
    );
};

export default Uncle;