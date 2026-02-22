import aboutImg from "../assets/images/about-us.svg"

const AboutUs = () => {
    return (
        <div className="flex flex-col items-center">
            <h2 className="mt-17 mb-15 text-3xl font-semibold text-center">About Us</h2>
            <img src={aboutImg} alt="About Us" className="w-full" />
            <p className="my-8 text-center text-[rgba(143,149,165)] text-[18px]">
                The model offers a framework for discussing problems related to the user's experience, as well as possible ways and means of solving them. Application development begins at the top level (strategy), where the future software product is described quite abstractly from the point of view of the expectations of both users and the customer.
            </p>
            <div className="flex flex-col items-center gap-8 mb-10">
                <div className="text-center">
                    <h3 className="text-4xl font-bold">800</h3>
                    <p className="text-[rgba(143,149,165)]">Pupils</p>
                </div>
                <div className="text-center">
                    <h3 className="text-4xl font-bold">18</h3>
                    <p className="text-[rgba(143,149,165)]">Teachers</p>
                </div>
                <div className="text-center">
                    <h3 className="text-4xl font-bold">6</h3>
                    <p className="text-[rgba(143,149,165)]">Foreign languages</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs