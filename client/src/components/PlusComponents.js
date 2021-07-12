import FeatherIcon from 'feather-icons-react';
import { Button} from 'react-bootstrap'
import React from 'react'
import FormComponent from './FormComponents.js'

function PlusButton(props) {
    const [formShow, setFormShow] = React.useState(false);
    if (!props.loggedIn)
        return (<> </>);
    return (
        <>
            <Button className="btn btn-success add btn-circle btn-xl " onClick={() => setFormShow(true)}>
                <FeatherIcon icon="plus" className="text-white" ></FeatherIcon>
            </Button>    
            <FormComponent {...props} show={formShow} onHide={() => setFormShow(false)} />
        </>
    );
}

export default PlusButton;