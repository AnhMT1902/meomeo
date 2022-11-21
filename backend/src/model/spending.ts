import {model, Schema} from "mongoose";
import {IUser} from "./user";

export interface ISpending {
    name?:string,
    description?:string,
    classify?:boolean
}
const SpendingSchema = new Schema<ISpending>({
    name:String,
    description:String,
    classify:Boolean
});
const Spending=model<ISpending>('Spending',SpendingSchema);
export {Spending};
