import React, { useContext } from 'react'
import {Components2} from './components2'
import { UseContext } from 'react'
import { UserContext } from './UseContext.jsx/UserParent'

export const Components3  = ({myName}) => {
    const {name,setname} = useContext(UserContext)
  return (
    <>
    <div>
    <div className='text-3xl text-red-500 font-bold text-center pt-10'>
        <h1>myName:{myName}</h1>
        <h3>my name is: {name}</h3>
    </div>
    </div>
    </>
  )
}