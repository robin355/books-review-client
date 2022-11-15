import { React, useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const ReviewUser = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h3>{user?.email}</h3>
        </div>
    );
};

export default ReviewUser;