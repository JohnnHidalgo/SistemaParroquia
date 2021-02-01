export class GodParent {
    constructor(public idgodparent: number, public lastname: String, public secondlastname: String, public firstname: String, public secondname: String, public dateborn: String, public phone: String, public cellphone: String, public tx_user:String, public tx_date:any, public active:boolean) {}
}

export class CreateGodParent {
    constructor(public lastname: String, public secondlastname: String, public firstname: String, public secondname: String, public dateborn: any, public phone: String, public cellphone: String, public tx_user:String, public tx_date:any, public active:boolean) {}
}

export class ListGodParent {
    constructor(public lastname: String, public secondlastname: String, public firstname: String, public secondname: String, public dateborn: String, public phone: String, public cellphone: String, public tx_user:String, public tx_date:any, public active:boolean) {}
}
