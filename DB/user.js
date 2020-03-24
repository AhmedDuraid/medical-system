const users = require("../models/userModel");

// get data
exports.getUsers = async () => {
  try {
    const getUsersDate = await users.find();

    return getUsersDate;
  } catch (error) {
    console.log(error);
  }
};
exports.getUserByName = async firstname => {
  try {
    const getUserData = await users.findone({
      firstName: firstname
    });
    return getUserData;
  } catch (error) {
    console.log(error);
  }
};

// post data
exports.addNewUser = async userData => {
  const {
    userName,
    password,
    firstName,
    lastName,
    dateOfBirth,
    userType,
    phone,
    email,
    nationality,
    address
  } = userData;

  try {
    await users.create({
      userName: userName,
      password: password,
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      userType: userType,
      phone: phone,
      email: email,
      nationality: nationality,
      address: address
    });
    return `user ${userName} has created`;
  } catch (error) {
    console.error(error);
    return `there is problem`;
  }
};
