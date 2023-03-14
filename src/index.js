import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';
import Menu from './asset/menu'
import Search from './asset/search';
import Box from './asset/box';  
import Find from './asset/find';
import Settings from './asset/settings';
import Login from './asset/login';
import User from './asset/user';
  class App extends React.Component {

    render() {
      return (
            <div>
            <Router> 
             
              <Search />
             
                
               
                <Menu />
              <Routes>        
              <Route exact path='/' element={<Box />}></Route>
              <Route exact path='/find' element={<Find />}></Route>
           
              <Route exact path='/userinfo' element={< User/>}></Route>
              <Route exact path='/settings' element={< Settings/>}></Route>
              <Route exact path='/login' element={< Login/>}></Route>
          </Routes>
                 
               </Router>
            </div>      
      );
    }
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
 
