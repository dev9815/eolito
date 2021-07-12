import { Button, Card } from 'react-bootstrap'
import React from 'react'

import Modal from 'react-bootstrap/Modal'
import "../App.css";

export function MemeGeneratorComponent(props) {
    const trueComicSans = [true, "Comic Sans Ms"];
    const falseComicSans = [false, "Impact"];
    const trueVisibility = [true, "Pubblico"];
    const falseVisibility = [false, "Protetto"];
    const red = [1, "red", "Rosso"];
    const white = [2, "white", "Bianco"];
    const blue = [3, "blue", "Blu"];
    const black = [4, "black", "Nero"];
    const green = [5, "green", "Verde"];
    let currentColour = [];
    let currentImage = "";
    let text1 =[];
    let text2 =[];
    let text3 = [];
   
    switch(props.meme.immagine){
        case 1: currentImage = "1.jpeg";
                text1=[100,220,0,50];
                text2=[280,220,0,50];
                text3=[null,null,null,null];        
                break;
        case 2: currentImage = "2.jpeg";
                text1=[250,-20,150,30];
                text2=[170,100,0,50];
                text3=[220,300,0,50];
                break;
        case 3: currentImage = "3.jpeg";
                text1=[300,-360,0,0];
                text2=[290,0,0,0];
                text3=[310,320,0,30];    
                break;
        case 4: currentImage = "4.jpeg";
                text1=[70,50,20,0];
                text2=[260,50,20,0];
                text3=[null,null,null,null];
                break;
        case 5: currentImage = "5.jpeg";
                text1=[120,-30,0,50];
                text2=[null,null,null,null];
                text3=[null,null,null,null];
                break;
        case 6: currentImage = "6.jpeg";
                text1=[130,240,0,50];
                text2=[null,null,null,null];
                text3=[null,null,null,null];        
                break;

        default: break;
    }
    let shadow;
    switch(props.meme.colore) {
        case 1: currentColour[0] = red[1];
                currentColour[1] = red[2];
                shadow = "shadowRed";
                break;
        case 2: currentColour[0] = white[1];
                currentColour[1] = white[2];
                shadow = "shadowWhite";
                break;
        case 3: currentColour[0] = blue[1];
                currentColour[1] = blue[2];
                shadow = "shadowBlue";
                break;
        case 4: currentColour[0] = black[1];
                currentColour[1] = black[2];
                shadow = "shadowBlack";
                break;
        case 5: currentColour[0] = green[1];
                currentColour[1] = green[2];
                shadow = "shadowBlack";
                break;
        default: shadow = "shadowBlack";
    }

    const currentVisibility = props.memeVisibility ? trueVisibility : falseVisibility;
    const currentFont = props.meme.comicSans ? trueComicSans : falseComicSans;

    if (props.loggedIn) {
        return (<Modal
                show={props.show}
                onHide={props.onHide}   
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className = "modal-window"
                animation = {false}
                >
                    <Card className = "cardLogged">
                    <Card.Title><h2 className = "text-center">{props.meme.titolo}</h2></Card.Title>
                        <Card.Img variant="top" src={currentImage}/>
                        <Card.Body>    
                            <Card.Text className = "textBorder">
                                Testo 1: {props.meme.testo1}
                            </Card.Text>
                            <Card.Text className = "textBorder">
                                Testo 2: {props.meme.testo2}
                            </Card.Text>
                            <Card.Text className = "textBorder">
                                Testo 3: {props.meme.testo3}
                            </Card.Text>
                            <Card.Text className = "textBorder">
                                Colore: {currentColour[1]}
                            </Card.Text>
                            <Card.Text className = "textBorder">
                                Font: {currentFont}
                            </Card.Text>
                            <Card.Text className = "textBorder">
                                Visibilità: {currentVisibility}
                            </Card.Text>
                            <Button variant="danger" className = "w-100" onClick={props.onHide} >Chiudi</Button>
                        </Card.Body>
                    </Card>
                </Modal>
        );
    } else {
        return (<Modal
                    show={props.show}
                    onHide={props.onHide}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    className = "modal-window"
                    animation={false}
                >
                    <Card style={{width: 'auto', padding: '1em', textAlign: 'center'}}>
                        <Card style = {{fontFamily: currentFont}}>
                        <Card.Title><h2 className = "text-center">{props.meme.titolo}</h2></Card.Title>
                            <Card.Img src={currentImage} alt="Card image" />
                            <Card.ImgOverlay className = {shadow}>
                                <Card.Text style={{position: 'absolute', color: currentColour[0], top:text1[0] , left: text1[1], right: text1[2], bottom: text1[3], justifyContent: 'center', alignItems: 'center', fontSize: '20px'}}>{props.meme.testo1}</Card.Text>
                                <Card.Text style={{position: 'absolute', color: currentColour[0], top:text2[0], left: text2[1], right: text2[2], bottom: text2[3], justifyContent: 'center', alignItems: 'center', fontSize: '20px'}}>{props.meme.testo2}</Card.Text>
                                <Card.Text style={{position: 'absolute', color: currentColour[0], top:text3[0] ,left: text3[1], right: text3[2], bottom: text3[3], justifyContent: 'center', alignItems: 'center', fontSize: '20px'}}>{props.meme.testo3}</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        <Card.Body>
                            <Button variant="danger" className = "w-100" onClick={props.onHide} >Chiudi</Button>
                        </Card.Body>
                    </Card>
                </Modal>
        );
    }
}

export default MemeGeneratorComponent;