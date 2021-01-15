export class Material {
    constructor(public idmaterial: number, public title: String, public tx_user:String, public tx_date:Date, public active:boolean) {}
}

export class CreateMaterial {
    constructor(public title: String, public tx_user:String, public tx_date:Date, public active:boolean) {}
}