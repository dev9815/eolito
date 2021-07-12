import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import { MemeList } from './components/memeListComponents.js'
import { LoginForm } from './components/LoginComponents.js'
import NavMenu from './components/NavbarComponents.js'
import PlusButton from './components/PlusComponents.js'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import API from './API'

function RouteElement(props) {
  return (
    <>
      <MemeList {...props} />
    </>
  );
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false); //no1
  const [username, setUsername] = useState('');
  const [creatorList, setCreatorList] = useState([]);
  const [memeList, setList] = useState([]);
  const [clicked, isClicked] = useState(false);
  const [dirty, setDirty] = useState(true);

  useEffect(() => {
    if (loggedIn) {
      API.loadMemes('/api').then(newM => {
        setList(newM);
        setDirty(false);
      })
    }
  }, [loggedIn])

  useEffect(() => {
    API.loadCreators('/api/userCreator').then(newC => {
      setCreatorList(newC);
      setDirty(false);
    })
  },[])

  useEffect(() => {
    if (!loggedIn) {
      API.loadMemes('/api/visible/1').then(newM => {
        setList(newM)
        setDirty(false)
      });
    }
  }, [!loggedIn])

  useEffect(() => {
    if (loggedIn) {
      API.loadMemes('/api').then(newM => {
        setList(newM);
        setDirty(false);
      });
    }
  }, [dirty])

  useEffect(() => {
    API.loadCreators('api/userCreator').then(newC => {
      setCreatorList(newC);
      setDirty(false);
    });
  }, [dirty])

  const addMeme = (meme) => {
    API.addNewMeme(meme).then(setDirty(true))
  }

  const deleteMeme = (memeId) => {
    API.deleteMeme(memeId).then(setDirty(true))
  }

  return (
    <Router>
      <div>
        <NavMenu isClicked={isClicked} username={username} loggedIn={loggedIn} setLoggedIn={setLoggedIn}></NavMenu>
        <div className="container-fluid backdrop">
          <div className="row vheight-100">
            <Switch>
              <Route exact path="/"
                render={() => 
                <>{
                  clicked ? <Redirect to="/login" />: <RouteElement list={memeList} creatorList={creatorList} setCreatorList={setCreatorList} />
                  }
                </>
                } 
              />
              <Route exact path="/login" render={() =>
                <>{
                  loggedIn ? <Redirect to="/Homepage" /> : <LoginForm isClicked={isClicked} setLoggedIn={setLoggedIn} setUsername={setUsername} />
                  }
                </>
                } 
              />

              <Route exact path="/Homepage"render={() => <>{
                  loggedIn ?
                    <RouteElement list={memeList} loggedIn={loggedIn} setLoggedIn={setLoggedIn} deleteMeme={deleteMeme}
                      addMeme={addMeme} setDirty={setDirty} username={username} creatorList={creatorList} setCreatorList={setCreatorList}
                    />
                    : <Redirect to="/" />
                 }</>
                }  
              />
            </Switch>
            <div className="d-flex justify-content-end fixed-bottom mr-2 mb-2">
              <PlusButton loggedIn={loggedIn} memeList={memeList} username={username} setList={setList} setDirty={setDirty} addMeme={addMeme} />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}



export default App;

