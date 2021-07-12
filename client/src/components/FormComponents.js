import { Button, Col, Form, Alert, Row, Container } from 'react-bootstrap'
import React, { useState } from 'react'
import { Meme } from '../memeObject'
import Modal from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image'

function AlertDismissible(props) {
  const show = props.show
  const setShow = props.setShow
  const message = props.message

  return (
      <Alert transition={false} show={show} variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Errore</Alert.Heading>
          <p>
              {message}
          </p>

      </Alert>

  );

}


export function FormComponent(props) {

  const trueComicSans = [true, "Comic Sans Ms"];
  const falseComicSans = [false, "Impact"];
  const trueVisibility = [true, "Pubblico"];
  const falseVisibility = [false, "Protetto"];
  const red = [1, "Rosso"];
  const white = [2, "Bianco"];
  const blue =[3, "Blu"];
  const black =[4, "Nero"];
  const green = [5, "Verde"];

  const [img, setImg] = useState('');
  const [title, setTitle] = useState('');
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [color, setColor] = useState('');
  const [comicSans, setComicSans] = useState('');
  const [visible, setVisible] = useState('');
  
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState(false);
 
  const handleSubmit = (event) => {
    event.preventDefault();
   if(title === ''){  
      setAlertMessage("Inserisci un titolo")
      setShowAlert(true);
      return;
    } else {setShowAlert(false);}

    if(text1 === '' && text2 === '' && text3 === ''){      
      setAlertMessage("Inserisci un testo")
      setShowAlert(true);
      return;
    } else {setShowAlert(false);}
    
    if(visible === 'null' || visible===''){
      setAlertMessage("Inserisci la visibilità")
      setShowAlert(true);
      return;
    } else {setShowAlert(false);}

    if(img === 'null' || img ===''){
      setAlertMessage("Scegli un immagine")
      setShowAlert(true);
      return;
    } else {setShowAlert(false);}

    if(comicSans === 'null' || comicSans ===''){
      setAlertMessage("Scegli un font")
      setShowAlert(true);
      return;
    } else {setShowAlert(false);}

    if(color === 'null' || color ===''){
      setAlertMessage("Scegli un colore")
      setShowAlert(true);
      return;
    } else {setShowAlert(false);}
    
    const memeToAdd = new Meme(0, title, img, text1, text2, text3, comicSans[0], color[0], props.utenteCreatore,  visible[0]);
    props.addMeme(memeToAdd);
    props.setDirty(true);
    setImg('');
    setTitle('');
    setText1('');
    setText2('');
    setText3('');
    setColor('');
    setComicSans('');
    setVisible('');
};

const changeTitle = (event) => { setTitle(event.target.value) }
const changeText1 = (event) => { setText1(event.target.value) }
const changeText2 = (event) => { setText2(event.target.value) }
const changeText3 = (event) => { setText3(event.target.value) }

const changeFont = (selected) => {
  if (selected.target.value === "Comic Sans Ms")
      setComicSans(trueComicSans)
  else
      setComicSans(falseComicSans);
  return selected;
}

const changeVisibility = (selected) => {
  if (selected.target.value === "Pubblico")
      setVisible(trueVisibility);
  else
      setVisible(falseVisibility);
  return selected;
}

const checkText2 = (imageNum) => {
  if(imageNum === 6 || imageNum === 5){
    return true;

  } 
  return false;  
}

const checkText3 = (imageNum) => {
  if(imageNum === 1 || imageNum === 6 || imageNum === 5 || imageNum === 4){
    return true;
  } 
  return false;
}

const changeColor =(selected) => {
  switch (selected.target.value){
    case 'Nero' : setColor(black)
                  break;

    case 'Verde': setColor(green)
                  break;

    case 'Bianco' : setColor(white)
                   break;
  
    case 'Blu': setColor(blue)
                 break;
    default: setColor(red)
  
  }

}
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className = "modal-window"
      animation={false}
    >
      <Modal.Header className = "modalEdit">
        <Modal.Title id="contained-modal-title-vcenter" className = "text-white mx-auto shadowWhite">
          Crea un meme
          </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} className = "cardLogged">
          <Form.Row>
            
            <Form.Group className="mt-1" as={Row}>
              <Form.Label >
                <h4>Scegli un immagine</h4>
            </Form.Label>
              </Form.Group>
            <Form.Group>
              <Container>
                <Row className = "mt-4">
                    <Col xs={6}>
                    <Form.Check 
                      type="radio"
                      label={<Image src="1.jpeg" fluid thumbnail />}
                      name="image"
                      id="Immagine1" 
                      value={img}
                      onClick={() => setImg(1)}
                    />
                    </Col>
                    <Col xs={6}>
                    <Form.Check 
                      type="radio"
                      label={<Image src="2.jpeg" fluid thumbnail />}
                      name="image"
                      id="Immagine2"
                      value={img}
                      onClick={() => setImg(2)}
                      className = "p-4"
                    />
                    </Col>
                    <Col xs={6}>
                    <Form.Check
                      type="radio"
                      label={<Image src="3.jpeg" fluid thumbnail />}
                      name="image"
                      id="Immagine3"
                      value={img}
                      onClick={() => setImg(3)}
                      className = "p-4"
                    />
                    </Col>
                    <Col xs={6}>
                    <Form.Check
                      type="radio"
                      label={<Image src="4.jpeg" fluid thumbnail />}
                      name="image"
                      id="Immagine4"
                      value={img}
                      onClick={() => setImg(4)}
                      className = "mt-5"
                    />
                    </Col>
                    <Col xs={6}>
                    <Form.Check
                      type="radio"
                      label={<Image src="5.jpeg" fluid thumbnail /> }
                      name="image"
                      id="Immagine5"
                      value={img}
                      onClick={() => setImg(5)}
                      className = "p-4"
                    />
                    </Col>
                    <Col xs={6}>
                    <Form.Check
                      type="radio"
                      label={<Image className = "p-2" src="6.jpeg" fluid thumbnail /> }
                      name="image"
                      id="Immagine6"
                      value={img}
                      onClick={() => setImg(6)}
                      className = "p-4"
                    />
                    </Col>
                    
                  
                </Row>
              </Container>
            </Form.Group>

            <Form.Row>
              <Row>
                <Col>
                  <Form.Group as="legend" controlId="formGridEmail">
                    <Form.Label><h5>Titolo</h5></Form.Label>
                    <Row>  
                      <Col>
                        <Form.Control className="" type="title" placeholder="Inserisci il titolo" value={title} onChange={changeTitle} />
                      </Col>
                    </Row>
                  </Form.Group>
                </Col>

                <Col >
                  <Form.Group controlId="formGridState" className = "mt-2">
                    <Form.Label as="legend"><h5>Scegli il font</h5></Form.Label>
                    <Form.Control as="select" value={comicSans[1]} onChange={changeFont}>
                      <option>Font</option>
                      <option style={{fontFamily : "Comic Sans Ms"}}>Comic Sans Ms</option>
                      <option style={{fontFamily: "Impact"}}>Impact</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                
                <Col >
                  <Form.Group  controlId="formGridState" className = "mt-2">
                    <Form.Label as="legend"><h5>Scegli il colore</h5></Form.Label>
                    <Form.Control as="select" value={color[1]} onChange={changeColor}>
                      <option>Colore</option>
                      <option style={{  color:'red' }}>Rosso</option>
                      <option style={{  color:'white' }}>Bianco</option>
                      <option style={{  color:'blue' }}>Blu</option>
                      <option style={{  color:'green' }}>Verde </option>
                      <option style={{  color:'black' }}>Nero </option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>

            </Form.Row>

            <Row className = "mt-4">
              <Col xs ={4}>
            <Form.Group  controlId="formGridPassword">
              <Form.Label as="legend"><h5>Testo 1</h5></Form.Label>
              <Form.Control type="text" placeholder="Inserisci il primo testo" value={text1} onChange={changeText1}/>
            </Form.Group>
            </Col>
            <Col xs={4}>
            <Form.Group  controlId="formGridPassword">
              <Form.Label as="legend"><h5>Testo 2</h5></Form.Label>
              <Form.Control disabled ={checkText2(img)}type="text" placeholder="Inserisci il testo 2" value ={text2} onChange={changeText2} />
            </Form.Group>
            </Col>
            <Col xs={4}>
            <Form.Group  controlId="formGridPassword">
              <Form.Label as="legend"><h5>Testo 3</h5></Form.Label>
              <Form.Control disabled ={checkText3(img)} type="text" placeholder="Inserisci il testo 3" value={text3} onChange={changeText3} />
            </Form.Group>
            </Col>
            </Row>
          </Form.Row>

          <Form.Group className="text-center mt-4" as="legend">          
            <Form.Label><h5>Visibilità</h5></Form.Label>
          </Form.Group>
          <Form.Group >
            <Row >
              <Col xs={4}></Col>
              <Col xs={2}>
              <Form.Check 
                type="radio"
                label="Pubblico"
                name="formHorizontalRadio"
                id="Visibility1"
                value="Pubblico"
                checked={visible[1]==="Pubblico"} 
                onChange={changeVisibility}
                
              /></Col>
              <Col xs={1}>
              <Form.Check
                type="radio"
                label="Protetto"
                name="formHorizontalRadio"
                id="Visibility0"
                value = "Protetto"
                checked={visible[1]==="Protetto"} 
                onChange={changeVisibility}
                
              /></Col>  
            </Row>
          </Form.Group>
          
          <Button variant="success" className = "mt-5 w-100" type="submit"  >Crea Meme</Button>
          <Button onClick={props.onHide} variant = "danger" className = "w-100 mt-3">Chiudi</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer ></Modal.Footer>
      <AlertDismissible show={showAlert} setShow={setShowAlert} message={alertMessage} />
    </Modal>
  );
}

export default FormComponent;



