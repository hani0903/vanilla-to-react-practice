import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="h-12 flex items-center justify-center shadow-dark z-20 w-full bg-white">
            <div className="flex justify-between w-[90vw] max-w-fixed my-0 mx-auto">
                <h1 className="mb-0 text-primary-5 font-bold">Color flipper</h1>
                <nav>
                    <ul className="flex gap-2">
                        <li>
                            <NavLink to="/">rgb</NavLink>
                        </li>
                        <li>
                            <NavLink to="/hex">hex</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
