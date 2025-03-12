const { test, after, beforeEach } = require('node:test')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const assert = require('node:assert')
const { blogs } = require('../tests/blogs_for_test')
const Blog = require('../models/blog')
const helper = require('../tests/test_helper')
const { blogsInDb } = require('../tests/test_helper')




const api = supertest(app)


// run this before each test
beforeEach(async () => {
  await Blog.deleteMany({})

  const blogObjects = blogs
    .map(blog => new Blog(blog))
  // array of promises
  const promiseArray = blogObjects.map(blog => blog.save())
  // wait for all promises to resolve (like on Dart Future.wait)
  await Promise.all(promiseArray)
})


test('all blogs are returned', async () => {
  const response = await api.get('/api/blogs')

  assert.strictEqual(response.body.length, blogs.length)
})


test('blog unique identifier is named id', async () => {
  const response = await api.get('/api/blogs')

  for (const blog of response.body) {
    assert(blog.id)
  }
})

test('a valid blog can be added ', async () => {
  const newBlog = {
    title: 'New blog',
    author: 'New author',
    url: 'https://new.com',
    likes: 0
  }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  const blogsAtEnd = await helper.blogsInDb()
  assert.strictEqual(blogsAtEnd.length, blogs.length + 1)
  const titles = blogsAtEnd.map(n => n.title)
  assert(titles.includes('New blog'))
})

test('a blog with likes missing will have default 0 likes', async () => {
  const newBlog = {
    title: 'No likes blog',
    author: 'No likes author',
    url: 'https://new.com'
  }

  const response = await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  assert.strictEqual(response.body.likes, 0)

})

test('adding a blog without title or url is forbidden', async () => {
  const noTitleBlog = {
    'author': 'No title author',
    'url': 'https://no-title.com',
    'likes': 0
  }

  const noUrlBlog = {
    'title': 'No url title',
    'author': 'No url author',
    'likes': 0
  }

  const noTitleAndUrlBlog = {
    'author': 'No title and url author',
    'likes': 0
  }

  let forbiddenBlogs = [noTitleBlog, noUrlBlog, noTitleAndUrlBlog]

  for (const blog of forbiddenBlogs) {
    await api
      .post('/api/blogs')
      .send(blog)
      .expect(400)
  }

})

test('delete an existing blog', async () => {
  const blogToDelete = blogs[0]

  await api
    .delete(`/api/blogs/${blogToDelete.id}`)
    .expect(204)

  const allBlogs = await blogsInDb()
  allBlogs.forEach(blog => {
    assert.notStrictEqual(blog.id, blogToDelete.id)
  })
})

test('edit an existing blog', async () => {
  const blogToEdit = (await blogsInDb())[0]

  await api
    .put(`/api/blogs/${blogToEdit.id}`)
    .send({ likes: 100 })
    .expect(200)

  const allBlogs = await blogsInDb()
  allBlogs.forEach(blog => {
    if (blog.id === blogToEdit.id) {
      assert.strictEqual(blog.likes, 100)
    }
  })
})

// after, used to run something once all tests have been run
after(async () => {
  await mongoose.connection.close()
})