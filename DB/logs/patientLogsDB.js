const patienLogsModel = require("../../models/logs/patienLogsmodel");

let DBarticleDataObject = {
  error: {
    error: false,
    message: null,
    type: null
  },
  data: null,
  status: 0,
  server_message: "" // 400 bad request, 200 ok, 404 not found
};

exports.addPateintlogs = async bodyData => {
  console.log(bodyData);

  try {
    await patienLogsModel.create({
      log: {
        date: bodyData.date
      }
    });

    const data = await patienLogsModel.find();

    DBarticleDataObject.error.error = false;
    DBarticleDataObject.error.message = null;
    DBarticleDataObject.error.type = null;
    DBarticleDataObject.data = data;
    DBarticleDataObject.status = 200;
    DBarticleDataObject.server_message = "logs created ";

    return DBarticleDataObject;
  } catch (error) {
    DBarticleDataObject.error.error = true;
    DBarticleDataObject.error.message = error.message;
    DBarticleDataObject.error.type = error.name;
    DBarticleDataObject.data = null;
    DBarticleDataObject.status = 400;
    DBarticleDataObject.server_message = "check error message ";

    return DBarticleDataObject;
  }
};
