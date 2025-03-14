import { useEffect } from 'react';
import React, { use } from 'react';
import Carrito from './Carrito';
import FetchingPut from '../Api/FetchingPut';

const Carritoerr = () => {



    return (
        <>
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Error:</strong>
                <span className="block sm:inline"> Ha ocurrido un error al procesar el pago.</span>
            </div>
            <Carrito
                error={1}
            />
        </>
    );
};

export default Carritoerr;
