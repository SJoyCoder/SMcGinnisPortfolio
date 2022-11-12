import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="contact">
            <h3>Contact:</h3>
            <ul>
                <li>
                    <Link href="mailto:sjoymcginnis@gmail.com">Email: sjoymcginnis@gmail.com</Link>
                </li>
                <li>
                    Phone: (940)390-2177
                </li>
                <li>
                    Git Hub: <Link href="https://github.com/SJoyCoder" target="_blank">sjoycoder</Link>
                </li>
                <li>
                    LinkedIn: <Link href="https://www.linkedin.com/in/savannah-mcginnis-3b5700237/" target="_blank">Savannah McGinnis LinkedIn Profile</Link>
                </li>
            </ul>
            <form>
                <label>Name:</label>
                <br></br>
                <input/>
                <br></br>
                <label>Email:</label>
                <br></br>
                <input/>
                <br></br>
                <label>Message:</label>
                <br></br>
                <textarea></textarea>
                <br></br>
                <input className="subBtn" type="submit" value="Submit"/>
            </form>
        </footer>
    );
};

export default Footer;