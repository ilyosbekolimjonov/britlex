import { pricingData } from "../../constants"

const PricingCard = () => {
    return (
        <>
            {
                pricingData.map(({ key, title, description, price, image }) => (
                    <div id="#pricing" key={key} className="flex flex-col items-center lp:w-[30%] lp:items-start">
                        <img src={image} alt="Live Classes" className="w-full lp:h-75" />
                        <div className="flex flex-col lp:items-start min-h-10 h-full">
                            <h3 className="mt-6 mb-4 text-xl font-bold text-center">{title}</h3>
                            <p className="text-center text-[rgba(143,149,165)] text-[16px] mb-8 lp:text-start">
                                {description}
                            </p>
                        </div>
                        <div className="flex justify-end items-end">
                            <button className="flex items-center gap-2 cursor-pointer bg-[rgba(238,238,238)] border border-gray-200 rounded-lg px-5 py-1.5 lp:mt-6">
                                <span className="text-xl font-medium text-[rgb(123,130,147)]">{price}</span>
                            </button>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default PricingCard;
