export class Sale {
    constructor(public idsale: number,public personname: String,public totalprice: number,public comentary: String,public datesale: String,public tx_user:String,public tx_date:any,public active:boolean) {}
}

export class CreateSale {
    constructor(public personname: String,public totalprice: Number,public comentary: String,public datesale: any,public tx_user:String,public tx_date:any,public active:boolean) {}
}