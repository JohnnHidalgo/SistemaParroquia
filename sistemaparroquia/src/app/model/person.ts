export class Person {
    constructor(public idperson: number,public lastname: String,public secondlastname: String,public firstname: String,public secondname: String,public dateborn: String,public address: String,public zone: String,public phone: String,public cellphone: String,public recibo: String,public idcatequesistype: number,public tx_user:String,public tx_date:String,public active:boolean) {}
}

export class CreatePerson {
    constructor(public lastname: String,public secondlastname: String,public firstname: String,public secondname: String,public dateborn: any,public address: String,public zone: String,public phone: String,public cellphone: String,public recibo: String,public idcatequesistype: number,public tx_user:String,public tx_date:any,public active:boolean) {}
}

export class ListPerson {
    constructor(public idperson: number,public lastname: String,public secondlastname: String,public firstname: String,public secondname: String,public dateborn: String,public address: String,public zone: String,public phone: String,public cellphone: String,public recibo: String,public catequesistype: String,public tx_user:String,public tx_date:any,public active:boolean) {}
}

export class CatGroupPerson {
    constructor(public title: String,public lastname: String,public secondlastname: String,public firstname: String,public secondname: String, public cellphone:String) {}
}