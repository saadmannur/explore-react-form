import React, { use } from 'react';
import { MoneyContext } from './FamilyTree';

const Friend = () => {
    
    const [money , setMoney] = use(MoneyContext)

    return (
        <div>
            <h2>hello</h2>
            <button onClick={()=>{setMoney(money + 20000)}}>Add 20000 tk</button>
        </div>
    );
};

export default Friend;