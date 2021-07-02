import React from 'react';
import NavBar from './components/navBar'
import ProductCards from './components/card'
import Checkout from './components/checkout'
import { Switch, Route, Redirect } from "react-router-dom";
import { useUser } from './context/user'




function App() {

  const { checkingout } = useUser()

  return (
    <div className="App">

    <Switch>

    <Route path='/checkout'>
      { checkingout ?
      <Checkout/>
        :
      <Redirect to="/" />
      }
    </Route>

    <Route path="/">
      <NavBar />
      <br/>
      <ProductCards />
    </Route>

    </Switch>
      
    </div>
  );
}

export default App;
