import React, {useState, useEffect} from 'react'
import { onSnapshot, collection, doc, deleteDoc, query, orderBy } from 'firebase/firestore'
import { Table, Button } from 'react-bootstrap'
import { db } from '../firebase.js'
import { Event } from './Event.js'
import { Modify } from './Modify.js'
import FeatherIcon from 'feather-icons-react';
import { auth } from "../firebase.js"



export function Scheduler(props){
    const [events, setEvents] = useState([])
    const [eventModal, setEventModal] = useState(null);
    const [modifyModal, setModifyModal] = useState(null);
    const [view, setView] = React.useState(0);
    const [edit, setEdit] = React.useState(true);
    //let time = 0
    const [userInfo, setUserInfo] = useState([])
    const [parsedRole, setParsedRole] = useState(null)
    const eventCollRef = collection(db, 'Events');
    const userCollRef = collection(db, 'User');
    const [modifyError, setModifyError] = useState(false)
    
    useEffect(() =>{
        const list = onSnapshot(query(eventCollRef, orderBy('startDate', 'asc')), snapshot =>{
            setEvents(snapshot.docs.map(doc => ({
                id: doc.id, 
                title: doc.data().title, 
                startDate: doc.data().startDate.substr(0, 10), 
                initialTime: doc.data().startDate.substr(11,5), 
                endDate: doc.data().endDate.substr(0,10), 
                endTime: doc.data().endDate.substr(11,5), 
                userId: doc.data().user,
                adminName: doc.data().user, //will be convert into name surname 
                description: doc.data().description
             })))
        })
        const userInfoList = onSnapshot(userCollRef, snapshot =>{
            setUserInfo(snapshot.docs.map(doc => ({
                uid: doc.id, 
                role: doc.data().role, 
                username: doc.data().username, 
                name: doc.data().name
            })))
        })
        return () =>{
            list();
            userInfoList();
        }
    }, [])
    
    const openAdd=()=>{
        if(view !== view-1) {
            document.getElementById('view-details').click();
            setView(view+1);
        }
    }
    const openEdit=(id, cond)=>{
        //console.log("time: " +time)
        setEdit(cond);
        //if(first){
          //  document.getElementById('edit').click();
            //setFirst(false);
        //}
        if(edit) {
            document.getElementById(id).click();
            document.getElementById(id).click();
            document.getElementById(id).click();
            document.getElementById(id).click();
            document.getElementById(id).click();
            //document.getElementById('edit').click();
            setEdit(false);
        }
    }
    const openEditFail=(id, cond)=>{
        //console.log("time: " +time)
        setEdit(cond);
        //if(first){
          //  document.getElementById('edit').click();
            //setFirst(false);
        //}
        if(edit) {
            document.getElementById(id).click();
            setEdit(false);
        }
    }
    //console.log("utente: " + auth.currentUser.uid);
    
    const getUserUid = (userId) =>{
        return userId;
    }
    
    const Viewer = ({e}) => {
        const [dataModal, setDataModal] = useState(null);
        const [modifyDataModal, setModifyDataModal] = useState(null);
        //const [usersRole, setUsersRole] = useState([{}]);
        
        userInfo.forEach(doc =>{
            if(doc.uid === e.adminName){
                e.adminName = doc.name;
            }
        })
        userInfo.filter(doc => doc?.uid === auth.currentUser?.uid).map(r => setParsedRole(r.role))
        //console.log("role: " + parsedRole)
        const getData = (id, title, firstDate, firstTime, secondDate, secondTime, user) => {
            userInfo.forEach(doc =>{
                if(doc.uid === e.adminName){
                    e.adminName = doc.name;
                }
            })
            let dataModal = [id, title, firstDate, firstTime, secondDate, secondTime, user]
            setEventModal(props.showModal)  
            setDataModal(dataModal);
        }
        const editData = (id, title, description, user) =>{
            //console.log("user: " + user)
            //console.log("QUI: " + e.userId)
            //}else{props.setModifyMessage(false)
            
            console.log("showModal: " + props.showModal)
            //if(showModal === true){
                let modDataModal = [id, title, description, user]
                //props.setModifyMessage(false)
                setModifyModal(props.showModal)
                setModifyDataModal(modDataModal) 
                
            //}
            //if(showModal === false){
              //  props.setModifyMessage(true)
                //props.setModifyEvent(title)
            //}
        }

        const deleteEvent = async (id) =>{
            const toDelete = events.filter(doc=> doc.id === id)
            props.setDeletedEvent(toDelete[0].title);
            if(auth.currentUser?.uid.localeCompare(toDelete[0].userId) === 0){
                const docFromDb = doc(db, 'Events', id);
                props.setErrorMessage(false);
                props.setSuccessMessage(true);
                await deleteDoc(docFromDb);
            }
            else props.setErrorMessage(true);
        }
        return(
            <tr>
                <td><center>{e.title}</center></td>
                <td><center>{e.startDate}</center></td>
                <td><center>{e.initialTime}</center></td>
                <td><center>{e.endDate}</center></td>
                <td><center>{e.endTime}</center></td>
                <td>
                    <center>
                        <Button className="" variant="outline-light" id='view-details' onMouseEnter={() => openAdd()} onClick={() => getData(e.id, e.title, e.startDate, e.initialTime, e.endDate, e.endTime, e.adminName)}>
                            View details
                        </Button>
                        {dataModal && <Event {...props} title={e.title} firstDate={e.startDate} firstTime={e.initialTime} secondDate={e.endDate} secondTime={e.endTime} description={e.description} user={e.adminName} show={eventModal} onHide={()=>setEventModal(false)} />}
                    </center>    
                </td>
                {(parsedRole === 'admin')?
                    <>
                    <td>
                        <center>
                            <Button style={{border: 'none'}}className="" variant="outline-primary" id={e.id} onMouseEnter={() => {if(auth.currentUser?.uid.localeCompare(e.userId) === 0) {openEdit(e.id, true)}else{openEditFail(e.id, true)}}} onClick={() => {editData(e.id, e.title, e.description, e.adminName)}}>
                                <FeatherIcon icon="edit" className="text-light" size={22}/>
                            </Button>
                            {modifyDataModal && <Modify {...props}  idEvent={e.id} title={e.title} description={e.description} user={e.userId} setTitleEvent={props.setModifyEvent} mm={props.modifyMessage} setModifyMessage={props.setModifyMessage} setModal={props.setShowModal} show={modifyModal} setModifyModal={setModifyModal} onHide={()=>setModifyModal(false)} />}
                        </center>    
                    </td>
                    <td>
                        <center>
                            <Button style={{border: 'none'}} onClick={() => deleteEvent(e.id)} variant="outline-danger" id='delete'>
                                <FeatherIcon icon="trash-2" className="text-light" size={22}/>
                            </Button>
                        </center>    
                    </td>
                    </>
                    : ''
                }
                <td><center>{e.adminName}</center></td>
            </tr>
        )
    }

    return (
        <Table striped variant='dark mt-4 '>
            <thead>
            <tr>
                <th><center>Title</center></th>
                <th><center>Initial Date</center></th>
                <th><center>Initial Time</center></th>
                <th><center>End Date</center></th>
                <th><center>End Time</center></th>
                <th><center>Description</center></th>
                {(parsedRole === 'admin')?
                    <>
                        <th><center>Modify</center></th>
                        <th><center>Delete</center></th>
                    </>
                    : ''
                } 
                <th><center>Created by</center></th>
            </tr>
            </thead>
            <tbody>
                {events.map(elem =>{
                    return(
                        <Viewer e={elem}/>
                    )
                })}
            </tbody>
        </Table>

    )
}

export default Scheduler;