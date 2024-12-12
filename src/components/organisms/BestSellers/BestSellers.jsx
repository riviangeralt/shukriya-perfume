import React from 'react'
import ProductCard from '../../atoms/ProductCard/ProductCard'

const BestSellers = ({ title = '' }) => {
  return (
    <div className='py-24 px-20'>
      <h1 className='text-6xl tracking-wide text-center mb-8'>{title}</h1>
      <div className='grid grid-cols-3 gap-12'>
        <div className='col-span-1'>
            <ProductCard />
        </div>
        <div className='col-span-1'>
            <ProductCard />
        </div>
        <div className='col-span-1'>
            <ProductCard />
        </div>
      </div>
    </div>
  )
}

export default BestSellers