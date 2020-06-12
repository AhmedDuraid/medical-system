const feedbackModel = require("../../models/othersModel/feedbackModel");

let DBFeedbackDataObject = {
  error: {
    error: false,
    message: null,
    type: null,
  },
  data: null,
  status: 0,
  server_message: "", // 400 bad request, 200 ok, 404 not found
};

// get all data
exports.getFeedback = async () => {
  try {
    const DBFeedbcak = await feedbackModel.find();

    if (DBFeedbcak.length === 0) {
      DBFeedbackDataObject.error.error = false;
      DBFeedbackDataObject.error.message = null;
      DBFeedbackDataObject.error.type = null;
      DBFeedbackDataObject.data = null;
      DBFeedbackDataObject.status = 404;
      DBFeedbackDataObject.server_message = " there is no data";

      return DBFeedbackDataObject;
    } else {
      DBFeedbackDataObject.error.error = false;
      DBFeedbackDataObject.error.message = null;
      DBFeedbackDataObject.error.type = null;
      DBFeedbackDataObject.data = DBFeedbcak;
      DBFeedbackDataObject.status = 200;
      DBFeedbackDataObject.server_message = "data found ";

      return DBFeedbackDataObject;
    }
  } catch (error) {
    DBFeedbackDataObject.error.error = true;
    DBFeedbackDataObject.error.message = error.message;
    DBFeedbackDataObject.error.type = error.name;
    DBFeedbackDataObject.data = null;
    DBFeedbackDataObject.status = 400;
    DBFeedbackDataObject.server_message = " check error";

    return DBFeedbackDataObject;
  }
};

// get data by id
exports.getFeedbackById = async (feedbackID) => {
  try {
    const DBFeedbcak = await feedbackModel.findById(feedbackID);

    if (DBFeedbcak.length === 0) {
      DBFeedbackDataObject.error.error = false;
      DBFeedbackDataObject.error.message = null;
      DBFeedbackDataObject.error.type = null;
      DBFeedbackDataObject.data = null;
      DBFeedbackDataObject.status = 404;
      DBFeedbackDataObject.server_message = " there is no data";

      return DBFeedbackDataObject;
    } else {
      DBFeedbackDataObject.error.error = false;
      DBFeedbackDataObject.error.message = null;
      DBFeedbackDataObject.error.type = null;
      DBFeedbackDataObject.data = DBFeedbcak;
      DBFeedbackDataObject.status = 200;
      DBFeedbackDataObject.server_message = "data found ";

      return DBFeedbackDataObject;
    }
  } catch (error) {
    DBFeedbackDataObject.error.error = true;
    DBFeedbackDataObject.error.message = error.message;
    DBFeedbackDataObject.error.type = error.name;
    DBFeedbackDataObject.data = null;
    DBFeedbackDataObject.status = 400;
    DBFeedbackDataObject.server_message = " check error";

    return DBFeedbackDataObject;
  }
};

// add new feedback
exports.addNewFeedback = async (feedbackData) => {
  try {
    await feedbackModel.create(feedbackData);

    DBFeedbackDataObject.error.error = false;
    DBFeedbackDataObject.error.message = null;
    DBFeedbackDataObject.error.type = null;
    DBFeedbackDataObject.data = null;
    DBFeedbackDataObject.status = 200;
    DBFeedbackDataObject.server_message = "feedback added";

    return DBFeedbackDataObject;
  } catch (error) {
    DBFeedbackDataObject.error.error = true;
    DBFeedbackDataObject.error.message = error.message;
    DBFeedbackDataObject.error.type = error.name;
    DBFeedbackDataObject.data = null;
    DBFeedbackDataObject.status = 400;
    DBFeedbackDataObject.server_message = " check error";

    return DBFeedbackDataObject;
  }
};

exports.updateFeedbackToRead = async (feedbackID) => {
  try {
    await feedbackModel.findByIdAndUpdate(feedbackID, { read: true });

    DBFeedbackDataObject.error.error = false;
    DBFeedbackDataObject.error.message = null;
    DBFeedbackDataObject.error.type = null;
    DBFeedbackDataObject.data = null;
    DBFeedbackDataObject.status = 200;
    DBFeedbackDataObject.server_message = "feedback updated";

    return DBFeedbackDataObject;
  } catch (error) {
    DBFeedbackDataObject.error.error = true;
    DBFeedbackDataObject.error.message = error.message;
    DBFeedbackDataObject.error.type = error.name;
    DBFeedbackDataObject.data = null;
    DBFeedbackDataObject.status = 400;
    DBFeedbackDataObject.server_message = " check error";

    return DBFeedbackDataObject;
  }
};
