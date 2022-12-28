import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import Menu from './asset/menu'
import Search from './asset/search';
import Box from './asset/box';  
import  {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
  class App extends React.Component {

    render() {
      return (
            <div>
              <Search />
             
                <Box />
               
                <Menu />
              
                          
          <Route exact path='/' element={< Search />}></Route>
          <Route exact path='/about' element={< Box />}></Route>
          <Route exact path='/contact' element={< Menu/>}></Route>
                        
            </div>      
      );
    }
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
  