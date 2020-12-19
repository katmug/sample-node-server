import * as mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  name: string;
  surName: string;
  email: string;
}

export const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surName: { type: String, required: true },
  email: { type: String, required: true , unique: true }
});

const User = mongoose.model<IUser>("User", UserSchema);
export default User;