const Blog = require('../models/blog')
const User = require('../models/user')

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

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}

const userTokenIfNotExists = async (api) => {
  const newUser = {
    username: 'test',
    name: 'test',
    password: 'test'
  }

  if (!(await User.findOne({ username: newUser.username }))) {
    await api.post('/api/users').send(newUser).expect(201)
  }

  const loginResponse = await api.post('/api/login').send(newUser).expect(200)

  return 'Bearer ' + loginResponse.body.token


}

module.exports = {
  nonExistingId, blogsInDb, usersInDb, userTokenIfNotExists
}