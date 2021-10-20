import React, { useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';


const PrivateRoute = ({children}) => {

    const {isAuthenticated, isLoading } = useAuth0();

    if (isLoading) return <div> Loanding...</div>;
    return isAuthenticated ? (
    <> {children} </>
    ):(
        <div><div className="text-xl">No estás autorizado</div> 
        <Link to= '/'>
            <span className='text-2xl text-green-500'>Llévame al inicio</span>
        </Link>
        </div>
    
    );
};

export default PrivateRoute
