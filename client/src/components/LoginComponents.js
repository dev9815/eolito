import { Form, Button, Alert, Col, Container, Row, Card } from 'react-bootstrap';
import '../App.css';

import { useState } from 'react';

function LoginForm(props) {
  return (
    <Container className = "bg">
      <Row className="mt-5 justify-content-md-center bg2 loginAnimation loginFadeIn">
        <Col xs lg="4 mt-5 ">
          <Card className = "login p-4 mt-5">
            <Row className="justify-content-md-center mb-4 mt-4">
              <h1 className="fontMemeTitle text-center goodFont">EoliTO LogIN</h1>
            </Row>
            <Form className = "">
              {props.errorMessage ? <Alert variant='danger'>{props.errorMessage}</Alert> : ''}
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" placeholder="Email" value={props.email} onChange={ev => props.setEmail(ev.target.value)} /> 
              </Form.Group>
              <Form.Group className ="mb-2 mt-4" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={props.password} onChange={ev => props.setPassword(ev.target.value)} />
              </Form.Group>
              <Form.Group as={Row} className ="mb-2 mt-4">
                <Col>
                  <Button className="w-100" variant="outline-primary" type="submit" onClick={props.login} block>
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