export class Creator {
    constructor(ID, Name) {
        this._ID = ID;
        this._Name = Name;
    }
    get ID() {
        return this._ID;
    }
    get Name(){
        return this._Name;
    }
    set ID(value) {
        this._ID= value;
    }
    set Name(value) {
        this._Name = value;   
    }
}