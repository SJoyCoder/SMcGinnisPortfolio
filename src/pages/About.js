import React from 'react';
import profilePic from '../assets/IMG_2257.jpg'

const About = () => {
    return (
        <article id="about-me">
            <img src=
            {profilePic} alt="Savannah McGinnis" id="profile-picture"/>
            <div>
                <h2>About Me</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos distinctio eveniet similique tempora ex alias, sint aliquam iusto ipsum facere, accusantium consequatur inventore veritatis. Nemo possimus officia quisquam molestias sit.</p>
            </div>
        </article>
    );
};

export default About;