import { Meme } from './memeObject';
import {Creator} from './creatorObject';

  function memeStringify(meme) {
    const obj = {};
    obj.id = meme.id
    obj.titolo = meme.titolo
    obj.immagine = meme.immagine
    obj.testo1 = meme.testo1
    obj.testo2 = meme.testo2
    obj.testo3 = meme.testo3
    obj.comicSans = meme.comicSans
    obj.colore = meme.colore
    obj.utenteCreatore = meme.utenteCreatore
    obj.visibilità = meme.visibilità
    return JSON.stringify(obj);
  }

  async function logIn(credentials) {
    let response = await fetch("/api/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    
    if (response.ok) {
      const user = await response.json();
      return user;
    }
    else {
      try {
        const errDetail = await response.json();
        throw errDetail.message;
      }
      catch (err) {
        throw (err);
      }
    }
    
  }

  async function loadMemes(url) {
    const response = await fetch(url);
    const meme = await response.json()
    return meme.map((m) =>
       (new Meme(m.id, m.titolo, m.immagine, m.testo1, m.testo2, m.testo3, m.comicSans, m.colore, m.utenteCreatore, m.visibilità)));
  }

  async function loadCreators(url) {
    const response = await fetch(url);
    const userCreators = await response.json()
    return userCreators.map((m) => (new Creator(m.ID, m.Name)));
  }

  async function deleteMeme(memeId) {
    fetch(`/api/elimina/${memeId}`, {
      method: 'DELETE',
    }).then(response => console.log(response))
  }

  async function addNewMeme(meme) {    
    const bodyReq = memeStringify(meme);
    const url = "http://localhost:3000/api/addMeme";
    //Request to server
    fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: bodyReq // body data type must match "Content-Type" header
    }).then(response => console.log(response))
  };
  
  const API = { logIn, loadMemes, deleteMeme, addNewMeme, loadCreators}
  export default API;