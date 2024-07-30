import React from 'react'
import useAuth from '../context/UserContext'

const Contact = () => {
  const {auth} = useAuth()

console.log(auth)
  return (
    <div>
      {/* {auth.map((i) => (
        <p>{i.userName}</p>
      ))} */}
    </div>
  )
}

export default Contact
