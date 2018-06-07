const express = require('express')
const history = require('connect-history-api-fallback')
const path = require('path')

const app = express()
const PORT = 3000

const logger = function(req, res, next) {
  // Log requests
  console.log(Date.now().toString(), "[" + req.method + "]:", req.url)
  next()
}

// Middleware
app.use(logger)
app.use(history())
app.use(express.static(path.join(__dirname, 'dist')))

// Routes
app.get('/api/templates', (req, res) => {
  const data = [
    { title: "Search", slug: "search" },
    { title: "Gif", slug: "gif" },
    { title: "Puzzle", slug: "puzzle" },
    { title: "Suggestions", slug: "suggestions" }
  ]
  res.json(data)
});

app.all('*', (req, res) => {
  res.send('Opps: You were not supposed to see that')
})

app.listen(PORT, () => console.log(`App is running on localhost:${PORT}`))

