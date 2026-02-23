import contactImg from "../assets/images/contact.svg"

const ContactUs = () => {
    return (
        <div className="lp:my-40">
            <h2 className="mt-17 mb-10 text-3xl font-bold text-center lp:hidden">Contact Us</h2>
            <div className="flex flex-col items-center lp:flex-row lp:justify-between">
                <img src={contactImg} alt="Contact Us" className="w-[90%] -mr-6 lp:w-[35%]" />

                <div className="lp:w-[55%] lp:flex lp:flex-col lp:gap-5">
                    <h2 className="hidden lp:block text-4xl font-bold ">Contact Us</h2>

                    <p className="text-center text-[rgba(143,149,165)] text-lg my-8 px-2 lp:text-start"> Discover your current English level by taking our free online English test. Sign up to our newsletter for learning tips and free resource </p>

                    <div className="lp:flex lp:gap-4">
                        <input type="email" placeholder="Enter Your E-mail"
                            className="w-full border border-gray-400 rounded-lg pl-8 pr-4 py-5 mb-4 outline-none lp:w-[60%] lp:mb-0 lp:py-0" />
                        <button className="w-full bg-[rgba(38,50,56)] text-white rounded-lg py-5 font-medium text-lg mb-25 lp:w-[40%] lp:mb-0"> Subscribe </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs