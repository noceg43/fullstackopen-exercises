const blog = require("../models/blog")


const dummy = (blogs) => {
  return 1
}


const totalLikes = (blogs) => {
  likes = blogs.map(blog => blog.likes)
  return likes.reduce((p, c) => p + c)
}

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) {
    return null
  }
  topBlog = blogs[0]

  blogs.forEach(element => {
    if (element.likes > topBlog.likes) {
      topBlog = element
    }
  });
  return {
    title: topBlog.title,
    author: topBlog.author,
    likes: topBlog.likes
  }
}

const mostBlogs = (blogs) => {
  if (blogs.length === 0) {
    return null
  }

  let authorsAndBlogs = {}

  let authors = new Set(blogs.map(blog => blog.author))

  authors.forEach(author => {
    authorsAndBlogs[author] = 0
    blogs.forEach(blog => {
      if (blog.author === author) {
        authorsAndBlogs[author] += 1
      }
    })
  })

  let author = ""
  let mostBlogs = 0

  for (const [key, value] of Object.entries(authorsAndBlogs)) {
    if (value >= mostBlogs) {
      mostBlogs = value
      author = key
    }
  }


  return {
    "author": author,
    "blogs": mostBlogs
  }

}

const mostLikes = (blogs) => {
  if (blogs.length === 0) {
    return null
  }

  let authorsAndLikes = {}

  let authors = new Set(blogs.map(blog => blog.author))

  authors.forEach(author => {
    authorsAndLikes[author] = 0
    blogs.forEach(blog => {
      if (blog.author === author) {
        authorsAndLikes[author] += blog.likes
      }
    })
  })

  let author = ""
  let mostLikes = 0

  for (const [key, value] of Object.entries(authorsAndLikes)) {
    if (value >= mostLikes) {
      mostLikes = value
      author = key
    }
  }


  return {
    "author": author,
    "likes": mostLikes
  }

}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}