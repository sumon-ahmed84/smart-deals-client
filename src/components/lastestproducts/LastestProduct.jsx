import React, { use } from 'react';
import Products from '../products/Products';

const LastestProduct = ({ latestproductsPromise }) => {
    const products = use(latestproductsPromise);
    return (
        <div>
            <h2 className="text-3xl font-bold mb-4 text-center">Recent <span className="text-purple-500">Products</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                products.map(product =><Products key={product._id} product={product} />)
            }
        </div>
        </div>
    );
};

export default LastestProduct;