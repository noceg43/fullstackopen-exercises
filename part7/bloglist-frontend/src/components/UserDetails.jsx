import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { initializeUsers } from '../reducers/userReducer';
import PropTypes from 'prop-types';

const UserDetails = (props) => {
    const { id } = props;
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);

    useEffect(() => {
        dispatch(initializeUsers())
    })

    const user = users.find(user => user.id === id);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{user.name}</h2>
            <h3>Blogs created</h3>
            <ul>
                {user.blogs.map(blog => (
                    <li key={blog.id}>{blog.title}</li>
                ))}
            </ul>
        </div>)
}

UserDetails.propTypes = {
    id: PropTypes.string.isRequired
};

export default UserDetails;
