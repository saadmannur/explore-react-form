import React, { useContext } from 'react';
import { AssetContext } from '../FamilyTree/FamilyTree';
import { TakeBonusContext } from './ProductManagement';

const ProductTable = ({ products }) => {

    const newBonus = useContext(TakeBonusContext); //tower test
    const oldBonus = useContext(TakeBonusContext); //tower test
    console.log(newBonus) //tower test
    console.log(oldBonus) //tower test

    return (
        <div>
            <h3>All products: {products.length}</h3>

            <h3>*test context prop tower* NewBonus :  {newBonus}</h3>
            <h3>*test context prop tower* OldBonus :  {oldBonus}</h3>

            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product. price}</td>
                            <td>{product.quantity}</td>
                            <td></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;