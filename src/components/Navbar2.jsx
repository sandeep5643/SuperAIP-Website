import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar2() {
  const [open, setOpen] = useState(false)

  return (
    
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm py-4 px-8 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
<header className="header">
      <h2>Logo</h2>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-3xl font-bold text-white">
          Super<span className="text-purple-400">AIP</span>
          <span className="w-3 h-3 bg-purple-400 rounded-full"></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          {['Home','About','Skills','Projects','Experience','Contact'].map(item => (
            <Link
              key={item}
              to="/"
              className="relative text-white/80 hover:text-purple-400 transition group"
            >
              <span>{item}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full"></span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-300 text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 bg-gray-900 h-screen p-6">
          <div className="flex flex-col space-y-6">
            {['Home','About','Skills','Projects','Experience','Contact'].map(item => (
              <Link
                key={item}
                to="/"
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-purple-400"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar2
