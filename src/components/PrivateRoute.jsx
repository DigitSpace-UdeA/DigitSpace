import React, { useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';


const PrivateRoute = ({children}) => {

    const {isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();

    useEffect(( )=> {
        const fetchAuth0Token = async () =>{
             const accessToken = await getAccessTokenSilently({
                audience: "api-autenticacion-digitspace",
            });
            localStorage.setItem("token", accessToken)
            console.log(accessToken);
        };
        if (isAuthenticated){

            fetchAuth0Token()
        }
    

    },[isAuthenticated, getAccessTokenSilently]);


    if (isLoading) return <div className= " flex h-screen justify-center items-center "> <div className="text-center bg-gray-600 p-5 rounded-full text-white text-3xl  border-double">Loading...</div></div>;
    return isAuthenticated ? (
    <> {children} </>
    ):(

        <div className="flex flex-col  h-screen justify-center items-center text-center space-y-10">
            <div className=" text-3xl text-center text-white bg-red-500 rounded-full py-5 w-6/12
            ">No estás autorizado
                <i class="fas fa-ban ml-4 text-2xl"></i>
            </div> 
            <div>
            <button className=" bg-gray-400 hover:bg-red-gray-800 rounded-full p-6 cursor-pointer box-border">
            <Link to= '/'>
                <span className='flex justify-center flex-row space-x-5 text-2xl text-white 
             '>Llévame al inicio
                <i class="fas fa-home ml-4 text-2xl"></i>
                </span>
                
            </Link></button>
            </div>
        </div>
    
    );
};

export default PrivateRoute
