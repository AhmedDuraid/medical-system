const users = require("../../models/usersModel/userModel");

let dataObject = {
  error: {
    error: false,
    message: null,
    errorType: null
  },
  data: null
};

// get data
exports.getUsers = async () => {
  try {
    const getUsersDate = await users.find();

    if (getUsersDate.length > 0) {
      dataObject.error.error = false;
      dataObject.error.errorType = null;
      dataObject.error.message = null;
      dataObject.data = getUsersDate;

      return dataObject;
    } else if (getUsersDate.length === 0) {
      dataObject.error.error = true;
      dataObject.error.errorType = null;
      dataObject.error.message = "there is no users";
      dataObject.data = null;

      return dataObject;
    }
  } catch (error) {
    dataObject.error.error = true;
    dataObject.error.errorType = error.name;
    dataObject.error.message = error.message;
    dataObject.data = null;

    return dataObject;
  }
};

exports.getUserByName = async firstname => {
  try {
    const getUserData = await users.find({
      firstName: firstname
    });

    if (getUserData.length > 0) {
      dataObject.error.error = false;
      dataObject.error.errorType = null;
      dataObject.error.message = null;
      dataObject.data = getUserData;

      return dataObject;
    } else {
      dataObject.error.error = true;
      dataObject.error.errorType = null;
      dataObject.error.message = "there is no users";
      dataObject.data = getUserData;

      return dataObject;
    }
  } catch (error) {
    dataObject.error.error = true;
    dataObject.error.errorType = error.name;
    dataObject.error.message = error.message;
    dataObject.data = null;

    return dataObject;
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
    address,
    gender
  } = userData;

  try {
    const userName_isTher = await users.findOne({ userName: userName });
    const email_isTher = await users.findOne({ email: email });

    if (userName_isTher) {
      dataObject.error.error = true;
      dataObject.error.errorType = null;
      dataObject.error.message = ` you can not use this user Name: ${userName}`;
      dataObject.data = null;

      return dataObject;
    } else if (email_isTher) {
      dataObject.error.error = true;
      dataObject.error.errorType = null;
      dataObject.error.message = ` you can not use this Email: ${email}`;
      dataObject.data = null;
      return dataObject;
    } else {
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
        address: address,
        gender: gender
      });

      dataObject.error.error = false;
      dataObject.error.errorType = null;
      dataObject.error.message = null;
      dataObject.data = { message: `user ${userName} has created` };
      return dataObject;
    }
  } catch (error) {
    console.log(error);

    dataObject.error.error = true;
    dataObject.error.errorType = error.name;
    dataObject.error.message = error.message;
    dataObject.data = null;

    return dataObject;
  }
};

// update data
exports.updateUser = async (userId, updatedBody) => {
  console.log(updatedBody);
  try {
    await users.findOneAndUpdate(userId, updatedBody);
    dataObject.error.error = false;
    dataObject.error.errorType = null;
    dataObject.error.message = null;
    dataObject.data = { message: `user ${userId} has been updated` };

    return dataObject;
  } catch (error) {
    dataObject.error.error = true;
    dataObject.error.errorType = error.name;
    dataObject.error.message = error.message;
    dataObject.data = null;

    return dataObject;
  }
};

// delete user
exports.deleteUser = async userId => {
  try {
    await users.findByIdAndRemove(userId);
    dataObject.error.error = false;
    dataObject.error.errorType = null;
    dataObject.error.message = null;
    dataObject.data = { message: `${userId} has been removed` };
    return dataObject;
  } catch (error) {
    dataObject.error.error = true;
    dataObject.error.errorType = error.name;
    dataObject.error.message = error.message;
    dataObject.data = null;

    return dataObject;
  }
};
