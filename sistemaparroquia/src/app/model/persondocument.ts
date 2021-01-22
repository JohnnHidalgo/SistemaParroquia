export class PersonDocument {
    constructor(public idpersondocument: number, public iddocument: number, public idperson: number,public state:boolean, public documentdate:Date, public active: any) {}
}

export class CreatePersonDocument {
    constructor(public iddocument: number, public idperson: number,public state:boolean, public documentdate:any, public active: any) {}
}