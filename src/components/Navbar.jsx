import logo from "../assets/images/britlex-logo.svg"
import hamburger from "../assets/icons/hamburger-bar.svg"

const Navbar = () => {
    const links = ["Home", "Skills", "About Us", "Pricing", "Contacts"]

    return (
        <header className="flex justify-between items-center lp:pt-5">
            <img src={logo} alt="Logo" className="w-20 h-10" />

            <ul className="hidden lp:flex gap-8">
                {links.map((link) => (
                    <li key={link} className="cursor-pointer hover:text-gray-500">{link}</li>
                ))}
            </ul>

            <button className="hidden lp:block border border-gray-800 rounded-md px-10 py-3 hover:bg-gray-200"> Let's Talk </button>
            <img src={hamburger} alt="Hamburger Bar" className="lp:hidden" />
        </header>
    )
}

export default Navbar