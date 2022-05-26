import React from 'react'
import { useContext } from 'react';
import {AuthContext} from "../Context/AuthContext"
export default function Display() {
    const {isAuth,loading,toggleAuth,setloading} = useContext(AuthContext);
  return (
     <div>
         {
             !isAuth && <div>User Status : loged out </div>
         }
    {
      (loading?<div>loading...</div>:<div>userToken:{isAuth}</div>)
    }
 </div>
  )
}
