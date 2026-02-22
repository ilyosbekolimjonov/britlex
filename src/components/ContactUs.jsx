import contactImg from "../assets/images/contact.svg"

const ContactUs = () => {
    return (
        <div className="flex flex-col items-center">
            <h2 className="mt-17 mb-10 text-3xl font-bold text-center">Contact Us</h2>
            <img src={contactImg} alt="Contact Us" className="w-[90%] -mr-6" />
            <p className="text-center text-[rgba(143,149,165)] text-lg my-8 px-2">
                Discover your current English level by taking our free online English test.
                Sign up to our newsletter for learning tips and free resource
            </p>
            <input
                type="email"
                placeholder="Enter Your E-mail"
                className="w-full border border-gray-400 rounded-lg pl-8 pr-4 py-5 mb-4 outline-none" />
            <button className="w-full bg-[rgba(38,50,56)] text-white rounded-lg py-5 font-medium text-lg mb-25">
                Subscribe
            </button>
        </div>
    )
}

export default ContactUs