import hero from "../assets/images/hero-image.svg"

const Hero = () => {
    return (
        <header className="flex flex-col text-center">
            <img src={hero} alt="Hero" className=""/>
            <h2 className="text-4xl font-semibold mb-4">Learn Any <br /> Foreign Language</h2>
            <p className="m-auto mb-8 text-[19px] text-[rgba(143,149,165)]">With our teachers who write a program for each student, you will be able to make your first sketch after the first lesson.</p>
            <button className="h-15 w-[95%] m-auto rounded-xl bg-[rgba(38,50,56)] text-white font-medium text-xl">Get started</button>
        </header>
    )
}

export default Hero