import Icon from './Icon'

import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)
  return (
<nav
    className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/70 glass"
>
    <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="h-16 flex items-center justify-between">

            <a href="#home" className="font-bold text-lg">
                <span className="text-cyan-400">&lt;</span>
                Nonthee
                <span className="text-cyan-400">/&gt;</span>
            </a>

            {/* <!-- Desktop --> */}
            <div className="hidden md:flex items-center gap-7 text-sm text-slate-400">
                <a href="#about" className="nav-link">About</a>
                <a href="#skills" className="nav-link">Skills</a>
                <a href="#projects" className="nav-link">Projects</a>
                <a href="#achievements" className="nav-link">Achievements</a>
                <a href="#contact" className="nav-link">Contact</a>

                <a
                    href="https://github.com/GoodNightMare"
                    target="_blank"
                    rel="noreferrer"
                    className="ml-2 px-4 py-2 rounded-lg border border-slate-700 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition"
                >
                    GitHub
                </a>
            </div>

            {/* <!-- Mobile --> */}
            <button
                id="menuBtn"
                type="button"
                onClick={() => setIsOpen((open) => !open)}
                className="md:hidden p-2 text-slate-300"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
            >
                <Icon name={isOpen ? 'x' : 'menu'} />
            </button>
        </div>

        {/* <!-- Mobile menu --> */}    
        <div
            id="mobileMenu"
            className={`${isOpen ? 'block' : 'hidden'} md:hidden pb-5 pt-2 space-y-3 text-sm text-slate-400`}
        >
            <a href="#about" onClick={closeMenu} className="block nav-link">About</a>
            <a href="#skills" onClick={closeMenu} className="block nav-link">Skills</a>
            <a href="#projects" onClick={closeMenu} className="block nav-link">Projects</a>
            <a href="#achievements" onClick={closeMenu} className="block nav-link">Achievements</a>
            <a href="#contact" onClick={closeMenu} className="block nav-link">Contact</a>
        </div>
    </div>
</nav>



  )
}

