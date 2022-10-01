const mongoose = require("mongoose");
const signUpInfoSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email_id: {
    type: String,
    required: [true, "Email ID is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password has to be provided"],
  },
  gender: {
    type: String,
    required: [true, "gender has to be provided"],
  },
  requirement: {
    type: Array,
    required: [true, "Speciality has to be provided"],
  },
  emergency_numbers: {
    type: Array,
    required: [true, "Emergency numbers has to be provided"],
  },
});

const signUpInfoModel = mongoose.model("creds", signUpInfoSchema);

module.export = signUpInfoModel;
