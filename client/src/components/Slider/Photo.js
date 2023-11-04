import { Image, Table, Button, Card, Modal } from 'react-bootstrap'
import React from 'react'
export function Photo(props){
    return (
        <Modal
            show={props.show}
            onHide={false}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            size = 'xl'
            animation={true}
            className = ""
        >
            <Modal.Header style={{backgroundColor:'black'}}>
                <Image style={{width:'130px', height:'50px'}}className = "text-center" src = {process.env.PUBLIC_URL + '/Imgs/homeLogo.svg'} />
                <Button variant="danger" className = "" onClick={props.onHide} >X</Button>        
            </Modal.Header>
            <Card style = {{padding:'1em'}} className=''>
                <Card.Body>
                    <Table responsive>
                        <tr>
                            <td>
                                <center>
                                    <Card.Img className='w-100 h-100' src={process.env.PUBLIC_URL + `/Imgs/${props.content}`} />
                                </center>
                            </td>
                        </tr>
                    </Table>
                    
                </Card.Body>
            </Card>
        </Modal>
    );
}

export default Photo;