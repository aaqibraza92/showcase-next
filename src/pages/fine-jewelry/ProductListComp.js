import Image from 'next/image'
import React from 'react'

const ProductListComp = (props) => {
  return (
    <div className='productMainWrapper'>
        <div>
            <Image className='img-fluid' src={props}/>
        </div>
        <div className='productTitle'>
                Product Title
        </div>
    </div>
  )
}

export default ProductListComp