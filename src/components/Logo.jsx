import React from 'react'

function Logo({width='',height='',name=""}) {
    return (
        <div className='flex justify-between items-center'>
            <img src="./image.png" alt="" className=' h-14 w-14 rounded-2xl     mr-3'   />
            {
                name&&<div className='flex-col ' >
                    <div  className='font-semibold font-sans  text-center text-3xl' >  {name}   </div>
                    <p  className='text-sm  font-thin   '  > Gand merao</p>
                    
                </div>
                
            }
        </div>
    )
}

export default Logo
