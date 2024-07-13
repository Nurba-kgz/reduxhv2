import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from './actions';

const UserCard = ({ userId }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error);

    const handleClick = () => {
        dispatch(fetchUser(userId));
    };

    return (
        <div className="user-card" onClick={handleClick}>
            <h2>User Card</h2>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <div>
                    {user && (
                        <>
                            <p>Name: {user.name}</p>
                            <p>Email: {user.email}</p>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default UserCard;