import { Button, Form, Navbar, Col } from 'react-bootstrap'
import FeatherIcon from 'feather-icons-react';
import '../App.css';
import Image from 'react-bootstrap/Image'
import * as Icon from 'react-bootstrap-icons';

function NavMenu(props) {
    /*
             <center><div className = "">
                    <Icon.Facebook icon="facebook" className="text-warning" size={40}/>
                    <Icon.Instagram icon="instagram" className="text-warning" size={40}/>
                    <Icon.Linkedin icon="instagram" className="text-warning" size={40}/>
                    <Icon.Youtube icon="instagram" className="text-warning" size={40}/>
                </div>
</center>
    */
    if (props.user?.email)
        return (
            <Navbar sticky = "top" variant="blue" className="justify-content-between navColor" >
                
                <Col xs={0.1}></Col>
                
                <strong className='bounce'>
                    <Image className = "text-center w-25 h-25" src = {process.env.PUBLIC_URL + '/Imgs/title.png'} onClick={()=> props.setEolito(true)}/>
                </strong>
        
                
                <div className = "text-right">
                    <Button variant="outlined" color="primary" onClick={() => { props.setLoggedIn(false); props.logout() }}>
                        <FeatherIcon icon="log-out" className="text-light" size={30}/>
                    </Button>
                </div>
                
                <Col xs={0.1}></Col>
            </Navbar >
        )
    else
        return (
            <Navbar sticky = "top" variant="blue" className="justify-content-between navColor" >
                
                <Col xs={0.1}></Col>
                
                <strong className='bounce'>
                    <Image className = "text-center w-25 h-25" src = {process.env.PUBLIC_URL + '/Imgs/title.png'} onClick={()=> props.setEolito(true)}/>
                </strong>
        
                
                <div className = "text-right">
                    <Button variant="outlined" color="primary" onClick={() => { props.isClicked(true) }}>
                        <FeatherIcon icon="user" className="text-light" size={30}/>
                    </Button>
                </div>
                
                <Col xs={0.1}></Col>
            </Navbar >
        )

}

export default NavMenu;