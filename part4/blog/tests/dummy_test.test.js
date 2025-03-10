const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')

const dataBlogs = require('../tests/blogs_for_test')


test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  assert.strictEqual(result, 1)
})


describe('total likes', () => {
  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
      likes: 5,
      __v: 0
    }
  ]

  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    assert.strictEqual(result, 5)
  })

  test('when list has multiple blogs, equals the likes of all', () => {
    const result = listHelper.totalLikes(dataBlogs.blogs)
    assert.strictEqual(result, 36)
  })


})

describe('favorite blog', () => {

  test('when list has no blogs, equals null', () => {
    const result = listHelper.favoriteBlog([])
    assert.strictEqual(result, null)
  })

  test('when list has only one blog, equals the blog itself', () => {
    const result = listHelper.favoriteBlog([dataBlogs.blogs[0]])
    assert.deepStrictEqual(result, {
      title: "React patterns",
      author: "Michael Chan",
      likes: 7
    })
  })

  test('when list has a lot of blogs, return the one with more likes', () => {
    const result = listHelper.favoriteBlog(dataBlogs.blogs)
    assert.deepStrictEqual(result, {
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      likes: 12
    })
  })

})

describe('most likes', () => {

  test('when list has no blogs, equals null', () => {
    const result = listHelper.mostLikes([])
    assert.strictEqual(result, null)
  })

  test('when list has only one blog, equals the author of that', () => {
    const result = listHelper.mostLikes([dataBlogs.blogs[0]])
    assert.deepStrictEqual(result, {
      author: "Michael Chan",
      likes: 7
    })
  })

  test('when list has a lot of blogs, return the author with more likes', () => {
    const result = listHelper.mostLikes(dataBlogs.blogs)
    assert.deepStrictEqual(result, {
      author: "Edsger W. Dijkstra",
      likes: 17
    })
  })


})

describe('most blogs', () => {

  test('when list has no blogs, equals null', () => {
    const result = listHelper.mostBlogs([])
    assert.strictEqual(result, null)
  })

  test('when list has only one blog, equals the author of that', () => {
    const result = listHelper.mostBlogs([dataBlogs.blogs[0]])
    assert.deepStrictEqual(result, {
      author: "Michael Chan",
      blogs: 1
    })
  })

  test('when list has a lot of blogs, return the author with more blogs', () => {
    const result = listHelper.mostBlogs(dataBlogs.blogs)
    assert.deepStrictEqual(result, {
      author: "Robert C. Martin",
      blogs: 3
    })
  })


})