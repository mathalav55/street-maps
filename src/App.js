import React from 'react';
import Maps from './components/map/map.js';
import { BrowserRouter }  from 'react-router-dom';
import ButtonAppBar from './components/auth/navbar.js';
// marker icon code

//class components
class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
           <div id="coantiner">
              <ButtonAppBar/>
              <Maps />
           </div>
      </BrowserRouter>
    );
  }
}
export default App;
