import FeatherIcon from 'feather-icons-react';
import {Col, Row, Container,ListGroup, Button} from 'react-bootstrap'
import React from 'react'
import "../App.css";
import CopyComponent from './CopyComponents.js'
import { MemeGeneratorComponent } from './MemeGeneratorComponents.js'

export function MemeList(props) {
    if(!props.loggedIn)
        return (
            <Container className="col bg">
                <ListGroup key="memeList" className = "list-bg animation fadeIn p-3 " variant="flush">
                    <h2 key="filterTitle" className="mt-4 ml-4">
                        <strong>Benvenuto al Politecnico di Torino Meme Generator</strong> 
                    </h2>
                    <br/>
                    <p>
                        Questa web application è stata creata per la generazione e la visualizzazione di meme.<br/>
                        Di seguito ecco l'elenco delle meme pubbliche in ordine di ultima creazione. L'elenco<br/>
                        contiene: stato della visibilità, titolo della meme, creatore della meme, visualizzazione.<br/>
                        Che aspetti? Fatti due risate!!!
                    </p>
                    <br/>
                    <Row className = "memeList">
                        <Col><h6>Visibilità</h6></Col>
                        <Col xs={4}>
                            <label className="form-check-label ml-1" form="flexCheckDefault"> <h6>Titolo</h6></label>
                        </Col>

                        <Col xs={2}>
                            <label className="form-check-label ml-1" form="flexCheckDefault"><h6>Utente Creatore</h6></label>
                        </Col>
                        <Col xs={2}></Col>
                        <Col xs={1}>
                            <h6>Visualizza</h6>
                        </Col>
                    </Row>
                    {props.list.map((meme) => {
                        return <Picture {...props} key={meme.id} memeId={meme.id} memeTitle={meme.titolo}
                            meme={meme} memeVisibility={meme.visibilità} memeCreator={meme.utenteCreatore} />;
                    })}
                </ListGroup>
            </Container>
        );
    else  
    return (
        <Container className="col bg">
            <ListGroup key="memeList" className = "list-bg animation fadeIn p-3" variant="flush">
                <h2 key="filterTitle" className="mt-4 ml-4">
                    <strong>Benvenuto al Politecnico di Torino Meme Generator</strong> 
                </h2>
                <br/>
                <p>
                    Questa web application è stata creata per la generazione e la visualizzazione di meme.<br/>
                    Di seguito ecco l'elenco delle meme che hai creato in ordine di ultima creazione. L'elenco<br/>
                    Una meme è composta da titolo, immagine, testi, visibilità, e nome dell'utente creatore. <br/>
                    Puoi copiare meme che puoi aver creato tu come un altro creatore, ma in quest'ultimo caso <br/>
                    solo se la visibilità è pubblica.<br/>
                    <strong>Il lucchetto aperto indica visibilità pubblica, quello chiuso privata.</strong>
                </p>
                <br/>
                <Row className = "memeList">
                    <Col xs={2}><h6>Visibilità</h6></Col>
                    <Col xs ={4}>
                        <label className="form-check-label ml-1" form="flexCheckDefault"><h6>Titolo</h6></label>
                    </Col>

                    <Col xs = {2}>
                        <label className="form-check-label ml-1" form="flexCheckDefault">
                            <h6>Utente Creatore</h6>
                        </label>
                    </Col>

                    <Col xs = {2}>
                        <label className="form-check-label ml-1" form="flexCheckDefault">   
                            <h6>Visualizza</h6>
                        </label>
                    </Col>

                    <Col xs = {1}>
                        <label className="form-check-label ml-1" form="flexCheckDefault">   
                            <h6>Elimina</h6>
                        </label>
                    </Col>

                    <Col xs = {1}>
                         <label className="form-check-label ml-1" form="flexCheckDefault">   
                            <h6>Copia</h6>
                        </label>
                    </Col>
                </Row>
                {props.list.map((meme) => {
                    return <Picture {...props} key={meme.id} memeId={meme.id} memeTitle={meme.titolo}
                        meme={meme} memeVisibility={meme.visibilità} memeCreator={meme.utenteCreatore} />;
                })}
            </ListGroup>
        </Container>
    );
}

function ShowIcon(props) {
    const WithIcon = () => <FeatherIcon icon="unlock"/>
    const WithoutIcon = () => <FeatherIcon icon="lock"/>

    if (props.show) {
        return <WithIcon />;
    }
    return <WithoutIcon />;
}

function Picture(props) {

    const [formShow, setFormShow] = React.useState(false);
    const [detailsShow, setDetailsShow] = React.useState(false);
    
    const getUserCreator = () => {
        let userCreator = ""
        for (let i = 0; i < 3; i++) 
            if (props.memeCreator === props.creatorList[i].ID)
                userCreator = props.creatorList[i].Name;
        return (userCreator);
    }

    if (props.loggedIn) {
        return (
            <>
                <Row className = "listMeme">
                    <Col xs={2}>
                        <ShowIcon show={props.memeVisibility} />
                    </Col>
                    <Col xs ={4}>
                        <label className="form-check-label" form="flexCheckDefault"><h6>{props.memeTitle}</h6></label>
                    </Col>
                    <Col xs = {2}>
                        <label className="form-check-label ml-1" form="flexCheckDefault">
                            <h6>{getUserCreator()}</h6>
                        </label>
                    </Col>
                    <Col xs = {2}>
                        <Button variant="outline-primary" onClick={() => setDetailsShow(true)}>Visualizza</Button>
                    </Col>

                    <Col xs = {1}>
                        <Button variant="light" className="ml-2" onClick={() => props.deleteMeme(props.memeId)}><FeatherIcon icon="trash-2" className="" /></Button>
                    </Col>

                    <Col xs = {1}>
                        <Button variant="light"  ><FeatherIcon icon="edit" onClick={() => setFormShow(true)}></FeatherIcon></Button>
                    </Col>
                </Row>
                <CopyComponent {...props} show={formShow} onHide={() => setFormShow(false)}/>
                <MemeGeneratorComponent {...props} show={detailsShow} onHide={() => setDetailsShow(false)}/>
            </>
        );
    }
    else {
        return (
            <>      
                <Row className = "listMeme">
                    <Col>
                        <ShowIcon show={props.memeVisibility} />
                    </Col>
                    <Col xs={4}>
                        <label className="form-check-label ml-1" form="flexCheckDefault"> <h6>{props.memeTitle}</h6></label>
                    </Col>

                    <Col xs={2}>
                        <label className="form-check-label ml-1" form="flexCheckDefault"><h6>{getUserCreator()}</h6></label>
                    </Col>
                    <Col xs={2}></Col>
                    <Col xs={1}>
                        <Button variant="outline-primary" onClick={() => setDetailsShow(true)}>Visualizza</Button>
                    </Col>
                </Row>
                <MemeGeneratorComponent {...props} show={detailsShow} onHide={() => setDetailsShow(false)}/>
            </>
        );
    }
}


export default MemeList;
