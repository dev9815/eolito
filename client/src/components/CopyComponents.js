import { Button, Col, Form, Alert, Row } from 'react-bootstrap'
import React, { useState } from 'react'
import { Meme } from '../memeObject'
import Modal from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image'
import "../App.css";

function AlertDismissible(props) {
  const show = props.show;
  const setShow = props.setShow;
  const message = props.message;
  return (
      <Alert transition={false} show={show} variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Attenzione, errore!</Alert.Heading>
          <p>{message}</p>
      </Alert>
  );
}

export function CopyComponent(props) {
  const trueComicSans = [true, "Comic Sans Ms"];
  const falseComicSans = [false, "Impact"];
  const trueVisibility = [true, "Pubblico"];
  const falseVisibility = [false, "Protetto"];
  const red = [1, "Rosso"];
  const white = [2, "Bianco"];
  const blue =[3, "Blu"];
  const black =[4, "Nero"];
  const green = [5, "Verde"];
  
  const visibilityStart = props.memeVisibility ? trueVisibility : falseVisibility;  
  const fontStart = props.meme.comicSans ? trueComicSans : falseComicSans;
  let imageStart=0;
  let colorStart = 0;
 
  switch(props.meme.colore){
    case 1: colorStart = red[0];
            break;
    case 2: colorStart = white[0];
            break;
    case 3: colorStart = blue[0];
            break;
    case 4: colorStart = black[0];
            break;
    case 5: colorStart = green[0];
            break;
    default: colorStart = red[0];
 }

  switch(props.meme.immagine){
    case 1: imageStart="1.jpeg";
            break;
    case 2: imageStart="2.jpeg";
            break;
    case 3: imageStart="3.jpeg";
            break;
    case 4: imageStart="4.jpeg" ;
            break;
    case 5: imageStart="5.jpeg";
            break;
    case 6: imageStart="6.jpeg";
            break;
    default: imageStart = "1.jpeg";
  }
  
  const [title, setTitle] = useState(props.meme? props.meme.titolo : "");
  const [text1, setText1] = useState(props.meme? props.meme.testo1 : "");
  const [text2, setText2] = useState(props.meme? props.meme.testo2 : "");
  const [text3, setText3] = useState(props.meme? props.meme.testo3 : "");
  const [color, setColor] = useState('');
  const [comicSans, setComicSans] = useState('');
  const [visible, setVisible] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    if(title === ''){
      setAlertMessage("Inserisci il titolo")
      setShowAlert(true);
      return;
    } else setShowAlert(false);

    if(text1 === '' && text2 === '' && text3 === ''){
      setAlertMessage("Inserisci il testo")
      setShowAlert(true);
      return;
    } else setShowAlert(false);
    
    if(visible === 'null' || visible===''){
      setAlertMessage("Inserisci la visibilità: pubblica o protetta")
      setShowAlert(true);
      return;
    } else setShowAlert(false);

    if(comicSans === 'null' || comicSans ===''){
      setAlertMessage("Inserisci un font")
      setShowAlert(true);
      return;
    } else setShowAlert(false);

    if(color === 'null' || color ===''){
      setAlertMessage("Scegli un colore")
      setShowAlert(true);
      return;
    } else setShowAlert(false);
    
    const meme = new Meme(0, title, props.meme.immagine, text1, text2, text3, comicSans[0], color[0], props.utenteCreatore,  visible[0]);
    props.addMeme(meme);
    props.setDirty(true);
    setTitle(props.meme.titolo);
    setText1(props.meme.testo1);
    setText2(props.meme.testo2);
    setText3(props.meme.testo3);
    setColor(colorStart);
    setComicSans(fontStart);
    setVisible(visibilityStart);
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

  const checkVisibility = (v) => {
    if(v === "Protetto" && props.loggedIn){    
      for(let i=0;i<3;i++){
        if (props.creatorList[i].Name === props.username){
          if(props.creatorList[i].ID !== props.memeCreator)
            return true;
        }
      }
    } 
    return false;  
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

  const changeColour =(selected) => {
    switch (selected.target.value){
      case 'Rosso' : setColor(red);
                    break;
      case 'Bianco' : setColor(white);
                    break;  
      case 'Blu': setColor(blue);
                  break;      
      case 'Verde': setColor(green);
                    break;
      default: setColor(black);          
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
      animation = {false}
    >
      <Modal.Header className = "modalEdit">
        <Modal.Title id="contained-modal-title-vcenter" className = "mx-auto">
          <h2 className = "shadowWhite text-white">Copia meme</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} className = "cardLogged">
          <Form.Row>
            <Form.Label as="legend" className = "text-center"><h4>Modifica i parametri della tua meme</h4></Form.Label>
            <Form.Group className=" mt-4" as="legend" controlId="formGridEmail">
              <Row>
                  <Form.Label as="legend"><h5>Immagine</h5></Form.Label>
                  <Col className = "text-center">
                    <Image className = "w-75" src={imageStart} fluid thumbnail />
                  </Col>
              </Row>
            </Form.Group>
            <Form.Row>
              <Row>
                  <Col className = "mt-4">
                    <Form.Label><h5>Titolo</h5></Form.Label>
                    <Form.Control type="title" placeholder="Titolo meme" value={title} onChange={changeTitle} />
                  </Col>
                <Col className = "mt-4">
                <Form.Group controlId="formGridState">
                  <Form.Label as="legend"><h5>Scegli il font</h5></Form.Label>
                  <Form.Control as="select" value={comicSans[1]} onChange={changeFont}>
                    <option>Font</option>
                    <option style={{fontFamily : "Comic Sans Ms"}}>Comic Sans Ms</option>
                    <option style={{fontFamily: "Impact"}}>Impact</option>
                  </Form.Control>
                </Form.Group>
                </Col>
                <Col className = "mt-4">
                  <Form.Group controlId="formGridState">
                    <Form.Label as="legend"><h5>Scegli il colore</h5></Form.Label>
                    <Form.Control as="select" value={color[1]} onChange={changeColour}>
                      <option>Colore</option>
                      <option style={{  color:'red' }}>Rosso</option>
                      <option style={{  color:'white' }}>Bianco</option>
                      <option style={{  color:'blue' }}>Blu</option>
                      <option style={{  color:'green' }}>Verde</option>
                      <option style={{  color:'black' }}>Nero</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
            </Form.Row>
            <Row>
              <Col xs ={4}  className = "mt-4">
            <Form.Group  controlId="formGridPassword">
              <Form.Label as="legend">Testo 1</Form.Label>
              <Form.Control type="text" placeholder="Inserisci il primo testo" value={text1} onChange={changeText1}/>
            </Form.Group>
            </Col>
            <Col xs={4} className = "mt-4">
            <Form.Group  controlId="formGridPassword">
              <Form.Label as="legend">Testo 2</Form.Label>
              <Form.Control disabled={checkText2(props.meme.immagine)} type="text" placeholder="Inserisci il secondo testo" value ={text2} onChange={changeText2} />
            </Form.Group>
            </Col>
            <Col xs={4} className = "mt-4">
            <Form.Group  controlId="formGridPassword">
              <Form.Label as="legend">Testo 3</Form.Label>
              <Form.Control disabled={checkText3(props.meme.immagine)} type="text" placeholder="Inserisci il terzo testo" value={text3} onChange={changeText3}/>
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
                disabled ={checkVisibility(visibilityStart[1])}
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
                />
              </Col>
              <Col xs={5}></Col>
            </Row>
          </Form.Group>
          <Button variant="success" className = "w-100 mt-5" type="submit"> Copia Meme </Button>   
          <Button onClick={props.onHide} variant = "danger" className = "w-100 mt-3">Chiudi</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer > </Modal.Footer>
      <AlertDismissible show={showAlert} setShow={setShowAlert} message={alertMessage} />
    </Modal>
  );
}

export default CopyComponent;