import React, {useState} from 'react'
import './Slider/Slider.css'
import { Scheduler } from './Scheduler.js'
import { Row, Col, Alert, Button, } from 'react-bootstrap'
import { AddEvent } from './AddEvent.js';

export function Dashboard(props) {

    
    const [addEventModal, setAddEventModal] = useState(false);
    const [addEventMessage, setAddEventMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [deletedEvent, setDeletedEvent] = useState(null);
    const [modifyEvent, setModifyEvent] = useState(null);
    const [modifyMessage, setModifyMessage] = useState(null);
    const [showModal, setShowModal] = useState(false)
    
    function msg(){
        return (<Alert variant='danger'>You cannot modify the event because you didn't create it</Alert>);
    }
    
    return (
        <div className='animation fadeIn'>
            <div className = 'p-5'>
                <h1 className='team-organization mt-3'>Dashboard</h1>
                {(modifyMessage === false)? setTimeout(msg, 5000) : (modifyMessage===true)? <Alert variant='success'>"{modifyEvent}" modified</Alert>:''}
                {(errorMessage)? <Alert variant='danger'>You cannot delete "{deletedEvent}" because you didn't create it</Alert>: (successMessage)? <Alert variant='success'>Event "{deletedEvent}" deleted</Alert> : ''}
                <center style={{marginTop:'70px'}}>
                    <Row className='mt-5' >
                        <Col>
                            <Button variant="outline-primary" style={{height: '150px'}} className='w-75' onClick={()=>setAddEventModal(true)}><span style={{fontSize: '70px'}}>+</span><span className='goodFont' style={{fontSize: '50px'}}>Add Event</span></Button>
                            <AddEvent {...props} userEmail={props.userEmail} message={addEventMessage} setMessage={setAddEventMessage} show={addEventModal} onHide={()=> {setAddEventModal(false); setAddEventMessage(null)}}/>
                        </Col>
                        <Col>
                            <Button variant="outline-dark" className='w-75 h-100'><span className='goodFont' style={{fontSize: '50px'}}>Other</span></Button>
                        </Col>
                        <Col>
                            <Button variant="outline-warning" className='w-75 h-100'><span className='goodFont' style={{fontSize: '50px'}}>Other</span></Button>
                        </Col>
                        
                    </Row>
                </center>
                <div className='p-5' style={{marginTop: '40px'}}>
                    <h1 className='goodFont' style={{fontSize:'35px'}}>Events Scheduler</h1>
                    <center>
                        <Scheduler {...props} 
                            showModal={showModal}
                            setShowModal={setShowModal}
                            modifyEvent={modifyEvent}
                            setModifyEvent={setModifyEvent}
                            modifyMessage={modifyMessage} 
                            setModifyMessage={setModifyMessage} 
                            deletedEvent={deletedEvent} 
                            setDeletedEvent={setDeletedEvent} 
                            successMessage={successMessage} 
                            setSuccessMessage={setSuccessMessage} 
                            errorMessage={errorMessage} 
                            setErrorMessage={setErrorMessage} 
                        />
                    </center>
                </div>
            </div>
            <br></br><br></br>
       
            
        </div>

        
    )
}
export default Dashboard;