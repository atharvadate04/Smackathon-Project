import React from 'react'
import Logo from '../Logo'

function Header() {
    return (    <nav className="bg-black/50  fixed w-full top-0 left-0 z-50 border border-black/30  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between  h-16">
            <div className="flex items-center">
              <div className="text-white text-2xl -ml-32 font-bold">
                <Logo name="Rail-Assist " height='h-10' />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
              <button className="text-white px-3 py-2  text-lg hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-red-400 align-text-top rounded-md   font-medium" >Login</button>
                <button className="text-white px-3 py-2  text-lg hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-red-400 align-text-top rounded-md   font-medium" >Sign-up</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
  
    )
}

export default Header;
