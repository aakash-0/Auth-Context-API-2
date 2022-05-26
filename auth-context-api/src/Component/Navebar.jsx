import React, { useContext } from 'react'
import {AuthContext} from "../Context/AuthContext"
function Navebar() {
    const {isAuth,toggleAuth,setloading} = useContext(AuthContext);
  return (
    <div><div className='navebar'>
    <div></div>
    <div>
        <button onClick={()=>{toggleAuth()}} >login</button>
    </div>
</div></div>
  )
}

export default Navebar