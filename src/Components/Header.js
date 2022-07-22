import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <ul>
                    <NavLink to="/" className={(nav) => (nav.isActive ? "nav-actuve": "" )}
                    >
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to="/favoris" className={(nav) => (nav.isActive ? "nav-actuve": "" )}
                    >
                        <li>Favoris</li>
                    </NavLink>

                </ul>
            </nav>

            <h1>Votre bibliothèque</h1>
            
        </div>
    );
};

export default Header;