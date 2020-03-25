const paitentProfileModel = require("../models/patientProfileModel");

// patient medical history
// get patient history from DB
exports.getMedicalHistory = async patientID => {
  // try {
  //   const patientHistory = await paitentProfileModel.findOne({
  //     patientID: patientID
  //   });
  //   return patientHistory;
  // } catch (err) {
  //   return `there is problem ${err}`;
  // }
};

// get patient History From DB
exports.addNewHistory = async patientID => {
  // try {
  //   const addNewPatientHistory = paitentProfileModel.create({
  //     patientID: patientID,
  //     qustion: qustion
  //   });
  //   return addNewPatientHistory;
  // } catch (error) {
  //   return `there is problem ${error}`;
  // }
};
