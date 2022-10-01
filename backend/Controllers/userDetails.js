const signUpInfoModel = require("../models/signUpModel");

exports.addUser = async (request, response) => {
  try {
    let user = await signUpInfoModel.create(request.body);
    response.status(200).json({
      status: "success",
      message: {
        data: user,
      },
    });
  } catch (error) {
    response.status(400).json({
      status: "failed",
      error,
    });
  }
};

exports.getUser = async (request, response) => {
  try {
    let user = await signUpInfoModel.find({
      email: request.body.email,
      password: request.body.password,
    });

    response.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    response.status(404).json({
      status: "success",
      message: "user not found",
    });
  }
};
