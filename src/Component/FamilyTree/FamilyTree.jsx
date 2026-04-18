import React, { createContext, useState } from 'react';
import Grandpa from './Grandpa';
import "./family-tree.css"

export const AssetContext = createContext('');
export const MoneyContext = createContext(0);

const FamilyTree = () => {

    const [money, setMoney] = useState(0);

    const newAsset = "Gold";

    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>
            <h3>Prop drilling</h3>
            <h2>Total Family Money: {money} taka</h2>

            <MoneyContext value={[money, setMoney]}>
                <AssetContext.Provider value={newAsset}>
                    <Grandpa></Grandpa>
                </AssetContext.Provider>
            </MoneyContext>

        </div>
    );
};

export default FamilyTree;