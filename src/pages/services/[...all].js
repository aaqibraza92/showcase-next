import { useParams } from 'next/navigation'
import React from 'react'

const allService = ({params}) => {
    const data= useParams();
    console.log("data",data?.all)
  return (
    <div>allService {data?.all?.[0]}</div>
  )
}

export default allService