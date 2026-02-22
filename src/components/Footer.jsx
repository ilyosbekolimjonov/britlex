import logo from "../assets/images/britlex-logo.svg"

const Footer = () => {
    return (
        <footer>
            <hr className="h-0.75 bg-[rgba(196,196,196)] border-none" />
            <div className="flex flex-col items-center gap-6 py-10">
                <img src={logo} alt="Logo" className="w-25" />
                <p className="text-[rgba(143,149,165)] text-[15px] text-center">
                    Terms and Conditions • Privacy Policy • Cookie Policy
                </p>
            </div>
        </footer>
    )
}

export default Footer