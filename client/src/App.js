import './App.css';
import './Carousel.css';
import FeatherIcon from 'feather-icons-react';
import Slider from './components/Slider/Slider.js'
import { Project } from './components/Project.js'
import { Management } from './components/Management.js'
import { Team} from './components/Team.js'
import { News } from './components/News.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useState, useRef, useEffect} from 'react';

import {Helmet} from "react-helmet";
import { Structural } from './components/Structural';
import { DataAnalysis } from './components/DataAnalysis';
import { Aerodynamic } from './components/Aerodynamic';
import { It } from './components/It';
import { Electronics } from './components/electronics';
import { Social } from './components/Social';
import { Table } from 'react-bootstrap';
import { Gallery } from './components/Slider/Gallery';
import { Roadmap } from './components/Roadmap';
import { Simulations } from './components/Slider/Simulations';
import { Expositions } from './components/Slider/Expositions';
import { Contact } from './components/Contact';
import { Rotors } from './components/Slider/Rotors';




function RouteElement() {
  return (
    <>
      <Slider />
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

function App() {
  const [loggedIn, setLoggedIn] = useState(false); //no1
  //<Route path="/project" render={() =><>{<Project />}</>} />
  return (  
    <>
    <div className='bg'>
    
    <Helmet>
      <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
      <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
      
      
    </Helmet>
    
    <BrowserRouter basename = "/eolito">
      <Switch>
        <Route exact path="/eolito" element ={<Slider />} />
        <Route path="/project" element ={<Project />} />
        <Route path="/news" element ={<News />} />
        <Route path="/team" element ={<Team />} />
        <Route path="/management" element ={<Management />} />
        <Route path="/structural" element ={<Structural />} />
        <Route path="/dataanalysis" element ={<DataAnalysis />} />
        <Route path="/aerodynamic" element ={<Aerodynamic />} />
        <Route path="/it" element ={<It />} />
        <Route path="/electronics" element ={<Electronics />} />
        <Route path="/social" element ={<Social />} />
        <Route path="/gallery" element ={<Gallery />} />
        <Route path="/roadmap" element ={<Roadmap />} />
        <Route path="/rotors" element ={<Rotors />} />
        <Route path="/simulations" element ={<Simulations />} />
        <Route path="/expositions" element ={<Expositions />} />
        <Route path="/contact" element ={<Contact />} />
      </Switch>
    </BrowserRouter>
      
      

      <div className='footer p-3' style={{backgroundColor:'#80BD57'}}>
        <center>
          <h3>CONTACT US</h3>
          <p className='mt-4'>eolito@polito.it<br/>
          Corso Luigi Einaudi 40, 10128, Torino</p>    
          <a href='https://www.facebook.com/EolitoTeam'>
            <FeatherIcon className='mt-3 text-dark text-footer ' icon="facebook" size="30"/>
          </a>
          <a href='https://www.linkedin.com/company/eolito-engineering-student-team/about/'>
            <FeatherIcon className='mt-3 text-dark text-footer' icon="linkedin" size="30"/>
          </a>
          <a href='https://www.instagram.com/eolito_team/'>
            <FeatherIcon className='mt-3 text-dark text-footer' icon="instagram" size="30"/>
          </a>
          <a href='https://www.youtube.com/channel/UC-Ez5eUFpK5rb7QTLLbaHUg'>
            <FeatherIcon className='mt-3 text-dark' icon="youtube" size="30"/>
          </a>
          <center>
            <Table>
            <td><p className='text-center' >Copyright Eolito</p></td>
            
            <td><p className='text-center'>Privacy Policy</p></td>
          </Table>
          </center>
        </center>
      </div>
      </div>
    </>
  );
}

export default App;

