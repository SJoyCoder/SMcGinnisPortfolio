import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <footer id="contact">
            <h3>Contact</h3>
            <ul>
                <li>
                    <a href="mailto:sjoymcginnis@gmail.com">Email: sjoymcginnis@gmail.com</a>
                </li>
                <li>
                    Phone: (940)390-2177
                </li>
                <li>
                    Git Hub: <a href="https://github.com/SJoyCoder">sjoycoder</a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;