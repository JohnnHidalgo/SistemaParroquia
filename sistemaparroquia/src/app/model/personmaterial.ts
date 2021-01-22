export class PersonMaterial {
    constructor(public idpersonmaterial: number,public idmaterial: number, public idperson:number, public state:boolean, public active: any) {}
}

export class CreatePersonMaterial {
    constructor(public idmaterial: number, public idperson:number, public state:boolean, public active: any) {}
}