import React, { useContext } from 'react'
import { FaPlus } from 'react-icons/fa';



// const Header = () => {
//     return (
//       <div className='p-3 flex items-center justify-between'>
  
//         <div className='flex'>
//         <img className='w-12' alt='olx-logo' 
//         src='data:image/png;base64,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'/>
//          <input className=' border-black border-2 ml-3 p-2'/>
//          </div>

//         <div className="flex items-center">
//           <input className='w-64 border-black border-2 p-2'/>
//           <i className="bg-slate-700 p-[14px] rounded-r-md fa-solid fa-magnifying-glass" style={{ color: '#ffffff' }}></i>
//         </div>
  
//         <div className='flex space-x-4'>
//           <h6 className='font-medium text-lg'>English</h6>
//           <h6 className='font-medium text-lg underline' >Login</h6>
//           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">SELL</button>
//         </div>
  
//       </div>
//     )
//   }

const Header = () => {

  
    // const xt 
    // console.log('iamme:null)

  
    return (
      <div className='grid grid-cols-12 bg-gray-100'>
  
     
        <div className='col-span-2 flex'>
         <img className='p-4 w-20' src="https://logos-world.net/wp-content/uploads/2022/04/OLX-Symbol.png" alt="" />
         <input type="text" placeholder='Your Location' className='px-1 my-2 py-2 border-2 border-black'/>
  
        </div>
        
        <div className='col-span-7 ml-10 flex'>
          <input type="text" className='border-2 border-black ms-3 px-1 my-2 py-2 w-full' placeholder='Find Cars,Mobile Phones and More...' />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-11 mt-2 mb-1 cursor-pointer border border-black bg-black text-white rounded-r-lg ">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
  
        </div>
        <div className='col-span-3'>
  
          <div className="right-nav flex flex-1 h-full items-center justify-around">
            <div  className='nav-text hover:text-cyan-800 hover:cursor-pointer font-bold'>ENGLISH</div>
              <button className='nav-text px-6 py-1 bg-white rounded-3xl sell-button flex items-center'>
              <FaPlus className='mr-1' />SELL</button> :  <button className='nav-text px-6 py-1 bg-white rounded-3xl sell-button flex items-center'><FaPlus className='mr-1' />SELL
              </button>
  
  
             <div className='nav-text underline hover:cursor-pointer font-bold'>Login</div> :<> <div className=' text-lg hover:cursor-pointer font-bold'></div>   <span  className='flex cursor-pointer'>Logout <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
            </svg>
            </span></>
           
          </div>
        
        </div>
  
      </div>
    )}
  
  
export default Header