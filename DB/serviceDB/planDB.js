const planModel = require("../../models/servicesModel/planModel");

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

// create new plan
exports.newPlan = async (info) => {
  try {
    console.log(info);

    await planModel.create(info);

    DBMedicineDataObject.error.error = false;
    DBMedicineDataObject.error.message = null;
    DBMedicineDataObject.error.type = null;
    DBMedicineDataObject.data = null;
    DBMedicineDataObject.status = 200;
    DBMedicineDataObject.server_message = "plan created";

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
