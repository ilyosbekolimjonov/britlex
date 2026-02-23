import pricingImg from "../../assets/images/pricing.svg"

const SelfStudy = () => {
    return (
        <div className="flex flex-col items-center lp:w-[30%] lp:bottom-0 lp:items-start">
            <img src={pricingImg} alt="Pricing" className="w-full lp:h-75" />
            <h3 className="mt-6 mb-4 text-xl font-bold text-center">Self-study online course</h3>
            <p className="text-center text-[rgba(143,149,165)] text-[16px] mb-8 lp:text-start">
                Start learning English online in live classes with qualified EC teachers and students from all over the world.
            </p>
            <button className="flex items-center gap-2 cursor-pointer border bg-[rgba(238,238,238)] border-gray-200 rounded-lg px-6 py-3 lp:bottom-0">
                <span className="text-xl font-medium">£5.99</span>
                <span className="text-[rgba(143,149,165)]">per month</span>
            </button>
        </div>
    )
}

export default SelfStudy