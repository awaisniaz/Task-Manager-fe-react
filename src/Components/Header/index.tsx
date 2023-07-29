import React from 'react'

const Header = () => {
    return (
        <header className="bg-blue-500 py-4">
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <a href="#" className="text-white text-xl font-semibold font-poppins">Your Logo</a>
                        <a href="#" className="text-white hover:text-blue-100 font-poppins">Dashboard</a>
                        <a href="#" className="text-white hover:text-blue-100 font-poppins">Task</a>
                        <a href="#" className="text-white hover:text-blue-100 font-poppins">Projects</a>
                        <a href="#" className="text-white hover:text-blue-100 font-poppins">Teams Member</a>
                    </div>
                    <div className="md:hidden flex items-center">

                        <button className="text-white hover:text-blue-100 focus:outline-none focus:text-blue-100" aria-label="Menu">
                            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                <path
                                    d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
