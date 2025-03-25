const Blog = require('../models/blog')
const blogsRouter = require('express').Router()

blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({}).populate('user', { username: 1, name: 1, id: 1, user: 1 })
  response.json(blogs)
})

blogsRouter.post('/', async (request, response) => {
  if (request.body.title && request.body.url && request.body.author) {
    const user = request.user

    if (!user) {
      return response.status(401).json({
        error: 'token missing or invalid'
      })
    }

    const blog = new Blog({
      title: request.body.title,
      url: request.body.url,
      author: request.body.author,
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

blogsRouter.put('/:id', async (request, response) => {
  if (!request.user) {
    return response.status(401).json({
      error: 'token missing or invalid'
    })
  }

  const blogToUpdate = await Blog.findById(request.params.id)


  const updatedBlog = {
    title: request.body.title || blogToUpdate.title,
    author: request.body.author || blogToUpdate.author,
    url: request.body.url || blogToUpdate.url,
    likes: request.body.likes || blogToUpdate.likes
  }

  const result = await Blog.findByIdAndUpdate(request.params.id, updatedBlog, { new: true })
  response.json(result)


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