const express = require('express')
const history = require('connect-history-api-fallback')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const Template = require('./src/models/template')

const app = express()
const PORT = 3000
const DB_SERVER = 'mongodb://localhost/notfound'

const logger = function(req, res, next) {
  // Log requests
  console.log(Date.now().toString(), "[" + req.method + "]:", req.url)
  next()
}

// Connect to DB - Mongo
mongoose.connect(DB_SERVER)
  .then(() => console.log('Database connected'))
  .catch((err) => console.error(err))

// Middleware
app.use(logger)
app.use(history())
app.use(express.static(path.join(__dirname, 'dist')))
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Routes
// - Templates
app.get('/api/templates', (req, res) => {
  // Fetch data from MongoDB
  Template.find()
    .exec() 
    .then(doc => {
      res.status(200).json(doc)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: err })
    })
});

app.post('/api/templates', (req, res) => {
  const template =  new Template({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    slug: req.body.slug
  })

  template.save()
    .then(result => {
      res.status(200).json({ message: 'Successfully created', data: result })
    })
    .catch(err => console.log(err))
});

app.delete('/api/templates/:id', (req, res) => {
  const id = req.params.id
  Template.remove({_id: id})
    .then(result => {
      if (result.n === 1) {
        res.status(200).json({ message: 'Successfully deleted', data: result })
      } else {
        res.status(500).json({ message: 'The was no record to delete' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Error: ' + err }) 
    })
});

app.all('*', (req, res) => {
  res.send('Opps: You were not supposed to see that')
})

app.listen(PORT, () => console.log(`App is running on localhost:${PORT}`))

