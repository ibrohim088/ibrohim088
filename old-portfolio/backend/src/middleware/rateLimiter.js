import rateLimit from 'express-rate-limit'

const contactLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { msg: 'Too many attempts. Please try again in 15 minutes.' }
})

export default contactLimit
