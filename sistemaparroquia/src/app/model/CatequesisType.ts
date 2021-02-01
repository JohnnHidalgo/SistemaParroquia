export class CatequesisType {
    constructor(public idcatequesistype: number, public catequesistype: String, public tx_user:String, public tx_date:any, public active:boolean) {}
}

export class CreateCatequesisType {
    constructor(public catequesistype: String, public tx_user:String, public tx_date:any, public active:boolean) {}
}