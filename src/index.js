import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import Menu from './asset/menu'
import Search from './asset/search';
import Artist from './asset/artist';  
  class App extends React.Component {

    render() {
      return (
            <div>
              <Search />
             
                <Artist />
               
                <Menu />
              
                 
               
            </div>      
      );
    }
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
  