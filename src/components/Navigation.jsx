import React from 'react'

const Navigation = () => {
  return (
    <div className=' flex justify-center p-2 shadow-lg space-x-5 mt-1'>
        <h4 className='font-semibold cursor-pointer'>All Categories
        <i className="ml-1 fa-solid fa-angle-down"></i></h4>
        <p className='hover:text-teal-600 cursor-pointer'>Cars</p>
        <p className='hover:text-teal-600 cursor-pointer'>Motorcycles</p>
        <p className='hover:text-teal-600 cursor-pointer'>Mobile Phones</p>
        <p className='hover:text-teal-600 cursor-pointer'>For Sale: Houses & Apartments</p>
        <p className='hover:text-teal-600 cursor-pointer'>Scooters</p>
        <p className='hover:text-teal-600 cursor-pointer'>Commercial & Other Vehicles</p>
        <p className='hover:text-teal-600 cursor-pointer'>For Rent: Houses & Apartments</p>
    </div>
  )
}

export default Navigation