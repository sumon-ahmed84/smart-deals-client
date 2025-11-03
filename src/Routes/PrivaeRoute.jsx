import React, { use } from 'react';
import { AuthContexts } from '../contexts/AuthContexts';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user} =use(AuthContexts);

    if(!user){
        return <Navigate to="/login" replace />;
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;