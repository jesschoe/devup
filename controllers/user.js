import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import User from '../models/user.js'

const SALT_ROUNDS = process.env.NODE_ENV === 'production' ? process.env.SALT_ROUNDS : 11
const TOKEN_KEY = process.env.NODE_ENV === 'production' ? process.env.TOKEN_KEY : 'areallylonggoodkey'

// for JWT expiration
const today = new Date()
const exp = new Date(today)
exp.setDate(today.getDate() + 30)

export const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body
    const password_digest = await bcrypt.hash(password, SALT_ROUNDS)
    const user = new User({
      username,
      email,
      password_digest,
    })

    await user.save()

    const payload = {
      id: user._id,
      username: user.username,
      email: user.email,
      exp: parseInt(exp.getTime() / 1000),
    }

    const token = jwt.sign(payload, TOKEN_KEY)
    res.status(201).json({ token })
  } catch (error) {
    console.log(error.message)
    res.status(400).json({ error: error.message })
  }
}

export const signIn = async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await User.findOne({ username: username }).select(
      'username email password_digest'
    )
    if (await bcrypt.compare(password, user.password_digest)) {
      const payload = {
        id: user._id,
        username: user.username,
        email: user.email,
        exp: parseInt(exp.getTime() / 1000),
      }

      const token = jwt.sign(payload, TOKEN_KEY)
      res.status(201).json({ token })
    } else {
      res.status(401).send('Invalid Credentials')
    }
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

export const verify = async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const payload = jwt.verify(token, TOKEN_KEY)
    if (payload) {
      res.json(payload)
    }
  } catch (error) {
    console.log(error.message)
    res.status(401).send('Not Authorized')
  }
}

// export const changePassword = async (req, res) => {}

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('products')
    res.json(user)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

export const getWishList = async (req, res) => {
  try {
    const wishList = await User.findById(req.params.id).populate('products');
    res.json(wishList.wishList);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  } 
};

export const addToWishList = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    const product = await Product.findById(req.params.wishListItemId)
    const wishListItem = {
      productId: product.id,
      quantity: req.body.quantity
    }
    user.wishList.push(wishListItem)
    await user.save()
    res.status(201).json(user.wishList)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
};

export const removeFromWishList = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    const productIndex = user.wishList.indexOf(req.params.wishListItemId)
    user.wishList.splice(productIndex, 1)
    user.save()
    res.status(200).send("wishlist item deleted")
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

export const clearWishList = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    user.wishList = []
    user.save()
    res.status(200).send("wishList cleared")
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message })
  }
}
