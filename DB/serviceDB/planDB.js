const planModel = require("../../models/servicesModel/planModel");

let DBPlanDataObject = {
  error: {
    error: false,
    message: null,
    type: null,
  },
  data: null,
  status: 0,
  server_message: "", // 400 bad request, 200 ok, 404 not found
};

// get all plans
exports.getPlans = async () => {
  try {
    const plans = await planModel.find();

    DBPlanDataObject.error.error = false;
    DBPlanDataObject.error.message = null;
    DBPlanDataObject.error.type = null;
    DBPlanDataObject.data = plans;
    DBPlanDataObject.status = 200;
    DBPlanDataObject.server_message = "plan created";

    return DBPlanDataObject;
  } catch (error) {
    DBPlanDataObject.error.error = true;
    DBPlanDataObject.error.message = error.message;
    DBPlanDataObject.error.type = error.name;
    DBPlanDataObject.data = null;
    DBPlanDataObject.status = 400;
    DBPlanDataObject.server_message = "there is problem ";

    return DBPlanDataObject;
  }
};

// get plan by id
exports.getPlanByID = async (planId) => {
  try {
    const plans = await planModel.findById(planId);

    DBPlanDataObject.error.error = false;
    DBPlanDataObject.error.message = null;
    DBPlanDataObject.error.type = null;
    DBPlanDataObject.data = plans;
    DBPlanDataObject.status = 200;
    DBPlanDataObject.server_message = "plan created";

    return DBPlanDataObject;
  } catch (error) {
    DBPlanDataObject.error.error = true;
    DBPlanDataObject.error.message = error.message;
    DBPlanDataObject.error.type = error.name;
    DBPlanDataObject.data = null;
    DBPlanDataObject.status = 400;
    DBPlanDataObject.server_message = "there is problem ";

    return DBPlanDataObject;
  }
};

// create new plan
exports.createNewPlan = async (planInfo) => {
  try {
    await planModel.create(planInfo);

    DBPlanDataObject.error.error = false;
    DBPlanDataObject.error.message = null;
    DBPlanDataObject.error.type = null;
    DBPlanDataObject.data = null;
    DBPlanDataObject.status = 200;
    DBPlanDataObject.server_message = "plan created";

    return DBPlanDataObject;
  } catch (error) {
    DBPlanDataObject.error.error = true;
    DBPlanDataObject.error.message = error.message;
    DBPlanDataObject.error.type = error.name;
    DBPlanDataObject.data = null;
    DBPlanDataObject.status = 400;
    DBPlanDataObject.server_message = "there is problem ";

    return DBPlanDataObject;
  }
};

// update plan
exports.updatePlan = async (planId, planInfo) => {
  try {
    await planModel.findOneAndUpdate(planId, planInfo);

    DBPlanDataObject.error.error = false;
    DBPlanDataObject.error.message = null;
    DBPlanDataObject.error.type = null;
    DBPlanDataObject.data = null;
    DBPlanDataObject.status = 200;
    DBPlanDataObject.server_message = "plan created";

    return DBPlanDataObject;
  } catch (error) {
    DBPlanDataObject.error.error = true;
    DBPlanDataObject.error.message = error.message;
    DBPlanDataObject.error.type = error.name;
    DBPlanDataObject.data = null;
    DBPlanDataObject.status = 400;
    DBPlanDataObject.server_message = "there is problem ";

    return DBPlanDataObject;
  }
};

// create new plan
exports.deletePlan = async (planId) => {
  try {
    await planModel.findByIdAndRemove(planId);

    DBPlanDataObject.error.error = false;
    DBPlanDataObject.error.message = null;
    DBPlanDataObject.error.type = null;
    DBPlanDataObject.data = null;
    DBPlanDataObject.status = 200;
    DBPlanDataObject.server_message = "plan created";

    return DBPlanDataObject;
  } catch (error) {
    DBPlanDataObject.error.error = true;
    DBPlanDataObject.error.message = error.message;
    DBPlanDataObject.error.type = error.name;
    DBPlanDataObject.data = null;
    DBPlanDataObject.status = 400;
    DBPlanDataObject.server_message = "there is problem ";

    return DBPlanDataObject;
  }
};
