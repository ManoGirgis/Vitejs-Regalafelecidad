import React, { useEffect, useState } from 'react';
import Card from '../components/Store/CardProduct';
import WoocommerceConnection from '../components/Store/WooCommerce';
import SingleProduct from './SingleProduct';

const Store = () => {

    const { data: products, loading, error } = WoocommerceConnection('products');
    const [selectedProdId, setSelectedProdId] = useState();
    const [type, setType] = useState('appointment');
    const [imagen, setimagen] = useState();

    if (loading) {
        return <div className='text-center'>Cargando...</div>;
    }

    if (error) {
        return <div className='text-center'>Error: {error.message}</div>;
    }
    const setprod = (id, typeee) => {
        setSelectedProdId(id);
        setType(typeee);
    }

    return (
        <div>
            {selectedProdId ? (
                <SingleProduct id={selectedProdId} />
            ) : (
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        <h1 className="text-rgx-blue text-[42px] font-semibold mb-8 font-montserrat">Productos</h1>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.map(product => (
                                <Card
                                    key={product.id}
                                    id={product.id}
                                    title={product.name}
                                    button="Add to cart"
                                    text={product.price}
                                    unit="Euros"
                                    image={product.images[0]?.src}
                                    imageAlt="Product-image"
                                    item="Product"
                                    click={setprod}
                                    type={product.type}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );    
};

export default Store;


