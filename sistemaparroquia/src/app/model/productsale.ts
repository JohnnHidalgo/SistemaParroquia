export class ProductSale {
    constructor(public idproductsale: number, public idsale: number, public idproducto: number) {}
}

export class CreateProductSale {
    constructor(public idsale: number, public idproducto: number) {}
}


export class ListProductSale {
    constructor(public idsale: number, public idproductsale: number, public productname: String, public price: any) {}
}