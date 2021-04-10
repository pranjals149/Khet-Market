import './App.css';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import BuyorSell from './Components/BuyorSell/BuyorSell'


function App() {

  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          {
            (user) ? (
              <>
                <Route exact path="/login">
                  <Login />
                </Route>

                <Route exact path="/register">
                  <Register />
                </Route>

                <Route exact path="/buyorsell">
                  <BuyorSell />
                </Route>

              </>
            ) : (
              <>
                <Route exact path="/login">
                  <Login />
                </Route>

                <Route exact path="/register">
                  <Register />
                </Route>
              </>
            )
          }

        </Switch>
      </div>
    </Router>
  );
}

export default App;
