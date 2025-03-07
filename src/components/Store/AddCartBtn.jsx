import React, { useState } from 'react';

const AddCartBtn = ({ prod }) => {
    const [quantity, setQuantity] = useState(1);

    const ToCart = () => {
        let cart = JSON.parse(localStorage.getItem('Product')) || [];

        const productToAdd = {
            id: prod.id,
            name: prod.name,
            price: prod.price,
            quantity: quantity
        };

        const existingProductIndex = cart.findIndex(item => item.id === productToAdd.id);
        if (existingProductIndex !== -1) {
            cart[existingProductIndex].quantity += quantity;
        } else {
            cart.push(productToAdd);
        }

        // Guardar el carrito actualizado en el localStorage
        localStorage.setItem('Product', JSON.stringify(cart));

        // Mostrar mensaje de éxito con alert
        alert(`${prod.name} ha sido añadido a tu carrito.`);

        // Recargar la página para actualizar el carrito
        window.location.reload();
    }

    return (
        <div className="flex flex-col items-start gap-2 mt-6 bg-gray-100 p-4 rounded-md justify-start">
            {/* Selector de cantidad */}
            <div className="flex items-center justify-start">
                <label htmlFor="Quantity" className="text-rgx-text font-medium mr-2">Cantidad:</label>
                <input
                    id="Quantity"
                    type="number"
                    className="border border-gray-300 rounded-md px-2 py-1 w-16 text-center"
                    min="1"
                    max="100"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, Math.min(100, Number(e.target.value))))}
                />
            </div>

            {/* Botón para añadir al carrito */}
            <button 
                onClick={ToCart} 
                className="flex items-center justify-center w-full bg-rgx-yellow text-rgx-text py-3 rounded-md text-lg font-semibold mt-3 hover:bg-yellow-500 transition"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart-plus">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                    <path d="M12.5 17h-6.5v-14h-2" />
                    <path d="M6 5l14 1l-.86 6.017m-2.64 .983h-10.5" />
                    <path d="M16 19h6" />
                    <path d="M19 16v6" />
                </svg>
                Añadir al carrito
            </button>
        </div>
    );
}

export default AddCartBtn;