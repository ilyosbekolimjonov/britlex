import skillImg from "../../assets/images/skills.svg"

const Speaking = () => {
    return (
        <div className="lp:row-span-2 bg-[rgba(245,245,245)] rounded-lg lp:px-6">
            <img src={skillImg} alt="Skill" className="mx-auto block w-[95%] lp:w-[80%]" />
            <div className="mx-5 lp:mt-8">
                <h3 className="my-3 text-2xl font-semibold">Speaking</h3>
                <p className="mb-6 text-[18px] text-[rgba(143,149,165)] lp:text-[16px]">Improve your English skills and confidence. Live classes and interactive lessons online. 20% extra free for a limited time only</p>
                <p className="text-[18px] text-[rgba(143,149,165)] lp:text-[16px] ">Learn English online and improve your skills through our high-quality courses and resources – all designed for adult language learners.</p>
                <button className="h-15 w-[70%] mt-8 mb-12 rounded-xl bg-[rgba(38,50,56)] text-white font-medium text-xl lp:mt-15">Learn more</button>
            </div>
        </div>
    )
}

export default Speaking