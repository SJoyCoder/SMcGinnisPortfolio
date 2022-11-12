import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header>
        <h1>Savannah McGinnis</h1>
            <nav>
                <ul>
                    <li>
                        <Link 
                        href="#about-me" class="button">About Me
                        </Link>
                    </li>
                    <li>
                        <Link 
                        href="#projects" class="button">Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="#resume" class="button">Resume
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>       
    );
};

export default Header;