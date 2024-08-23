import React, { useId } from 'react'

function Input({type="",placeholder="",className="",height="",width="w-full",label="Name",...props},ref) {
    const id=useId();
    return (
        <div  className="w-full"  >
        <div>
        {
            label &&<label
            className={`inline-block text-[#edf2f4] font-bold  mb-1 ml-5  pl-1  `}
            htmlFor={id}>
                   {label} 
            </label>
        }
        </div>
       <div className='w-full px-3 '>
       <input type={type} 
        className={`     ${className} ${width} px-4 py-2 
        rounded-lg  border border-gray-300 
        focus:outline-none  focus: ring-2  shadow
        focus:ring-blue-600   focus: border-transparent`}   ref={ ref }
        {...props} id={id} placeholder={placeholder}
        />
       </div>

    </div>
    )
}

export default React.forwardRef(Input);
