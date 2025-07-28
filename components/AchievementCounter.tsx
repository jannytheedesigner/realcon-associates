"use client"

import {useInView} from "react-intersection-observer";
import CountUp from "react-countup";

function AchievementsCounter() {
    const { ref, inView } = useInView({ triggerOnce: true })

    return (
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
                <h1 className="text-7xl font-bold text-brand-primary">
                    {inView && <CountUp className="expose" end={20} duration={3} />}+
                </h1>
                <p className="mt-2 text-sm text-slate-600">Completed Projects</p>
            </div>

            <div>
                <h1 className="text-7xl font-bold expose text-brand-primary">
                    {inView && <CountUp className="expose" end={100} duration={3} />}%
                </h1>
                <p className="mt-2 text-sm text-slate-600">Client Satisfaction Rate</p>
            </div>

            <div>
                <h1 className="text-7xl expose font-bold text-brand-primary">
                    {inView && <CountUp className="expose" end={10} duration={3} />}+
                </h1>
                <p className="mt-2 text-sm text-slate-600">Years of Experience</p>
            </div>

            <div>
                <h1 className="text-7xl font-bold text-brand-primary">
                    {inView && <CountUp className="expose" end={50} duration={3} />}+
                </h1>
                <p className="mt-2 text-sm text-slate-600">Clients & Partnerships</p>
            </div>
        </div>
    )
}


export default function AchievementCounter() {
    return (
        <section className="py-26 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center flex flex-col mb-12">
                    <div className="flex flex-row mx-auto gap-2 mb-3">
                        <span className="w-1 h-1 bg-brand-primary flex my-auto"></span>
                        <p className="text-xs my-auto uppercase font-semibold text-slate-900 tracking-widest">Our Track Record</p>
                    </div>
                    <h2 className="text-5xl text-brand-complimentary font-bold mb-4">Excellence & Milestones</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Over the years, Realcon Associates has achieved key milestones and delivered impactful results in Malawi’s real estate and construction industry.
                    </p>
                </div>

                <AchievementsCounter />
            </div>
        </section>
    )
}
