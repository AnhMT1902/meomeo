import {Schema, model} from 'mongoose'
interface IReceipt {
    time?: string
    Total_money?: number
}
let ReceiptSchema = new Schema<IReceipt>({
    time: String,
    Total_money: Number
})
const Receipt = model<IReceipt>('Receipt', ReceiptSchema)
export {Receipt}