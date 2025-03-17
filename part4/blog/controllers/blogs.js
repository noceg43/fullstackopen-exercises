const Blog = require('../models/blog')
const blogsRouter = require('express').Router()

blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({}).populate('user', { username: 1, name: 1, id: 1 })
  response.json(blogs)
})

blogsRouter.post('/', async (request, response) => {
  if (request.body.title && request.body.url) {
    const user = request.user

    if (!user) {
      return response.status(401).json({
        error: 'token missing or invalid'
      })
    }

    const blog = new Blog({
      title: request.body.title,
      url: request.body.url,
      user: user.id
    })

    const result = await blog.save()

    user.blogs = user.blogs.concat(result._id)
    await user.save()

    response.status(201).json(result)
  } else {
    response.status(400).end()
  }
})

blogsRouter.delete('/:id', async (request, response) => {
  if (!request.user) {
    return response.status(401).json({
      error: 'token missing or invalid'
    })
  }

  const blogToDelete = await Blog.findById(request.params.id)

  if (!blogToDelete.user ||
    blogToDelete.user.toString() !== request.user.id.toString()) {
    return response.status(401).json({
      error: 'unauthorized to delete this blog'
    })
  } else {
    await Blog.deleteOne({ _id: request.params.id })
    response.status(204).end()
  }

})


module.exports = blogsRouter