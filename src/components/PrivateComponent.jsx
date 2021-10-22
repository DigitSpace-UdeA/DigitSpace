import React from 'react'
import { useUser } from './context/userContex';

const PrivateComponent = ({roleList, children}) => {
    const {userData} = useUser();

        if (roleList.includes('Administrador')){
            return children
        }
      return <>
      
      </>  
};

export default PrivateComponent;
