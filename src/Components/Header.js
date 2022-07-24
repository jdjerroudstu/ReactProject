import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Header.css'

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

            <h1>Trouvez tous les films de votre choix</h1>
            <h2>Nouveaux films, anciens, classiques ...</h2>
            
        </div>
    );
};

export default Header;