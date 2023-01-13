import { mongoose } from "mongoose";
const Roles = new mongoose.Schema({
  name: String,
});

const RoleModel = mongoose.model("Roles", Roles);
export default RoleModel;
