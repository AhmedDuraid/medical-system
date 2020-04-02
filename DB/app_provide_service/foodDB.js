const foodModel = require("../../models/app_provide_service_Model/foodModel");

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

// get all food data
exports.getFood = async () => {
  try {
    const data = await foodModel.find();

    DBarticleDataObject.error.error = false;
    DBarticleDataObject.error.message = null;
    DBarticleDataObject.error.type = null;
    DBarticleDataObject.data = data;
    DBarticleDataObject.status = 200;
    DBarticleDataObject.server_message = "there is data ";

    return DBarticleDataObject;
  } catch (error) {
    DBarticleDataObject.error.error = true;
    DBarticleDataObject.error.message = error.message;
    DBarticleDataObject.error.type = error.name;
    DBarticleDataObject.data = null;
    DBarticleDataObject.status = 400;
    DBarticleDataObject.server_message = "error ";

    return DBarticleDataObject;
  }
};

// get data by id
exports.getFoodById = async id => {
  try {
    const data = await foodModel.findById(id);

    DBarticleDataObject.error.error = false;
    DBarticleDataObject.error.message = null;
    DBarticleDataObject.error.type = null;
    DBarticleDataObject.data = data;
    DBarticleDataObject.status = 200;
    DBarticleDataObject.server_message = "there is data ";

    return DBarticleDataObject;
  } catch (error) {
    DBarticleDataObject.error.error = true;
    DBarticleDataObject.error.message = error.message;
    DBarticleDataObject.error.type = error.name;
    DBarticleDataObject.data = null;
    DBarticleDataObject.status = 400;
    DBarticleDataObject.server_message = "error ";

    return DBarticleDataObject;
  }
};

// add new food
exports.addNewFood = async bodyDate => {
  try {
    await foodModel.create(bodyDate);

    DBarticleDataObject.error.error = false;
    DBarticleDataObject.error.message = null;
    DBarticleDataObject.error.type = null;
    DBarticleDataObject.data = null;
    DBarticleDataObject.status = 200;
    DBarticleDataObject.server_message = "data added ";

    return DBarticleDataObject;
  } catch (error) {
    DBarticleDataObject.error.error = true;
    DBarticleDataObject.error.message = error.message;
    DBarticleDataObject.error.type = error.name;
    DBarticleDataObject.data = null;
    DBarticleDataObject.status = 400;
    DBarticleDataObject.server_message = "error ";

    return DBarticleDataObject;
  }
};

// update food
exports.updateFood = async (id, data) => {
  try {
    await foodModel.findByIdAndUpdate(id, data);

    DBarticleDataObject.error.error = false;
    DBarticleDataObject.error.message = null;
    DBarticleDataObject.error.type = null;
    DBarticleDataObject.data = null;
    DBarticleDataObject.status = 200;
    DBarticleDataObject.server_message = "data updated ";

    return DBarticleDataObject;
  } catch (error) {
    DBarticleDataObject.error.error = true;
    DBarticleDataObject.error.message = error.message;
    DBarticleDataObject.error.type = error.name;
    DBarticleDataObject.data = null;
    DBarticleDataObject.status = 400;
    DBarticleDataObject.server_message = "error ";

    return DBarticleDataObject;
  }
};

// delete food data

// update food
exports.deleteFood = async id => {
  try {
    await foodModel.findByIdAndRemove(id);

    DBarticleDataObject.error.error = false;
    DBarticleDataObject.error.message = null;
    DBarticleDataObject.error.type = null;
    DBarticleDataObject.data = null;
    DBarticleDataObject.status = 200;
    DBarticleDataObject.server_message = "data delete ";

    return DBarticleDataObject;
  } catch (error) {
    DBarticleDataObject.error.error = true;
    DBarticleDataObject.error.message = error.message;
    DBarticleDataObject.error.type = error.name;
    DBarticleDataObject.data = null;
    DBarticleDataObject.status = 400;
    DBarticleDataObject.server_message = "error ";

    return DBarticleDataObject;
  }
};
