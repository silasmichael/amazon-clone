import React, { useEffect } from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import Navbar from './Navbar'
import Home from './Home'
import Checkout from './Checkout'
import LogIn from './LogIn'
import { useStateValue } from './StateProvider';
import {auth} from "./firebase"
import Register from './Register';
function App() {
  const [{basket,user},dispatch]= useStateValue();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type:"SET_USER",
          user:authUser
        })

      }else{
        dispatch({
          type:"SET_USER",
          user:null
        })

      }
    })
    return () => {
      unsubscribe();
    }
  }, []);
  console.log(user);
  return (
    <Router>
    <div className="App">
        <Switch>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/login">
            <LogIn/>
          </Route>
          <Route path="/checkout">
            <Navbar/>
            <Checkout/>
          </Route>
          <Route path="/">
            <Navbar/>
            <Home/>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
