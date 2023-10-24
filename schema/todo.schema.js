const Joi = require('joi')

const todoSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});

module.exports = todoSchema;
