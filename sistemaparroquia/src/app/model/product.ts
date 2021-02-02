export class Product {
    constructor(public idproducto: number, public productname: String,  public description: String,  public price: number, public quantity: any, public tx_user:String, public tx_date:any, public active:boolean) {}
}
export class CreateProduct {
    constructor(public productname: String,  public description: String,  public price: number, public quantity: any, public tx_user:String, public tx_date:any, public active:boolean) {}
}
export class UpdateProduct {
    constructor( public idproducto: number, public productname: String,  public description: String,  public price: number, public quantity: any) {}
}

export class VentaProduct {
    constructor(public venta:boolean, public idproducto: number, public productname: String,  public description: String,  public price: number, public quantity: any, public tx_user:String, public tx_date:any, public active:boolean) {}
}