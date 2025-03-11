const Blog = require('../models/blog')

const nonExistingId = async () => {
  const blog = new Blog({
    title: 'Nonexisting blog',
    author: 'Nonexisting author',
    url: 'https://nonexisting.com',
    likes: 0,
  },)
  await blog.save()
  await blog.deleteOne()

  return blog._id.toString()
}

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

module.exports = {
  nonExistingId, blogsInDb
}