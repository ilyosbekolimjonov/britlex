import readingImg from "../../assets/images/reading.svg"

const Reading = () => {
    return (
        <div className="flex flex-col bg-gray-200 rounded-lg lp:px-5">
            <img src={readingImg} alt="Reading" className="mx-5 mt-5 lp:h-50" />
            <div className="mx-5 mt-8 lp:mt-0">
                <h3 className="my-3 text-2xl font-semibold">Reading</h3>
                <p className="mb-6 text-[16px] text-[rgba(143,149,165)]">perception and response actions of the user resulting from the use and or up coming use of the product, system or service</p>
                <button className="h-15 w-[70%] mt-2 mb-12 rounded-xl bg-[rgba(38,50,56)] text-white font-medium text-xl cursor-pointer">Learn more</button>
            </div>
        </div>
    )
}

export default Reading;
