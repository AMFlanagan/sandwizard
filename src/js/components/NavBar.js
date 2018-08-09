import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.css';

class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            selected_page: 'home'
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({selected_page: event.target.id});
    }

    render() {
        return (
            <div className={'navbar ' + this.state.selected_page}>
                <div className='list-item' onClick={this.handleChange}><Link className='link' to='/' id='home'><img src='/assets/homeIcon.png'/></Link></div>
                <div className='list-item' onClick={this.handleChange}><Link className='link' to='/build' id='build'><h1><img src='/assets/buildIcon.png'/></h1></Link></div>
            </div>
        );
    }
}
// {/* <Link to='/build' id='build'><img src='/assets/buildIcon.png'></img></Link> */}
// {/* <img src='/assets/homeIcon.png'/> */}

export default NavBar;
