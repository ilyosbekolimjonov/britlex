import { useState } from "react"
import { links } from "../constants"
import logo from "../assets/images/britlex-logo.svg"
import hamburger from "../assets/icons/hamburger-bar.svg"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="relative flex justify-between items-center lp:pt-5">
            <img src={logo} alt="Logo" className="w-20 h-10" />

            <ul className="hidden lp:flex gap-10">
                {links.map(({ name, href }) => (
                    <li key={href}>
                        <a
                            href={`#${href}`}
                            className="cursor-pointer text-lg font-medium hover:text-gray-500 transition-all" >
                            {name}
                        </a>
                    </li>
                ))}
            </ul>

            <button className="hidden lp:block border border-gray-800 rounded-md px-10 py-3 hover:bg-gray-200 cursor-pointer"> Let's Talk </button>

            <button onClick={() => setIsOpen(!isOpen)} className="lp:hidden cursor-pointer">
                <img src={hamburger} alt="Menu" />
            </button>

            {isOpen && (
                <nav className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-3 z-50 lp:hidden">
                    <ul className="flex flex-col">
                        {links.map(({ name, href }) => (
                            <li key={href}>
                                <a
                                    href={`#${href}`}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-6 py-3 text-lg font-medium hover:bg-gray-100 transition-all">
                                    {name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="px-6 pt-2">
                        <button className="w-full border border-gray-800 rounded-md py-3 hover:bg-gray-200 cursor-pointer font-medium">
                            Let's Talk
                        </button>
                    </div>
                </nav>
            )}
        </header>
    )
}

export default Navbar;
