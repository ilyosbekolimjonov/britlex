import liveImg from "../../assets/images/online-classes.svg"

const LiveClasses = () => {
    return (
        <div className="flex flex-col items-center lp:w-[30%] lp:items-start">
            <img src={liveImg} alt="Live Classes" className="w-full lp:h-75" />
            <h3 className="mt-6 mb-4 text-xl font-bold text-center">Live online classes</h3>
            <p className="text-center text-[rgba(143,149,165)] text-[16px] mb-8 lp:text-start">
                Interactive group classes with expert teachers. Free 7-day trial
            </p>
            <button className="flex items-center gap-2 cursor-pointer bg-[rgba(238,238,238)] border border-gray-200 rounded-lg px-6 py-3 lp:mt-6">
                <span className="text-xl font-medium">£12.99</span>
                <span className="text-[rgba(143,149,165)]">per month</span>
            </button>
        </div>
    )
}

export default LiveClasses