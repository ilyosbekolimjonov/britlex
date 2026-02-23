import logo from "../assets/images/britlex-logo.svg"

const Footer = () => {
    return (
        <footer>
            <hr className="h-0.75 bg-[rgba(196,196,196)] border-none" />
            <div className="flex flex-col items-center gap-6 py-10 lp:flex-row lp:justify-between lp:mb-5">
                <img src={logo} alt="Logo" className="w-25" />
                <p className="text-[rgba(143,149,165)] text-[15px] text-center lp:text-[19px] lp:tracking-wider lp:[word-spacing:2px]"> Terms and Conditions • Privacy Policy • Cookie Policy </p>
            </div>
        </footer>
    )
}

export default Footer