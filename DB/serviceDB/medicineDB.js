const medicineModel = require("../../models/servicesModel/medicineModel");

// the object that send to user
let DBMedicineDataObject = {
  error: {
    error: false,
    message: null,
    type: null,
  },
  data: null,
  status: 0,
  server_message: "", // 400 bad request, 200 ok, 404 not found
};

// get all meds
exports.getMeds = async () => {
  try {
    const meds = await medicineModel.find();

    DBMedicineDataObject.error.error = false;
    DBMedicineDataObject.error.message = null;
    DBMedicineDataObject.error.type = null;
    DBMedicineDataObject.data = meds;
    DBMedicineDataObject.status = 200;
    DBMedicineDataObject.server_message = "this is all meds";

    return DBMedicineDataObject;
  } catch (error) {
    DBMedicineDataObject.error.error = true;
    DBMedicineDataObject.error.message = error.message;
    DBMedicineDataObject.error.type = error.name;
    DBMedicineDataObject.data = null;
    DBMedicineDataObject.status = 400;
    DBMedicineDataObject.server_message = "there is problem ";

    return DBMedicineDataObject;
  }
};

// get med my name
exports.getMedByname = async (userMedName) => {
  try {
    const meds = await medicineModel.find({ medName: userMedName });

    DBMedicineDataObject.error.error = false;
    DBMedicineDataObject.error.message = null;
    DBMedicineDataObject.error.type = null;
    DBMedicineDataObject.data = meds;
    DBMedicineDataObject.status = 200;
    DBMedicineDataObject.server_message = "this is all meds";

    return DBMedicineDataObject;
  } catch (error) {
    DBMedicineDataObject.error.error = true;
    DBMedicineDataObject.error.message = error.message;
    DBMedicineDataObject.error.type = error.name;
    DBMedicineDataObject.data = null;
    DBMedicineDataObject.status = 400;
    DBMedicineDataObject.server_message = "there is problem ";

    return DBMedicineDataObject;
  }
};

// create new med
exports.createMed = async (info) => {
  console.log(info);

  try {
    await medicineModel.create(info);

    DBMedicineDataObject.error.error = false;
    DBMedicineDataObject.error.message = null;
    DBMedicineDataObject.error.type = null;
    DBMedicineDataObject.data = null;
    DBMedicineDataObject.status = 200;
    DBMedicineDataObject.server_message = "med has been created";

    return DBMedicineDataObject;
  } catch (error) {
    DBMedicineDataObject.error.error = true;
    DBMedicineDataObject.error.message = error.message;
    DBMedicineDataObject.error.type = error.name;
    DBMedicineDataObject.data = null;
    DBMedicineDataObject.status = 400;
    DBMedicineDataObject.server_message = "there is problem ";

    return DBMedicineDataObject;
  }
};

// update med
exports.updateMed = async (medId, newInfo) => {
  try {
    await medicineModel.findByIdAndUpdate(medId, newInfo);

    DBMedicineDataObject.error.error = false;
    DBMedicineDataObject.error.message = null;
    DBMedicineDataObject.error.type = null;
    DBMedicineDataObject.data = null;
    DBMedicineDataObject.status = 200;
    DBMedicineDataObject.server_message = "med has been update";

    return DBMedicineDataObject;
  } catch (error) {
    DBMedicineDataObject.error.error = true;
    DBMedicineDataObject.error.message = error.message;
    DBMedicineDataObject.error.type = error.name;
    DBMedicineDataObject.data = null;
    DBMedicineDataObject.status = 400;
    DBMedicineDataObject.server_message = "there is problem ";

    return DBMedicineDataObject;
  }
};

// delete med
exports.deleteMed = async (medId) => {
  try {
    await medicineModel.findByIdAndDelete(medId);

    DBMedicineDataObject.error.error = false;
    DBMedicineDataObject.error.message = null;
    DBMedicineDataObject.error.type = null;
    DBMedicineDataObject.data = null;
    DBMedicineDataObject.status = 200;
    DBMedicineDataObject.server_message = "med has been delete";

    return DBMedicineDataObject;
  } catch (error) {
    DBMedicineDataObject.error.error = true;
    DBMedicineDataObject.error.message = error.message;
    DBMedicineDataObject.error.type = error.name;
    DBMedicineDataObject.data = null;
    DBMedicineDataObject.status = 400;
    DBMedicineDataObject.server_message = "there is problem ";

    return DBMedicineDataObject;
  }
};
