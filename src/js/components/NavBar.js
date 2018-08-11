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
            <div className='list-item'>
                <Link className='link' to='/' onClick={this.handleChange}>
                    {this.state.selected_page == 'home' ? <img  id='home' src='/assets/icons/active/home.png'/> : <img  id='home' src='/assets/icons/inactive/home.png'/>}
                </Link>
            </div>
            <div className='list-item'>
                <Link className='link' to='/surf' onClick={this.handleChange}>
                    {this.state.selected_page == 'surf' ? <img id='surf' src='/assets/icons/active/surf.png'/> : <img id='surf' src='/assets/icons/inactive/surf.png'/>}
                </Link>
            </div>
            <div className='list-item'>
                <Link className='link' to='/chat' onClick={this.handleChange}>
                    {this.state.selected_page == 'chat' ? <img id='chat' src='/assets/icons/active/chat.png'/> : <img id='chat' src='/assets/icons/inactive/chat.png'/>}
                </Link>
            </div>
            <div className='list-item'>
                <Link className='link' to='/settings' onClick={this.handleChange}>
                    {this.state.selected_page == 'settings' ? <img id='settings' src='/assets/icons/active/settings.png'/> : <img id='settings' src='/assets/icons/inactive/settings.png'/>}
                </Link>
            </div>
        </div>
        );
    }
}

export default NavBar;
