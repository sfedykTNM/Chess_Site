import React from 'react';
import logo from './logo.svg';
import './App.css';
import {SidebarComponent} from "./components/sidebar/sidebar-component";
import LoginComponent from "./components/login/login-component";
function App() {
    return (
        <div className="App-header">
            <LoginComponent/>
        </div>
    );
}

export default App;
