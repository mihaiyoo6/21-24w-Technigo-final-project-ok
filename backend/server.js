import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import listEndpoints from 'express-list-endpoints'
import bcrypt from 'bcrypt'
import crypto from 'crypto'

dotenv.config()

import data from './data.json'

const app = express(); // Create an instance of the Express application

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/finalproject"
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
mongoose.Promise = Promise


//Schema and model for Positive Thought
const positiveThoughtSchema = mongoose.Schema({
  message: {
    type: String,
    required: [true, "Please share a thought"],
    unique: true,
    trim: true,
    minlength: [5, "Your message is too short. Min 5 characters, please."],
    maxlength: [100, "Your message is too long. Max 140 characters, please."]
  },
  thumbsup: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const PositiveThought = mongoose.model('PositiveThought', positiveThoughtSchema)


//Model for User
const User = mongoose.model('User', {
  username: {
    type: String,
    required: [true,'Username is required'],
    unique: [true, 'Sorry, that username already exists'],
    minlength:[4, 'Username should be at least 4 characters long']
  },
  password: {
    type: String,
    required:[true,'Password is required'],
    minlength:[6, 'Password should be at least 6 characters long']
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString('hex')
  }
})


//Schema and model for Resource1
const resource1Schema = new mongoose.Schema({
  picture: String,
  first_name: String,
  last_name: String,
  email: String,
  company: String,
  country: String,
  city: String,
  website: String,
  modality: String,
  category: String
})

const Resource1 = mongoose.model('Resource1', resource1Schema)


//Seeding of our database
if (process.env.RESET_DB) {

  const seedDB = async () => {
    await Resource1.deleteMany()

    data.forEach(item => {
      new Resource1(item).save()
    })
  }
  seedDB()
}


//Authentication function - middleware
const authenticateUser = async (req, res, next) => {
  const accessToken = req.header('Authorization')

  try {
    const user = await User.findOne({ accessToken })
    if (user) {
      next()
    } else {
      res.status(401).json({ success: false, message: "Not authenticated" })
    }
  } catch (error) {
    res.status(400).json({ success: false, message: "Invalid request", error })
  }
}

app.use(cors())
app.use(express.json())

// ENDPOINTS start here
app.get('/', (req, res) => {
  res.send(listEndpoints(app))
})


//An endpoint to get all the resources 
app.get('/resources_1', async (req, res) => {
  const { currentCategory } = req.query
  if (currentCategory) {
    const resources_1 = await Resource1.find({ category: currentCategory })
    res.json(resources_1);
  } else {
    const resources_1 = await Resource1.find()
    res.json(resources_1);
  }
})


//An endpoint to get all thoughts
app.get('/pos_sharing', authenticateUser) 
app.get('/pos_sharing', async (req, res) => {
  try {
  const allPositiveThoughts = await PositiveThought.find().sort({ createdAt: -1 });
  res.json({
    success: true,
    allPositiveThoughts
  })
  } catch(error) {
  res.status(400).json({ success: false, message: 'Invalid request', error })
  }    
});


//An endpoint to share a positive thought
app.post('/pos_sharing', authenticateUser)
app.post('/pos_sharing', async (req, res) => {
 const { message } = req.body
  try {
    const newPositiveThought = await new PositiveThought({ message }).save()
    res.json(newPositiveThought)
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: 'Duplicated value', fields: error.keyValue })
    }
    res.status(400).json(error)
  }
})


//An endpoint to detele a positive thought
app.delete('/pos_sharing/:_id', async (req, res) => {
  const { _id } = req.params

  try {
    const deletedPositiveThought = await PositiveThought.findByIdAndDelete({ _id });
    if (deletedPositiveThought) {
      res.json(deletedPositiveThought);
    } else {
      res.status(404).json({ message: 'Not found' })
    }
  } catch (error) {
    res.status(400).json({ message: 'Invalid request', error })
  }
})


//An endpoint to increase the amount of thumbsup
app.post('/pos_sharing/:_id/emojis', async (req, res) => {
  const { _id } = req.params;

  try {
    const updatedPositiveThought = await PositiveThought.findOneAndUpdate(
      {
        _id: _id
      },
      {
        $inc: {
          thumbsup: 1
        }
      },
      {
        new: true
      }
    );
    if (updatedPositiveThought) {
      res.json(updatedPositiveThought);
    } else {
      res.status(404).json({ message: 'Not found' })
    }
  } catch (error) {
    res.status(400).json({ message: 'Invalid request', error });
  }
}); 

//An endpoint to sign up 
app.post('/signup', async (req, res) => {
  const { username, password } = req.body

  try {
    const salt = bcrypt.genSaltSync()
    const newUser = await new User({
      username,
      password: bcrypt.hashSync(password, salt)
    }).save()
    res.json({
      success: true,
      userID: newUser._id,
      username: newUser.username,
      accessToken: newUser.accessToken
     })
   } catch (error) {
     if(error.code === 11000) {
       res.status(400).json({ success: false, message: 'Sorry, that username is already in use', error })
     } else {
     res.status(400).json({ success: false, message: 'Invalid request. Please try again', error })
   }}
 })


//An endpoint to signin
app.post('/signin', async (req, res) => {
  const { username, password } = req.body

  try {
    const user = await User.findOne({ username })

    console.log(user)

    if (user && bcrypt.compareSync(password, user.password)) {
      res.json({
        success: true, 
        userId: user._id,
        username: user.username,
        accessToken: user.accessToken
      })
    } else {
      res.status(404).json({ success:false, message: 'User not found or wrong password' });
    }                          
  } catch (error) {
    res.status(400).json({ success:false, message: 'Invalid request', error });
  }
})


// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
});
