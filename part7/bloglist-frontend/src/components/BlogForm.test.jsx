import React from 'react';
import BlogForm from './BlogForm';
import { render, screen } from '@testing-library/react';
import { test, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

test('renders content', async () => {
    const user = userEvent.setup();

    const title = 'Blog title';
    const author = 'Blog author';
    const url = 'https://example.com';

    // Use mock function to capture the call
    const createBlog = vi.fn();

    render(<BlogForm createBlog={createBlog} />);

    const titleInput = screen.getByPlaceholderText('title');
    const authorInput = screen.getByPlaceholderText('author');
    const urlInput = screen.getByPlaceholderText('url');
    const submitButton = screen.getByText('create');

    // Fill in the form
    await user.type(titleInput, title);
    await user.type(authorInput, author);
    await user.type(urlInput, url);

    // Submit the form
    await user.click(submitButton);

    // Check that createBlog was called with the correct data
    expect(createBlog).toHaveBeenCalledTimes(1);
    expect(createBlog).toHaveBeenCalledWith({
        title,
        author,
        url
    });
});