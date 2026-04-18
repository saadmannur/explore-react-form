import React, { use } from 'react';
import Spicial from './Spicial';
import Friend from './Friend';
import { MoneyContext } from './FamilyTree';

const Cousine = ({ name, asset }) => {

    const [money, setMoney] = use(MoneyContext)

    return (
        <div>
            <h3>{name}</h3>
            {
                name == "Mike" && <button onClick={()=>{setMoney(money+50000)}}>Add 50,000 tk</button>
            }

            {
                name == "lolly" && <Spicial asset={asset}></Spicial>
            }
            {
                name == "joo joo" && <Friend></Friend>
            }
        </div>
    );
};

export default Cousine;