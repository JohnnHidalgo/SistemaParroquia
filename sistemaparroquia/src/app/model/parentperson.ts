export class ParentPerson {
    constructor(public idparentperson: number,public idperson: number,public idparent: number, public active:boolean) {}
}

export class CreateParentPerson {
    constructor(public idperson: number,public idparent: number, public active:boolean) {}
}

export class ListParentPerson {
    constructor(public idparentperson: number,public idperson: number,public idparent: number, public firstname:String, public secondname:String, public lastname:String, public secondlastname:String) {}
}