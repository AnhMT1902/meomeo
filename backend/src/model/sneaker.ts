import {Schema, model} from 'mongoose'

 interface ISneaker {
    name?: string;
    price?: number;
    color?: string;
    size?: number;
    quantity?: number;
    sale?: boolean;
    sold_out?: boolean;
}

let SneakerSchema = new Schema<ISneaker>({
    name: String,
    price: Number,
    color: String,
    size: Number,
    quantity: Number,
    sale: Boolean,
    sold_out: Boolean,
})

const Sneaker = model<ISneaker>('Sneaker', SneakerSchema)
export {Sneaker}