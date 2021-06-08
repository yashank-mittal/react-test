import React, { Component } from 'react'
import './App.css';
import Bloglist from './Components/Bloglist';
export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Bloglist/>
            </div>
        )
    }
}
