const todoSchema  = require("../schema/todo.schema");

const todoValidator = (req, res, next) => {
  const dataToValidate = req.body;

  const { error } = todoSchema.validate(dataToValidate);

  if (error) {
    const errorMessage = error.details
      .map((detail) => detail.message)
      .join(", ");
    return res
      .status(400)
      .json({ status: "fail", message: `login failed, ${errorMessage}` });
  }

  next();
};

module.exports = todoValidator;
