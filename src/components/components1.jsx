import React from 'react'
import { Components2 } from './components2'


export const Components1 = ({myName}) => {
    // let Students={
    //     name:"somto",
    //     age:23,
    //     gender:"Male",
    //     address:"Bangalore"
    // }
    // let {name} = Students
    // console.log(Students.name)
  return (
    <>

    <Components2 myName={myName}/>
    
    </>
  )
}
