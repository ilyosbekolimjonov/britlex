import listeningImg from "../../assets/images/listening.svg"

const Listening = () => {
    return (
        <div className="bg-gray-200 rounded-lg lp:col-span-2 lp:flex lp:px-5">
            <img src={listeningImg} alt="Listening" className="mx-auto block lp:w-[40%] lp:order-2" />
            <div className="mx-5 lp:order-1 lp:w-[40%]">
                <h3 className="my-5 text-2xl font-semibold">Listening</h3>
                <p className="mb-8 text-[18px] text-[rgba(143,149,165)] lp:text-[16px] ">Here you can find activities to practise your listening skills. Listening will help you to improve your understanding</p>
                <button className="h-15 w-[70%] mt-2 mb-12 rounded-xl bg-[rgba(38,50,56)] text-white font-medium text-xl lp:mt-0 cursor-pointer">Learn more</button>
            </div>
        </div>
    )
}

export default Listening;
