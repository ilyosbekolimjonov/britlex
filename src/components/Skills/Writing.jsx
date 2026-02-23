import speakingImg from "../../assets/images/speaking.svg"

const Writing = () => {
    return (
        <div className="flex flex-col bg-[rgba(245,245,245)] rounded-lg lp:px-5">
            <img src={speakingImg} alt="Speaking" className="mx-5 mt-5 lp:h-50" />
            <div className="mx-5">
                <h3 className="my-3 text-2xl font-semibold">Writing</h3>
                <p className="mb-6 text-[16px] text-[rgba(143,149,165)]">One of the most important and extensive areas of natural science, the science that studies substances, also their composition</p>
                <button className="h-15 w-[70%] mt-2 mb-12 rounded-xl bg-[rgba(38,50,56)] text-white font-medium text-xl">Learn more</button>
            </div>
        </div>
    )
}

export default Writing