import React from 'react';
import Add from './components/add-homeless/add.js';
import { BrowserRouter ,Switch , Route }  from 'react-router-dom';
import ButtonAppBar from './components/layout/navbar';
import SignIn from './components/auth/SignIn.js';
import SignUp from './components/auth/SignUp.js';

// marker icon code

//class components
class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
           <div id="coantiner">
              <ButtonAppBar/>
              <Switch>
                <Route path="/signin" component={SignIn}/>
                <Route path="/signup" component={SignUp}/>
                <Route path="/add" component={Add}/>
              </Switch>
           </div>
      </BrowserRouter>
    );
  }
}
export default App;
