export class Meme {
    constructor(id, titolo, immagine, testo1, testo2, testo3,
        comicSans, colore, utenteCreatore, visibilità) {
        this._id = id;
        this._titolo = titolo;
        this._immagine = immagine;  
        this._testo1 = testo1; 
        this._testo2 = testo2;
        this._testo3 = testo3;
        this._comicSans = comicSans;
        this._colore = colore;
        this._utenteCreatore = utenteCreatore;
        this._visibilità = visibilità;  
    }
    get id() {
        return this._id;
    }
    get titolo(){
        return this._titolo;
    }
    get immagine(){
        return this._immagine;
    }
    get testo1(){
        return this._testo1;
    }
    get testo2(){
        return this._testo2;
    }
    get testo3(){
        return this._testo3;
    }
    get comicSans(){
        return this._comicSans;
    }
    get colore(){
        return this._colore;
    }
    get utenteCreatore(){
        return this._utenteCreatore;
    }
    get visibilità(){
        return this._visibilità;
    }
    set id(value) {
        this._id= value;
    }
    set titolo(value) {
        this._titolo = value;
    }
    set immagine(value) {
        this._immagine = value;
    }
    set testo1(value) {
        this._testo1 = value;
    }
    set testo2(value) {
        this._testo2 = value;
    }
    set testo3(value) {
        this._testo3 = value;
    }
    set comicSans(value) {
        this._comicSans = value;
    }
    set colore(value) {
        this._colore = value;
    }
    set utenteCreatore(value) {
        this._utenteCreatore = value;
    }
    set visibilità(value) {
        this._visibilità = value;
    }
}