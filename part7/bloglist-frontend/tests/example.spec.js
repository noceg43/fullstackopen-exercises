import { test, expect } from '@playwright/test';
import { loginWith, createBlog, likeBlog } from './helper';

const gigiUser = {
  name: 'Gigi',
  username: 'gigi',
  password: 'gigiPassword'
}

const otherUser = {
  name: 'Other',
  username: 'other',
  password: 'otherPassword'
}

const blogContent = {
  title: 'Test Blog',
  author: 'Test Author',
  url: 'https://testblog.com'
}

const blogContent2 = {
  title: 'Other Blog',
  author: 'Other Author',
  url: 'https://otherblog.com'
}

// config the playwright.config.js to do not run parallel tests & set baseURL
test.describe('Blog app', () => {
  test.beforeEach(async ({ page, request }) => {
    await request.post('/api/testing/reset')
    await request.post('/api/users', {
      data: gigiUser,
    })
    await request.post('/api/users', {
      data: otherUser,
    })
    await page.goto('/')
  })

  test('Login form is shown', async ({ page }) => {
    const uLocator = await page.getByTestId('username')
    const pLocator = await page.getByTestId('password')

    await expect(uLocator).toBeVisible()
    await expect(pLocator).toBeVisible()
  })

  test.describe('Login', () => {
    test('succeeds with correct credentials', async ({ page }) => {
      await loginWith(page, gigiUser.username, gigiUser.password)
      await expect(page.getByText(gigiUser.name + ' logged in')).toBeVisible()
    })

    test('fails with wrong credentials', async ({ page }) => {
      await loginWith(page, gigiUser.username, 'wrongPassword')
      const errorMessage = await page.getByText('wrong credentials')
      await expect(errorMessage).toBeVisible()
    })
  })

  test.describe('When logged in', () => {
    test.beforeEach(async ({ page }) => {
      await loginWith(page, gigiUser.username, gigiUser.password)
    })

    test('a new blog can be created', async ({ page }) => {

      // click "new blog" button
      await createBlog(page, blogContent)
      await expect(page.getByText(blogContent.title)).toBeVisible()
      await expect(page.getByText(blogContent.author)).toBeVisible()
    })

    test('a blog can be liked', async ({ page }) => {
      await createBlog(page, blogContent)
      const blogText = await page.getByText(blogContent.title)
      const blogElement = blogText.locator('..')
      await blogElement.getByRole('button', { name: 'view' }).click()
      await blogElement.getByRole('button', { name: 'like' }).click()
      await expect(page.getByText('1 like')).toBeVisible()
    })

    test('a blog can be removed', async ({ page }) => {
      await createBlog(page, blogContent)
      const blogElement = await page.getByText(blogContent.title)
      await blogElement.getByRole('button', { name: 'view' }).click()
      await page.once('dialog', dialog => dialog.accept())
      await blogElement.getByRole('button', { name: 'remove' }).click()
      await page.getByText('Blog removed', { exact: false }).waitFor()
      await expect(page.getByText(blogContent.title)).not.toBeVisible()
    })

    test('blogs are ordered by likes', async ({ page }) => {
      await createBlog(page, blogContent)
      await createBlog(page, blogContent2)
      await likeBlog(page, blogContent)
      await likeBlog(page, blogContent2)
      await likeBlog(page, blogContent2)
      const blog1 = await page.getByText(blogContent.title)
      const blogList = await blog1.locator('..').textContent()

      const blog1Position = blogList.indexOf(blogContent.title)
      const blog2Position = blogList.indexOf(blogContent2.title)

      expect(blog2Position).toBeLessThan(blog1Position)
    })
  })

  test.describe('When multiple users are logged in', () => {
    test.beforeEach(async ({ page }) => {
      await loginWith(page, gigiUser.username, gigiUser.password)
    })

    test('a blog created by another user is not removable', async ({ page }) => {
      await createBlog(page, blogContent)
      await page.getByText('logout').click()
      await loginWith(page, otherUser.username, otherUser.password)
      await createBlog(page, blogContent2)
      const blog = await page.getByText(blogContent.title)

      await blog.getByRole('button', { name: 'view' }).click()
      await expect(blog.getByRole('button', { name: 'remove' })).not.toBeVisible()
    })
  })

})