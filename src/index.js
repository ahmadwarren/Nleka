import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import './index.css';
import Menu from './asset/menu'
import Search from './asset/search';
import Box from './asset/box';  
//import Resto from './asset/resto'; 

  class App extends React.Component {
// ,LinkRouter,Routes,
    render() {
      return (
            <div>
              {/* <Search />
             
                <Box />
               
                <Menu /> */}
              
        <Router> 
        <Link to="./">Home</Link>
          <Routes>        
            <Route exact path='/' element={< Search />}></Route>
            <Route exact path='/user' element={< Box />}></Route>
            <Route exact path='/resto' element={< Menu/>}></Route>
          </Routes> 
        </Router>              
            </div>      
      );
    }
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
  