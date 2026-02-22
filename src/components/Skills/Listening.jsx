import listeningImg from "../../assets/images/listening.svg"

const Listening = () => {
    return (
        <div className="flex flex-col bg-[rgba(245,245,245)] rounded-lg">
            <img src={listeningImg} alt="Listening" className="m-8" />
            <div className="mx-5">
                <h3 className="my-5 text-2xl font-semibold">Listening</h3>
                <p className="mb-8 text-[18px] text-[rgba(143,149,165)]">Here you can find activities to practise your listening skills. Listening will help you to improve your understanding</p>
                <button className="h-15 w-[70%] mt-2 mb-12 rounded-xl bg-[rgba(38,50,56)] text-white font-medium text-xl">Learn more</button>
            </div>
        </div>
    )
}

export default Listening