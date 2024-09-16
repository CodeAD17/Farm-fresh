import React, { Component } from 'react'
import { BrowserRouter, Router, Route, Link, Routes, NavLink } from 'react-router-dom';
import Home from './components/home';
import Farmer from './components/farmer';

export class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <div>
        <Routes>
            
            <Route path='/' element={<Home/>}/>
             <Route path='/ble' element={<Farmer/>}/>
              
            </Routes>
        </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
