const langMiddleware = (req, res, next) => {
  const header = req.headers['accept-language'] || 'uz'
  const allowed = ['uz', 'ru', 'en']
  req.lang = allowed.find(l => header.startsWith(l)) || 'uz'
  next()
}

export default langMiddleware
