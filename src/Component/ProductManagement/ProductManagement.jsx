import React, { createContext, useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

export const TakeBonusContext = createContext(''); //tower text

const ProductManagement = () => {

    const newBonus = "10,000 taka" ; //tower test
    const OldBonus = "5,000 taka" ; //tower test

    const [products, setProducts] = useState([])

    const handleAddProduct = (newProduct) => {
        const newProducts = [...products, newProduct];
        setProducts(newProducts)
    }

    return (
        <div>
            <ProductForm
                handleAddProduct={handleAddProduct}
            ></ProductForm>
            <TakeBonusContext.Provider value={newBonus , OldBonus}>
                <ProductTable
                    products={products}
                ></ProductTable>
            </TakeBonusContext.Provider>
        </div>
    );
};

export default ProductManagement;