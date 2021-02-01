export class Parent {
    constructor(public idparent: number, public lastname: String, public secondlastname: String, public firstname: String, public secondname: String, public dateborn: any, public phone: String, public cellphone: String, public tx_user:String, public tx_date:any, public active:boolean) {}
}

export class CreateParent {
    constructor(public lastname: String, public secondlastname: String, public firstname: String, public secondname: String, public dateborn: any, public phone: String, public cellphone: String, public tx_user:String, public tx_date:any, public active:boolean) {}
}

export class ListParent {
    constructor(public lastname: String, public secondlastname: String, public firstname: String, public secondname: String, public dateborn: any, public phone: String, public cellphone: String, public tx_user:String, public tx_date:any, public active:boolean) {}
}
