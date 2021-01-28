export class Catequista {
    constructor(public idcatequista: number,public lastname: String,public secondlastname: String,public firstname: String,public secondname: String,public cellphone: String,public idcatequistatype: number,public tx_user:String,public tx_date:Date,public active:boolean) {}
}

export class CreateCatequista {
    constructor (public lastname: String,public secondlastname: String,public firstname: String,public secondname: String,public cellphone: String,public idcatequistatype: number,public tx_user:String,public tx_date:Date,public active:boolean) {}
}

export class ListCatequista {
    constructor(public idcatequista: number,public lastname: String,public secondlastname: String,public firstname: String,public secondname: String,public cellphone: String,public catequistatype: String,public tx_user:String,public tx_date:Date,public active:boolean) {}

}