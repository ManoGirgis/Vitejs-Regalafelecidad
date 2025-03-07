import React, { useState } from 'react';
import Search from './Search';
import regalexiaLogo from '../../assets/logo-regalexia.png';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const Header1 = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav className="container mx-auto font-nunito">
            <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="relative inline-flex items-center justify-center rounded-md p-2 text-rgx-text hover:bg-white-700 hover:text-gray focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    >
                        {menuOpen ? (
                            <svg width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                        ) : (
                            <svg width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
                        )}
                    </button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex flex-shrink-0 items-center">
                        <img className="h-8 w-auto" alt="Regalexia" id="logo" src={regalexiaLogo} />
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                        <Search />
                    </div>
                </div>
                <div>
                    {/* Profile dropdown */}
                    <div className='flex'>
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                        <svg  width="28"  height="28"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.7"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-user-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" /></svg>
                        </button>
                        {dropdownOpen && (
                            <div className="absolute right-0 z-10 mt-6 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700">Tu perfil</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700">Configuraciones</a>
                                <a href="/login" className="block px-4 py-2 text-sm text-gray-700">Inicio de sesión</a>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="sm:hidden px-2 pb-3 pt-2">
                    <Search />
                    {/* Puedes agregar más elementos de navegación aquí */}
                </div>
            )}
        </nav>
    );
};

export default Header1;
