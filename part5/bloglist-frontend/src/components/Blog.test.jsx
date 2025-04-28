import React from 'react';
import Blog from './Blog';
import { render, screen } from '@testing-library/react';
import { test } from 'vitest';

const blog = {
    id: 1,
    title: 'Blog title',
    author: 'Blog author',
    url: 'https://example.com',
    likes: 0,
    user: {
        id: 1,
        name: 'User name'
    }
}

test('renders content', () => {

    render(<Blog blog={blog} onLikePressed={() => { }} onDelete={() => { }} />)

    // display the blog title and author on default
    const element = screen.getByText('Blog title', { exact: false })
    const elementAuthor = screen.getByText('Blog author', { exact: false })

    // hide url & likes by default
    // check these elements are not in the document
    const elementUrl = screen.queryByText('https://example.com', { exact: false })
    const elementLikes = screen.queryByText('likes 0', { exact: false })


    // it will output the html structure of the component
    screen.debug(element)


    expect(element).toBeDefined()
    expect(elementAuthor).toBeDefined()
    expect(elementUrl).not.toBeInTheDocument()
    expect(elementLikes).not.toBeInTheDocument()
})

test('renders url and likes when view button is clicked', async () => {

    render(<Blog blog={blog} onLikePressed={() => { }} onDelete={() => { }} />)

    // click the view button
    const button = screen.getByText('view')
    await button.click()

    // check url and likes are in the document
    const elementUrl = screen.getByText('https://example.com', { exact: false })
    const elementLikes = screen.getByText('likes 0', { exact: false })

    expect(elementUrl).toBeInTheDocument()
    expect(elementLikes).toBeInTheDocument()
})

test('clicking the like button twice calls event handler twice', async () => {
    const mockHandler = vi.fn()

    render(<Blog blog={blog} onLikePressed={mockHandler} onDelete={() => { }} />)

    // click the view button
    const button = screen.getByText('view')
    await button.click()

    // click the like button
    const likeButton = screen.getByText('like')
    await likeButton.click()
    await likeButton.click()

    expect(mockHandler.mock.calls).toHaveLength(2)
})