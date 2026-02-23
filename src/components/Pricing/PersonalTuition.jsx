import tutionImg from "../../assets/images/tuition.svg"

const PersonalTuition = () => {
    return (
        <div className="flex flex-col items-center lp:w-[30%] lp:items-start">
            <img src={tutionImg} alt="Personal Tuition" className="w-full lp:h-75" />
            <h3 className="mt-6 mb-4 text-xl font-bold text-center">Personal Tuition</h3>
            <p className="text-center text-[rgba(143,149,165)] text-[16px] mb-8 lp:text-start">
                Online one-to-one English tutoring – enjoy our first session for only $1
            </p>
            <div className="flex items-center gap-2 bg-[rgba(245,245,245)] rounded-lg px-6 py-3 lp:mt-6.5">
                <span className="text-xl font-medium">£20.99</span>
                <span className="text-[rgba(143,149,165)]">per month</span>
            </div>
        </div>
    )
}

export default PersonalTuition