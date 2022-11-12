import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header>
        <h1>Savannah McGinnis</h1>
            <nav>
                <ul>
                    <li>
                        <Link className="button" to="/">
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link className="button" to="/Projects">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link className="button" to="/Resume">
                            Resume
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>       
    );
};

export default Header;