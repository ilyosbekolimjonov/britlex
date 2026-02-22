import skillImg from "../../assets/images/skills.svg"

const Speaking = () => {
    return (
        <>
            <h2 className="mt-17 mb-12 text-3xl font-semibold m-auto text-center">Skills</h2>
            <div className="flex flex-col bg-[rgba(245,245,245)] rounded-lg">
                <img src={skillImg} alt="Skill" className="mx-5" />
                <div className="mx-5">
                    <h3 className="my-3 text-2xl font-semibold">Speaking</h3>
                    <p className="mb-6 text-[18px] text-[rgba(143,149,165)]">Improve your English skills and confidence. Live classes and interactive lessons online. 20% extra free for a limited time only</p>
                    <p className="text-[18px] text-[rgba(143,149,165)]">Learn English online and improve your skills through our high-quality courses and resources – all designed for adult language learners.</p>
                    <button className="h-15 w-[70%] mt-8 mb-12 rounded-xl bg-[rgba(38,50,56)] text-white font-medium text-xl">Learn more</button>
                </div>
            </div>
        </>
    )
}

export default Speaking