const Joi = require('joi');
const schemas = {
  register: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .min(8)
      .required(),
  }),
  login: Joi.object().keys({
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .min(8)
      .required(),
  }),
};
const validate = schema => {
  return (request, response, next) => {
    const validation = Joi.validate(request.body, schemas[schema], {
      abortEarly: false,
    });

    if (validation.error) {
      return response.status(400).json({
        statusCode: 400,
        error: 'Bad request',
        message: validation.error.details,
      });
    } else {
      if (!request.value) {
        request.value = {};
      }
      request.value['body'] = validation.value;
      next();
    }
  };
};

module.exports = validate;
