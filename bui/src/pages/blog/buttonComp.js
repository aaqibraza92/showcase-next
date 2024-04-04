import React, { useEffect, useState } from 'react'

const ButtonComp = ({title,count}) => {
  const [data,setData]=useState(count)
  useEffect(()=>{
    setData(count)
  },[count])
  return (
    <button onClick={()=>alert(title)}>
        Data {data}
    </button>
  )
}

export default ButtonComp