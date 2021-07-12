import { Button, Form, Navbar, Col } from 'react-bootstrap'
import FeatherIcon from 'feather-icons-react';
import '../App.css';
import Image from 'react-bootstrap/Image'

function NavMenu(props) {
    if (!props.loggedIn)
        return (
                <Navbar sticky = "top" variant="blue" className="justify-content-between navColor" >
                    <Col xs={1}></Col>
                    <Form inline className = "text-center mx-auto">
                        <strong><Image className = "logo" src = {'./poli.png'} /></strong>
                        <Navbar.Text className="ml-5 text-white fontMemeTitle">Politecnico di Torino MG</Navbar.Text>
                    </Form>
                    <div className = "text-right">

                        <Button variant="outlined" color="primary" onClick={() => { props.isClicked(true) }}>
                            <h5>
                                <Navbar.Text className="text-light" > Login </Navbar.Text>
                                <FeatherIcon icon="user" className="text-light" />
                            </h5>

                        </Button>
                    </div>
                </Navbar >
        )
    else
        return (
            <Navbar sticky = "top" variant="blue" className="justify-content-between navColor">
                <Form inline className = "">
                    <strong ><Image className = "logo" src = {'./poli.png'} /></strong>
                    <Navbar.Text className="ml-5 text-white fontMemeTitle">Politecnico di Torino MG</Navbar.Text>
                </Form>    
                <div className = "logoLogged p-2">
                    <Navbar.Text className="text-white"><h5>{props.username}</h5></Navbar.Text>
                </div>
                <div>
                    
                    <Button variant="outlined" className = "mt-1" color="primary" onClick={() => { props.setLoggedIn(false) }}>
                        <h5>
                        <Navbar.Text className="text-white" > Logout </Navbar.Text>
                        <FeatherIcon icon="log-out" className="text-light" />
                        </h5>
                    </Button>
                    
                </div>
            </Navbar >
        );

}

export default NavMenu;