const paitentProfileModel = require("../../models/patientProfile/patientProfileModel");

let DBPatienProfileDataObject = {
  error: {
    error: false,
    message: null,
    type: null,
  },
  data: null,
  status: 0,
  server_message: "", // 400 bad request, 200 ok, 404 not found
};

// patient medical history
// get all patient history from DB
exports.getAllPatientsProfiles = async () => {
  try {
    const profile = await paitentProfileModel.find();

    DBPatienProfileDataObject.error.error = false;
    DBPatienProfileDataObject.error.message = null;
    DBPatienProfileDataObject.error.type = null;
    DBPatienProfileDataObject.data = profile;
    DBPatienProfileDataObject.status = 200;
    DBPatienProfileDataObject.server_message = "patient has been found";

    return DBPatienProfileDataObject;
  } catch (error) {
    DBPatienProfileDataObject.error.error = true;
    DBPatienProfileDataObject.error.message = error.message;
    DBPatienProfileDataObject.error.type = error.name;
    DBPatienProfileDataObject.data = null;
    DBPatienProfileDataObject.status = 400;
    DBPatienProfileDataObject.server_message = "there is problem";

    return DBPatienProfileDataObject;
  }
};

// patient medical history
// get patient history from DB
exports.getPatientProfile = async (patientID) => {
  try {
    const profile = await paitentProfileModel.findOne({ patientID: patientID });

    DBPatienProfileDataObject.error.error = false;
    DBPatienProfileDataObject.error.message = null;
    DBPatienProfileDataObject.error.type = null;
    DBPatienProfileDataObject.data = profile;
    DBPatienProfileDataObject.status = 200;
    DBPatienProfileDataObject.server_message = "patient has been found";

    return DBPatienProfileDataObject;
  } catch (error) {
    DBPatienProfileDataObject.error.error = true;
    DBPatienProfileDataObject.error.message = error.message;
    DBPatienProfileDataObject.error.type = error.name;
    DBPatienProfileDataObject.data = null;
    DBPatienProfileDataObject.status = 400;
    DBPatienProfileDataObject.server_message = "there is problem";

    return DBPatienProfileDataObject;
  }
};

// add new Profile
exports.createPatientProfile = async (patientInformation) => {
  try {
    await paitentProfileModel.create(patientInformation);

    DBPatienProfileDataObject.error.error = false;
    DBPatienProfileDataObject.error.message = null;
    DBPatienProfileDataObject.error.type = null;
    DBPatienProfileDataObject.data = null;
    DBPatienProfileDataObject.status = 200;
    DBPatienProfileDataObject.server_message = "patient has been created";

    return DBPatienProfileDataObject;
  } catch (error) {
    DBPatienProfileDataObject.error.error = true;
    DBPatienProfileDataObject.error.message = error.message;
    DBPatienProfileDataObject.error.type = error.name;
    DBPatienProfileDataObject.data = null;
    DBPatienProfileDataObject.status = 400;
    DBPatienProfileDataObject.server_message = "there is problem";

    return DBPatienProfileDataObject;
  }
};

// update patient profile
exports.updatePatientProfile = async (patientID, patientInformation) => {
  try {
    await paitentProfileModel.findByIdAndUpdate(patientID, patientInformation);

    DBPatienProfileDataObject.error.error = false;
    DBPatienProfileDataObject.error.message = null;
    DBPatienProfileDataObject.error.type = null;
    DBPatienProfileDataObject.data = null;
    DBPatienProfileDataObject.status = 200;
    DBPatienProfileDataObject.server_message = "patient has been updated";

    return DBPatienProfileDataObject;
  } catch (error) {
    DBPatienProfileDataObject.error.error = true;
    DBPatienProfileDataObject.error.message = error.message;
    DBPatienProfileDataObject.error.type = error.name;
    DBPatienProfileDataObject.data = null;
    DBPatienProfileDataObject.status = 400;
    DBPatienProfileDataObject.server_message = "there is problem";

    return DBPatienProfileDataObject;
  }
};

// add new Profile
exports.deletePatientProfile = async (patientId) => {
  try {
    await paitentProfileModel.findByIdAndRemove(patientId);

    DBPatienProfileDataObject.error.error = false;
    DBPatienProfileDataObject.error.message = null;
    DBPatienProfileDataObject.error.type = null;
    DBPatienProfileDataObject.data = null;
    DBPatienProfileDataObject.status = 200;
    DBPatienProfileDataObject.server_message = "patient has been deleted";

    return DBPatienProfileDataObject;
  } catch (error) {
    DBPatienProfileDataObject.error.error = true;
    DBPatienProfileDataObject.error.message = error.message;
    DBPatienProfileDataObject.error.type = error.name;
    DBPatienProfileDataObject.data = null;
    DBPatienProfileDataObject.status = 400;
    DBPatienProfileDataObject.server_message = "there is problem";

    return DBPatienProfileDataObject;
  }
};
