import { Image, Table, Button, Card, Modal, Form, Row, Col, Alert } from 'react-bootstrap'
import React, { useState } from 'react'
import { db } from '../firebase.js'
import { updateDoc, doc } from 'firebase/firestore'
import { auth } from "../firebase.js"

export function Modify(props) {
    const [title, setTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [description, setDescription] = useState('');
    const [fields, setFields] = useState(null);
    console.log("user: " + props.user)
    console.log("currentuser: " + auth.currentUser?.uid)
    if (props.user.localeCompare(auth.currentUser?.uid) === 0) {
        props.setModal(true)
        const handleSubmit = async () => {

            if (startDate === '' || endDate === '') {
                setFields(true);
                return;
            }
            //const eventCollRef = collection(db, 'Events');
            props.setTitleEvent(title);
            props.setModifyMessage(true);
            const eventDoc = doc(db, 'Events', props.idEvent);
            await updateDoc(eventDoc, { title: title, startDate: startDate, endDate: endDate, description: description })

        }

        //console.log("mex: " + message)
        return (
            <Modal
                show={props.show}
                onHide={props.onHide}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                size='lg'
                animation={true}
            >
                <Modal.Header className='eolito '>
                    <h2 className='goodFont text-shadow mt-2'>Modify Event: <span style={{ fontSize: '30px' }}>&nbsp;&nbsp; {props.title}</span></h2>
                    <Image style={{ width: '160px', height: '45px' }} className="text-center" src={process.env.PUBLIC_URL + '/Imgs/title.png'} />
                </Modal.Header>
                <Card>
                    <Card.Body className='p-4'>
                        <Form noValidate>
                            <Table responsive className='mt-2' >
                                {(fields) ? <Alert variant='danger'>Fill all of the inputs</Alert> : ''}
                                <tr>
                                    <td>
                                        <Form.Group controlId="formBasicTitle">
                                            <Form.Label><h4>Title</h4> </Form.Label>
                                            <Form.Control type="text" id='title' placeholder="Title" onChange={ev => setTitle(ev.target.value)} required />
                                        </Form.Group>
                                    </td>

                                </tr>

                                <tr>
                                    <td>
                                        <Form.Group controlId="formBasicStartDate">
                                            <Form.Label><h4>Start Datetime</h4> </Form.Label>
                                            <Form.Control type="datetime-local" id='startD' placeholder="Start Datetime" onChange={ev => setStartDate(ev.target.value)} required />
                                        </Form.Group>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Form.Group controlId="formBasicEndDateTime">
                                            <Form.Label><h4>End Datetime</h4> </Form.Label>
                                            <Form.Control type="datetime-local" id='endD' placeholder="End Datetime" onChange={ev => setEndDate(ev.target.value)} required />
                                        </Form.Group>
                                    </td>

                                </tr>
                                <tr>
                                    <td>
                                        <Form.Group controlId="formBasicDescription">
                                            <Form.Label><h4>Description</h4> </Form.Label>
                                            <Form.Control as="textarea" id='desc' rows={4} placeholder="Description" onChange={ev => setDescription(ev.target.value)} required />
                                        </Form.Group>
                                    </td>
                                </tr>
                            </Table>
                            <Form.Group as={Row} className="mb-2 mt-4">
                                <Col>
                                    <Button className="w-100" variant="primary" type="" block onClick={(e) => { e.preventDefault(); handleSubmit(); }}>
                                        Modify event
                                    </Button>
                                </Col>
                            </Form.Group>
                        </Form>
                        <Button variant="danger" className="w-100" onClick={props.onHide} >Chiudi</Button>
                    </Card.Body>
                </Card>
            </Modal>
        );
    }else{
        props.setModifyMessage(false);
        return ' ';
    }
        /*if(props.user.localeCompare(auth.currentUser?.uid) === 0){
                
            
            props.setModifyError(true);
            props.setShowModal(false);
            return 'No Data'
        }*/
    
}
    export default Modify;