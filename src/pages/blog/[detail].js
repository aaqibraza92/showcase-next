import { useParams } from 'next/navigation'
import React from 'react'

const blogDetail = () => {
    const data= useParams();

  return (
    <div >
        Dyanmic path : {data?.detail}
    </div>
  )
}

export default blogDetail