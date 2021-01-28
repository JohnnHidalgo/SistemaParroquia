export class GodParentPerson {
    constructor(public iddogparenperson: number,public idperson: number,public idgodparent: number, public active:boolean) {}
}

export class CreateGodParentPerson {
    constructor(public idperson: number,public idgodparent: number, public active:boolean) {}
}

export class ListGodParentPerson {
    constructor(public iddogparenperson: number,public idperson: number,public idgodparent: number, public firstname:String, public secondname:String, public lastname:String, public secondlastname:String) {}
}