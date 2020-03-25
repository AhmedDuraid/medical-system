const patientModel = require("../models/ptientModel");

// get all patient data from the DB
exports.getPatientsInformation = async () => {
  try {
    const patientsData = patientModel.find();

    return patientsData;
  } catch (error) {
    return `there is prpblem ${error}`;
  }
};

// get user by ID
exports.getPatientById = async id => {
  try {
    const patientData = await patientModel.findById(id);
    return patientData;
  } catch (err) {
    return `there is prpblem ${err}`;
  }
};

// get user by name
exports.getPatientByName = async firstName => {
  try {
    const patientData = await patientModel.find({ firstName: firstName });
    return patientData;
  } catch (err) {
    return `there is prpblem ${err}`;
  }
};

// post new patient

exports.addNewPatient = async patientData => {
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
    height
  } = patientData;

  try {
    patientModel.create({
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
      height: height
    });
  } catch (err) {
    return `there is prpblem ${err}`;
  }
};
