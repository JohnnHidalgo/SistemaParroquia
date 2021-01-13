/*export interface Document {
    iddocument:number,
    title:String,
    tx_user:String,
    tx_date:Date,
    active:boolean
};

*/
export class Document {
    constructor(public iddocument: number, public title: String, public tx_user:String, public tx_date:Date, public active:boolean) {}
}