import React from 'react'

function Logo({width='',height='',name=""}) {
    return (
        <div className='flex justify-between items-center'>
            <img src="./Logo.png" alt="" className=' h-16 w-20 rounded-lg    mr-3'   />
            {
                name&&<div className='flex-col ' >
                    <div  className='font-semibold font-sans  -ml-7 text-center text-3xl' >  {name}   </div>
                    <p  className='text-[10px]  -mt-3  font-thin   '  >A platform that listen to your complaint </p>
                    
                </div>
                
            }
        </div>
    )
}

export default Logo
