import Joi from 'joi'

const schema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().allow(''),
  subject: Joi.string().allow(''),
  message: Joi.string().min(5).required()
})

const validate = (req, res, next) => {
  const { error } = schema.validate(req.body)
  if (error) return res.status(400).json({ msg: error.details[0].message })
  next()
}

export default validate