import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavBar = ({ selected_page, handleChange }) => (
    <div>
        <nav className = {'nav ' + selected_page}>
            <ol>
                <li onClick = {handleChange}><Link to='/' id='home'>Home</Link></li>
                <li onClick = {handleChange}><Link to='/build' id='Build'>Build</Link></li>
            </ol>
        </nav>
    </div>
);

NavBar.propTypes = {
    selected_page: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default NavBar;