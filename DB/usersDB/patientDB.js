const patientModel = require("../../models/usersModel/ptientModel");

// the object that send to user
let DBPatientsDataObject = {
  error: {
    error: false,
    message: null,
    type: null,
  },
  data: null,
  status: 0,
  server_message: "", // 400 bad request, 200 ok, 404 not found
};

// get all patient data from the DB
exports.getPatientsInformation = async () => {
  try {
    const patientsData = await patientModel.find();
    if (patientsData.length > 0) {
      DBPatientsDataObject.error.error = false;
      DBPatientsDataObject.error.message = null;
      DBPatientsDataObject.error.type = null;
      DBPatientsDataObject.status = 200;
      DBPatientsDataObject.data = patientsData;
      DBPatientsDataObject.server_message = "patient found";

      return DBPatientsDataObject;
    } else {
      DBPatientsDataObject.error.error = false;
      DBPatientsDataObject.error.message = null;
      DBPatientsDataObject.error.type = null;
      DBPatientsDataObject.status = 404;
      DBPatientsDataObject.data = null;
      DBPatientsDataObject.server_message = "there is no data ";

      return patientsData;
    }
  } catch (error) {
    DBPatientsDataObject.error.error = true;
    DBPatientsDataObject.error.message = error.message;
    DBPatientsDataObject.error.type = error.name;
    DBPatientsDataObject.status = 400;
    DBPatientsDataObject.data = null;
    DBPatientsDataObject.server_message = "check the error messages ";

    return DBPatientsDataObject;
  }
};

// get user by ID
exports.getPatientById = async (patientID) => {
  try {
    const patientData = await patientModel.findById(patientID);

    if (patientData) {
      DBPatientsDataObject.error.error = false;
      DBPatientsDataObject.error.message = null;
      DBPatientsDataObject.error.type = null;
      DBPatientsDataObject.status = 200;
      DBPatientsDataObject.data = patientData;
      DBPatientsDataObject.server_message = "patient found";
      return DBPatientsDataObject;
    } else {
      DBPatientsDataObject.error.error = true;
      DBPatientsDataObject.error.message = null;
      DBPatientsDataObject.error.type = null;
      DBPatientsDataObject.status = 404;
      DBPatientsDataObject.data = patientData;
      DBPatientsDataObject.server_message = "patient not found";
      return DBPatientsDataObject;
    }
  } catch (error) {
    DBPatientsDataObject.error.error = true;
    DBPatientsDataObject.error.message = error.message;
    DBPatientsDataObject.error.type = error.name;
    DBPatientsDataObject.status = 400;
    DBPatientsDataObject.data = null;
    DBPatientsDataObject.server_message = "check the error messages ";

    return DBPatientsDataObject;
  }
};

// get user by name
exports.getPatientByName = async (firstName) => {
  try {
    const patientData = await patientModel.find({ firstName: firstName });

    if (patientData.length > 0) {
      DBPatientsDataObject.error.error = false;
      DBPatientsDataObject.error.message = null;
      DBPatientsDataObject.error.type = null;
      DBPatientsDataObject.status = 200;
      DBPatientsDataObject.data = patientData;
      DBPatientsDataObject.server_message = `patient found `;

      return DBPatientsDataObject;
    } else {
      DBPatientsDataObject.error.error = true;
      DBPatientsDataObject.error.message = null;
      DBPatientsDataObject.error.type = null;
      DBPatientsDataObject.status = 404;
      DBPatientsDataObject.data = null;
      DBPatientsDataObject.server_message = `there is no patients start with this first name ${firstName} `;

      return DBPatientsDataObject;
    }
  } catch (error) {
    DBPatientsDataObject.error.error = true;
    DBPatientsDataObject.error.message = error.message;
    DBPatientsDataObject.error.type = error.name;
    DBPatientsDataObject.status = 400;
    DBPatientsDataObject.data = null;
    DBPatientsDataObject.server_message = "check the error messages ";

    return DBPatientsDataObject;
  }
};

// add new patient
exports.addNewPatient = async (patientData) => {
  const {
    userName,
    password,
    firstName,
    lastName,
    dateOfBirth,
    phone,
    email,
    nationality,
    address,
    weight,
    height,
    gender,
  } = patientData;

  try {
    await patientModel.create({
      userName: userName,
      password: password,
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      phone: phone,
      email: email,
      nationality: nationality,
      address: address,
      weight: weight,
      height: height,
      gender: gender,
    });

    DBPatientsDataObject.error.error = false;
    DBPatientsDataObject.error.message = null;
    DBPatientsDataObject.error.type = null;
    DBPatientsDataObject.status = 200;
    DBPatientsDataObject.data = null;
    DBPatientsDataObject.server_message = "patient creted";

    return DBPatientsDataObject;
  } catch (error) {
    DBPatientsDataObject.error.error = true;
    DBPatientsDataObject.error.message = error.message;
    DBPatientsDataObject.error.type = error.name;
    DBPatientsDataObject.status = 400;
    DBPatientsDataObject.data = null;
    DBPatientsDataObject.server_message = "check the error messages ";

    return DBPatientsDataObject;
  }
};

// update patient by id
// need to send same name in the database
// only what is send from body will get updated
exports.updatePatient = async (patientID, updatedPatientData) => {
  try {
    await patientModel.findOneAndUpdate(patientID, updatedPatientData);

    DBPatientsDataObject.error.error = false;
    DBPatientsDataObject.error.message = null;
    DBPatientsDataObject.error.type = null;
    DBPatientsDataObject.status = 200;
    DBPatientsDataObject.data = null;
    DBPatientsDataObject.server_message =
      "patient information has been updated ";

    return DBPatientsDataObject;
  } catch (error) {
    DBPatientsDataObject.error.error = true;
    DBPatientsDataObject.error.message = error.message;
    DBPatientsDataObject.error.type = error.name;
    DBPatientsDataObject.status = 400;
    DBPatientsDataObject.data = null;
    DBPatientsDataObject.server_message = "check the error messages ";

    return DBPatientsDataObject;
  }
};

// delete patient by id
exports.deletePatientByID = async (patientID) => {
  try {
    await patientModel.findByIdAndRemove(patientID);

    DBPatientsDataObject.error.error = false;
    DBPatientsDataObject.error.message = null;
    DBPatientsDataObject.error.type = null;
    DBPatientsDataObject.status = 200;
    DBPatientsDataObject.data = null;
    DBPatientsDataObject.server_message =
      "patient information has been Deleted ";

    return DBPatientsDataObject;
  } catch (error) {
    DBPatientsDataObject.error.error = true;
    DBPatientsDataObject.error.message = error.message;
    DBPatientsDataObject.error.type = error.name;
    DBPatientsDataObject.status = 400;
    DBPatientsDataObject.data = null;
    DBPatientsDataObject.server_message = "check the error messages ";

    return DBPatientsDataObject;
  }
};
