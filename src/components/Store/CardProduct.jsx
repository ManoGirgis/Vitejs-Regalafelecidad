import React from 'react';

export default function CardProduct({ id, image, imageAlt, title, text, click, type }) {
    return (
        <li 
            className="bg-white rounded-lg shadow-md border border-rgx-blue overflow-hidden transform transition duration-300 hover:scale-105"
        >
            {/* Imagen del producto */}
            <a onClick={() => click(id, type)} className="block">
                <img 
                    src={image} 
                    alt={imageAlt} 
                    className="w-full h-52 object-cover rounded-t-lg"
                />
            </a>

            {/* Contenido del producto */}
            <div className="p-4 relative">
                {/* Icono superior derecho */}
                <div className="flex justify-end absolute right-2 -top-8">
                    <img 
                        src="https://regalexia.com/wp-content/uploads/2023/04/creativo-negativo.png"
                        alt="category-icon" 
                        className="w-14 h-14"
                    />
                </div>

                {/* Título */}
                <h3 
                    className="text-lg font-semibold text-center text-rgx-blue mt-3"
                >
                    <a onClick={() => click(id, type)}>{title}</a>
                </h3>

                {/* Detalles */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-rgx-text text-sm justify-between">
                    {/* Ubicación */}
                    <div className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
                        </svg>
                        <p>Barcelona</p>
                    </div>

                    {/* Duración */}
                    <div className="flex items-center justify-end gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <p>2:00 h</p>
                    </div>

                    {/* Precio */}
                    <div className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <p>Desde {text}€</p>
                    </div>

                    {/* Grupo */}
                    <div className="flex items-center justify-end gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
                        </svg>
                        <p>Grupal</p>
                    </div>
                </div>
            </div>
        </li>
    );
}
