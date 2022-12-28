import './App.css';
import Slider from './components/Slider/Slider.js'
import { LoginForm } from './components/LoginComponents.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import NavMenu from './components/NavbarComponents.js'
import { useState, useRef, useEffect} from 'react';
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase.js"
import { Dashboard } from './components/dashboard.js';
 
function RouteElement(props) {
  return (
    <>
      <Slider {...props} />
    </>
  );
}

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

function App(props) {
  const [loggedIn, setLoggedIn] = useState(false); //no1
  const [clicked, isClicked] = useState(false);
  /*const [eolito, setEolito] = useState(false);*/
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("dev@gmail.com");
  const [password, setPassword] = useState("Davide");
  const [errorMessage, setErrorMessage] = useState('');
  const [show, setShow] = useState(false);
  
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  console.log("login: " + loggedIn);
 
  const login = async () => {
    console.log("QUI");
    try {
      setLoggedIn(true);
      setErrorMessage('');
      const user = await signInWithEmailAndPassword(auth, email, password);
      isClicked(false);
    } catch (error) {
      setLoggedIn(false);
      setErrorMessage('Username o password errati')
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

 const previousLoggedIn = usePrevious(loggedIn)
  
  return (  
    <Router>
      <div>
        <NavMenu isClicked={isClicked} user={user} loggedIn={loggedIn} setLoggedIn={setLoggedIn} logout={logout}/> 
        <h1>USER: {user?.email}</h1>
        <Switch>
            <Route exact path="/"
              render={() => 
                <>{
                  clicked ? <Redirect to="/login" />: <RouteElement {...props} />
                  }
                </>
                } 
            />

            <Route exact path="/login" 
              render={() =>
                <>{
                  loggedIn ? <Redirect to="/dashboard" /> : <LoginForm login={login} errorMessage={errorMessage} setErrorMessage={setErrorMessage} email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
                  }
                </>
              } 
            />

            <Route exact path="/dashboard"
              render={() => <>{
                loggedIn?
                  <Dashboard {...props} userEmail={user?.email} />
                  : <Redirect to="/" />
                }</>
              }  
              />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

