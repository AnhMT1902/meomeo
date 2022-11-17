import {Schema, model} from 'mongoose'

 interface ISneaker {
    name?: string;
    price?: number;
    color?: string;
    size?: number;
    quantity?: number;
    sale?: boolean;
    sold_out?: boolean;
    sold_quantity: number; // mặc định = 0
}

let SneakerSchema = new Schema<ISneaker>({
    name: String,
    price: Number,
    color: String,
    size: Number,
    quantity: Number,
    sale: Boolean,
    sold_out: Boolean,
    sold_quantity: Number,
})

const Sneaker = model<ISneaker>('Sneaker', SneakerSchema)
export {Sneaker}