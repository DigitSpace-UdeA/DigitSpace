import React from 'react'
import { useUser } from './context/userContex';

const PrivateComponent = ({roleList, children}) => {
    const {userData} = useUser();

    console.log("userdataaaaaa", userData)
        if (roleList.includes(userData.rol)){
            return children
        }
      return <>
        <div>
            NO TIENES ACCESO 
        </div>
      </>  
};

export default PrivateComponent;
