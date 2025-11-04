import React from 'react';
import LastestProduct from '../lastestproducts/LastestProduct';
const lastestproductsPromise=fetch('http://localhost:3000/latest-products').then(res=>res.json());
const Home = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-5 text-center">Welcome to Our Store</h1>
            <LastestProduct latestproductsPromise={lastestproductsPromise} />
        </div>
    );
};

export default Home;