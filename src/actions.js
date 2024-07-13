import axios from 'axios';

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export const fetchUserRequest = () => ({
    type: FETCH_USER_REQUEST
});

export const fetchUserSuccess = (user) => ({
    type: FETCH_USER_SUCCESS,
    payload: user
});

export const fetchUserFailure = (error) => ({
    type: FETCH_USER_FAILURE,
    payload: error
});

export const fetchUser = (userId) => {
    return (dispatch) => {
        dispatch(fetchUserRequest());
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => {
                dispatch(fetchUserSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchUserFailure(error.message));
            });
    };
};