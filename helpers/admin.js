import jwt from 'jsonwebtoken'

const TOKEN_KEY = process.env.NODE_ENV === 'production' ? process.env.TOKEN_KEY : 'areallylonggoodkey'

const admin = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    if (jwt.verify(token, TOKEN_KEY)) {
      const payload = jwt.verify(token, TOKEN_KEY)
      if (payload.roles === 'admin') {
        next()
      }
    }
  } catch (error) {
    console.log(error)
    res.status(403).send('Unauthorized')
  }
}

export default admin