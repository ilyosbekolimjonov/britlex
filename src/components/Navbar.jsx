import logo from "../assets/images/britlex-logo.svg"
import hamburger from "../assets/icons/hamburger-bar.svg"

const Navbar = () => {
  return (
    <div className="flex justify-between">
        <img  src={logo} alt="Logo" className="w-20 h-10"/>
        <img src={hamburger} alt="Hamburger Bar" className=""/>
    </div>
  )
}

export default Navbar