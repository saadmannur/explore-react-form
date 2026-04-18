import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Spicial = ({ asset }) => {

    const newAsset = useContext(AssetContext);
    console.log(newAsset); //kono prokar prop drilling cara ata niye assi\\

    return (
        <div>
            <h4>special</h4>
            <h5>Asset: {asset}</h5>
            <p>New Asset: {newAsset}</p>
        </div>
    );
};

export default Spicial;