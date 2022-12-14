import React from 'react';
import { Link } from 'react-router-dom';

import happyHoidays from '../assets/HappyHolidaysGiftTracker.png';
import movies from '../assets/MoviesRUs.gif';
import notes from '../assets/Note Taker.gif';
import techBlog from '../assets/TechBlog.png';
import teamRoster from '../assets/GenerateTeamRoster.png';
import weather from '../assets/Weather Dashboard.gif';
import workScheduler from '../assets/Work Day Scheduler.gif';

const Projects = () => {
    return (
        <section id="projects">
        <h2>Projects</h2>
        <ul>
            <li id="showcase-project">
                <h3>Happy Holiday Gift Tracker</h3>
                <Link href="https://safe-taiga-52542.herokuapp.com/">
                <img src={happyHoidays} alt="Happy Holidays Gift Tracker Screenshot"/>
                </Link>
                <Link href="https://github.com/SJoyCoder/HappyHolidaysGiftTracker">Click here for Repo</Link>
            </li>
            <li className="smaller-projects">
                <h3>Movies R Us</h3>
                <Link href="https://drepel97.github.io/MoviesRUs/">
                <img src={movies} alt="MoviesRUs Gif"/>
                </Link>
                <Link href="https://github.com/Drepel97/MoviesRUs">Click here for Repo</Link>
            </li>
            <li className="smaller-projects">
                <h3>Note Taker App</h3>
                <Link href="https://github.com/SJoyCoder/noteTakerApp">
                <img src={notes} alt="Note Taker App Gif"/>
                </Link>
                <Link href="https://github.com/SJoyCoder/noteTakerApp">Click here for Repo</Link>
            </li>
            <li className="smaller-projects">
                <h3>Tech Blog</h3>
                <Link href="https://cryptic-lowlands-37976.herokuapp.com/">
                <img src={techBlog} alt="Tech Blog Screenshot"/>
                </Link>
                <Link href="https://github.com/SJoyCoder/TechBlog">Click here for Repo</Link>
            </li>
            <li className="smaller-projects">
                <h3>Team Roster Generator</h3>
                <Link href="https://sjoycoder.github.io/GenerateTeamRoster/">
                <img src={teamRoster} alt="Team Roster Screenshot"/>
                </Link>
                <Link href="https://github.com/SJoyCoder/GenerateTeamRoster">Click here for Repo</Link>
            </li>
            <li className="smaller-projects">
                <h3>Weather Dashboard</h3>
                <Link href="https://sjoycoder.github.io/Challenge6-WeatherDashboard/">
                <img src={weather} alt="Weather Dashboard"/>
                </Link>
                <Link href="https://github.com/SJoyCoder/GenerateTeamRoster">Click here for Repo</Link>
            </li>
            <li className="smaller-projects">
                <h3>Work Day Scheduler</h3>
                <Link href="https://sjoycoder.github.io/Challenge5-Calendar/">
                <img src={workScheduler} alt="Work Day Scheduler Gif"/>
                </Link>
                <Link href="https://github.com/SJoyCoder/Challenge5-Calendar">Click here for Repo</Link>
            </li>
        </ul>
    </section>
    );
};

export default Projects;