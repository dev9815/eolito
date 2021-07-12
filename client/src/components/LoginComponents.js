import { Form, Button, Alert, Col, Container, Row, Card } from 'react-bootstrap';
import { useState } from 'react';
import API from '../API.js'
import '../App.css';

const doLogIn = async (credential, setLoggedIn, isClicked) => {
  try {
    const user = await API.logIn(credential);
    setLoggedIn(true);
    isClicked(false);
    return user;
  } catch (err) {
    console.log("errore login " + err);
    return false;
  }
}

function LoginForm(props) {
  const [username, setUsername] = useState('s288034@studenti.polito.it');
  const [password, setPassword] = useState('davide');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage('');
    const credential = { username, password };
    let valid = true;
    if (username === '' || password === '') valid = false;
    const ok = await doLogIn(credential, props.setLoggedIn, props.isClicked)
    
    if (!valid || ok === false) {
      setErrorMessage('Username o password errati')
    } else {
      props.setUsername(ok.name)
    }
  };

  return (
    <Container className = "bg">
      <Row className="justify-content-md-center bg2 loginAnimation loginFadeIn">
        <Col xs lg="4 mt-5 ">
          <Card className = "login p-4 mt-5">
            <Row className="justify-content-md-center mb-4 mt-4">
              <h1 className="fontMemeTitle text-center">Entra se sei un utente creatore </h1>
            </Row>
            <Form className = "">
              {errorMessage ? <Alert variant='danger'>{errorMessage}</Alert> : ''}
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" placeholder="Email" value={username} onChange={ev => setUsername(ev.target.value)} /> 
              </Form.Group>
              <Form.Group className ="mb-2 mt-4" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={ev => setPassword(ev.target.value)} />
              </Form.Group>
              <Form.Group as={Row} className ="mb-2 mt-4">
                <Col>
                  <Button className="login-button w-100" variant="success" type="submit" onClick={handleSubmit} block>
                    Login
                   </Button>
                </Col>
              </Form.Group>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export { LoginForm };