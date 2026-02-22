import hero from "../assets/images/hero.svg"
import light from "../assets/images/light.svg"

const Hero = () => {
    return (
        <div className="flex flex-col text-center lp:flex-row lp:text-left lp:justify-between items-center">

            {/* Left Part*/}
            <div className="order-2 lp:order-1 lp:w-[45%] lp:h-120 flex flex-col justify-between lp:items-start lp:mt-10">
                <div className="relative">
                    <h2 className="text-4xl font-semibold mb-4 lp:text-[64px] lp:leading-[1.2] lp:mb-0 lp:w-[80%]"> Learn <br className="hidden lp:block" /> Any <br className="lp:hidden" /> Foreign Language </h2>
                    <img src={light} alt="Light" className="hidden lp:block lp:absolute lp:top-20 lp:right-15" />
                </div>

                <p className="m-auto lp:m-0 mb-8 lp:mb-0 text-[19px] text-[rgba(143,149,165)] lp:max-w-110"> With our teachers who write a program for each student, you will be able to make your first sketch after the first lesson. </p>
                <button className="h-15 w-[95%] m-auto rounded-xl bg-[rgba(38,50,56)] text-white font-medium text-xl lp:m-0 lp:w-[55%] lp:h-20 lp:text-2xl"> Get started </button>
            </div>

            {/* Right Part */}
            <div className="order-1 w-full lp:order-2 lp:w-[50%]">
                <img src={hero} alt="Hero" className="w-full h-auto" />
            </div>
        </div>
    )
}

export default Hero