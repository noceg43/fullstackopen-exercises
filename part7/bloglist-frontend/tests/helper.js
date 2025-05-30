const loginWith = async (page, username, password) => {
    await page.getByTestId('username').fill(username)
    await page.getByTestId('password').fill(password)
    await page.getByRole('button', { name: 'login' }).click()
}

const createBlog = async (page, content) => {
    await page.getByRole('button', { name: 'new blog' }).click()
    await page.getByTestId('title').fill(content.title)
    await page.getByTestId('author').fill(content.author)
    await page.getByTestId('url').fill(content.url)
    // click the create button
    await page.getByRole('button', { name: 'create' }).click()
    // wait for the blog to be created
    await page.getByText(content.title).waitFor()
    await page.getByRole('button', { name: 'cancel' }).click()
}

const likeBlog = async (page, content) => {
    const blogElement = await page.getByText(content.title)
    await blogElement.getByRole('button', { name: 'view' }).click()

    // Get the current likes count before clicking like
    const likeText = await blogElement.getByText(/likes/i)
    const likeCountText = await likeText.textContent()
    const currentLikes = parseInt(likeCountText.match(/\d+/)[0])

    // Click the like button
    await blogElement.getByRole('button', { name: 'like' }).click()

    // Wait for the likes count to update (to currentLikes + 1)
    const expectedLikes = currentLikes + 1
    await blogElement.getByText(`likes ${expectedLikes}`).waitFor()
    await blogElement.getByRole('button', { name: 'hide' }).click()
}
export { loginWith, createBlog, likeBlog }