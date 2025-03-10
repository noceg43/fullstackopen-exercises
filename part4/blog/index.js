const app = require('./app') // the actual Express application
const config = require('./utils/config')
const logger = require('./utils/logger')

var port = config.PORT

app.listen(port, () => {
  logger.info(`Server running on port ${port}`)
})


const blogsRouter = require('./controllers/blogs')
app.use('/api/blogs', blogsRouter)