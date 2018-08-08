import React, { Component } from "react";
import NavBar from "../presentational/NavBar";

class NavigationContainer extends Component {
    constructor() {
        super();
        this.state = {
            selected_page: "/"
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ selected_page:  event.target.id});
    }

    render() {
        return (
            <NavBar
                selected_page = {this.state.selected_page}
                handleChange={this.handleChange}
            />
        );
    }
}

export default NavigationContainer;
