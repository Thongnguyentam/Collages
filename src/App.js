import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './pages/Navbar';
import Content from './pages/Content';
import List from './pages/List';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
    return (
        <Router>
            <Navbar />
            <Content />
            <List />
        </Router>
    );
}
export default App;