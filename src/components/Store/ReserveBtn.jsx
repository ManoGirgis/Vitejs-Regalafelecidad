import React, { useState } from 'react';

const Reservarbtn = ({ prod, date, time }) => {
    const [quantity, setQuantity] = useState(1);

    const ToCart = () => {
        let cart = JSON.parse(localStorage.getItem('appointments')) || [];

        const productToAdd = {
            id: prod.id,
            name: prod.name,
            price: prod.price,
            fecha: date,
            hora: time,
            quantity: quantity
        };

        const existingProductIndex = cart.findIndex(item => item.id === productToAdd.id);
        if (existingProductIndex !== -1) {
            cart[existingProductIndex].quantity += quantity;
        } else {
            cart.push(productToAdd);
        }

        // Guardar en localStorage
        localStorage.setItem('appointments', JSON.stringify(cart));

        // Mostrar mensaje de éxito
        alert(`${prod.name} ha sido reservado y añadido a tu carrito.`);

        // Recargar la página para actualizar el carrito
        window.location.reload();
    }

    return (


        
        <div className="flex flex-col items-start gap-4 mt-6 bg-gray-100 p-4 rounded-md">
            <p className="text-rgx-text text-sm">Reservación sujeta a confirmación</p>
            {/* Selector de cantidad */}
            <div className="flex items-center">
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

            {/* Botón para reservar */}
            <button 
                onClick={ToCart} 
                className="w-full bg-rgx-yellow text-rgx-text py-3 rounded-md text-lg font-semibold mt-2 hover:bg-yellow-600 transition flex items-center justify-center gap-4"
            >
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M12.5 17h-6.5v-14h-2" /><path d="M6 5l14 1l-.86 6.017m-2.64 .983h-10.5" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>
                Reservar
            </button>
        </div>
    );
}

export default Reservarbtn;
