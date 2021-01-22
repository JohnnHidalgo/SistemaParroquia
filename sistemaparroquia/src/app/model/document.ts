export class Document {
    constructor(public iddocument: number, public title: String, public tx_user:String, public tx_date:Date, public active:boolean) {}
}

export class CreateDocument {
    constructor(public title: String, public tx_user:String, public tx_date:Date, public active:boolean) {}
}