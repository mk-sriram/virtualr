import React from 'react'
import logo from "../assets/logo.png"

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blue-lg border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-center items-center">
                <div className="flex items-center flex-shrink-0">
                    <img className='h-10 w-10' src={logo} alt="logo" />
                    <span className="text-xl tracking-tight">VirtualR</span>
                </div>
                <ul className='hidden lg:flex ml-14 space-x-12'></ul>
            </div>
        </div>
    </nav>

  )
}

export default NavBar
