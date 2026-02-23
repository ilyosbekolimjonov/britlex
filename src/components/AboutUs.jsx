import aboutImg from "../assets/images/about-us.svg"
import { aboutData } from "../constants"

const AboutUs = () => {
    return (
        <div id="about" className="flex flex-col items-center lp:justify-between lp:relative lp:my-15">
            <h2 className="mt-17 mb-15 text-3xl font-semibold text-center lp:mb-0 lp:text-5xl lp:absolute lp:top-12 lp:left-0">About Us</h2>
            <div className="lp:flex lp:justify-between">
                <img src={aboutImg} alt="About Us" className="w-full lp:order-2 lp:w-[40%]" />

                <div className="lp:w-[45%] lp:mt-40">
                    <p className="my-8 text-center text-[rgba(143,149,165)] text-[18px] lp:text-start lp:text-[20px]">
                        The model offers a framework for discussing problems related to the user's experience, as well as possible ways and means of solving them. Application development begins at the top level (strategy), where the future software product is described quite abstractly from the point of view of the expectations of both users and the customer.
                    </p>

                    <div className="flex flex-col items-center gap-8 mb-10 lp:flex-row lp:justify-between">
                        {
                            aboutData.map(({ number, data }) => (
                                <div className="text-center">
                                    <h3 className="text-4xl font-bold lp:mb-3">{number}</h3>
                                    <p className="text-[rgba(143,149,165)]">{data}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs