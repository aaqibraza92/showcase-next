import { heart } from '@/assets/svg';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const ProductGridComp = (props) => {
  const {data}= props;
  return (
    <div className='productMainWrapper'>
        <div className='proList'>
          <Link href={`/product-detail/${data?.slug}`}><Image alt={data?.name} width={300} height={300} className='img-fluid' src={data?.product_image?.[0]?.url}/></Link>
        </div>
        <div className='productTitle fs15 fw600 mt8'>
        <Link className="colorBlack" href={`/product-detail/${data?.slug}`}>{data?.name}</Link>  
        </div>
        <div className='d-flex w-100 justify-content-between'>
            <div>
              ${data?.sale_price}
            </div>
            <div>
              {heart}
            </div>
        </div>
    </div>
  )
}

export default ProductGridComp