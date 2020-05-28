const Joi = require('joi');
const schemas = {
  // Register schema validator
  register: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .min(8)
      .required(),
  }),
  // Login schema validator
  login: Joi.object().keys({
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .min(8)
      .required(),
  }),
  // Order schema validator
  createOrder: Joi.object().keys({
    user: Joi.string()
      .required()
      .regex(/[0-9a-fA-F]{24}/),
    products: Joi.array()
      .required()
      .min(1)
      .unique()
      .items({
        id: Joi.number().required(),
        amount: Joi.number().required(),
        currency: Joi.string().required(),
        quantity: Joi.number().required(),
        sku: Joi.string().required(),
        slug: Joi.string().required(),
        name: Joi.string().required(),
      }),
    address: Joi.object().keys({
      line1: Joi.string()
        .allow(null)
        .allow(''),
      line2: Joi.string()
        .allow(null)
        .allow(''),
      country: Joi.string()
        .allow(null)
        .allow(''),
      city: Joi.string()
        .allow(null)
        .allow(''),
      postalCode: Joi.string()
        .allow(null)
        .allow(''),
    }),
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
