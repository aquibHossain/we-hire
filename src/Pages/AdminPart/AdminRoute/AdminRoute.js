import { CircularProgress } from '@mui/material';
import React from 'react';
import { Route,Redirect  } from "react-router-dom";
import useAuth from '../../../hook/useAuth';
const AdminRoute = ({ children, ...rest }) => {
    const {user,admin,isLoading}= useAuth();
        console.log(isLoading);
    return (
        <div>
              {isLoading?<CircularProgress/>:<Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />}
           </div>
    );
};

export default AdminRoute;