import React, { useEffect, useState } from 'react';

const Header2 = () => {
    const [carrito, setCarrito] = useState(0);
    const [price, setPrice] = useState("0.00");

    // Función para actualizar el estado del header basado en localStorage
    const updateCartInfo = () => {
        try {
            const cart = JSON.parse(localStorage.getItem('Product')) || [];
            const appointments = JSON.parse(localStorage.getItem('appointments')) || [];

            const totalCart = [...cart, ...appointments]; // Unir ambos arrays
            const totalPrice = totalCart.reduce((sum, product) => sum + (product.price * (product.quantity || 1)), 0);

            setCarrito(totalCart.length);
            setPrice(totalPrice.toFixed(2));
        } catch (error) {
            setCarrito(0);
            setPrice("0.00");
        }
    };

    // Cargar datos iniciales y escuchar cambios en localStorage
    useEffect(() => {
        updateCartInfo();
        window.addEventListener("storage", updateCartInfo); // Escuchar cambios en localStorage

        return () => {
            window.removeEventListener("storage", updateCartInfo);
        };
    }, []);

    return (
        <header className='bg-rgx-blue flex items-center h-12 font-nunito'>
            <nav className='container mx-auto flex justify-between'>
                <ul className='flex text-white gap-4 text-base'>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/consejos-para-padres">Consejos para padres</a></li>
                    <li><a href="/experiencias">Productos</a></li>
                </ul>                
                <ul className='flex gap-3'>
                    <li className='text-base text-white'>{price} €</li>
                    <div className='relative pr-2'>
                        <li>
                            <a href="/carrito" className="text-rgx-yellow">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-bag">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z" />
                                    <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
                                </svg>
                            </a>
                        </li>
                        <span className="bg-rgx-text px-2 rounded-4xl text-white text-xs absolute bottom-0 left-3">{carrito}</span>
                    </div>
                </ul>
            </nav>
        </header>
    );
}

export default Header2;
