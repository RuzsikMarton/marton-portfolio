import React from 'react'


const Navbar = () => {
  return (
    <header className='text-primary py-8 lg:py-12'>
        <div className="basecontainer mx-auto flex justify-between items-center ">
            <p className='text-4xl font-semibold'>Márton Ruzsik</p>
            <div className='hidden xl:flex items-center gap-8'>
                <nav className='flex gap-6'>
                    <p>About</p>
                    <p>Tech Stack</p>
                    <p>Projects</p>
                    <p>Contact</p>
                </nav>
                <button className='bg-accent text-dark rounded-full px-4 py-1 font-semibold cursor-pointer'>
                    English
                </button>
            </div>
            <div className='xl:hidden'>

            </div>
        </div>
    </header>
  )
}

export default Navbar