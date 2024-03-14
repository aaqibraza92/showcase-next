import React, { useEffect, useState } from 'react'

const Layout = ({children}) => {
  const [dataLoad,setdataLoad]=useState(false)
    useEffect(()=>{
      setdataLoad(true)
    },[])
  return (
    <>
    {children}
    </>
  )
}

export default Layout