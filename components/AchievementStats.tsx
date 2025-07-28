"use client"

import {useInView} from "react-intersection-observer";
import CountUp from "react-countup";

function AchievementsCounter() {
    const { ref, inView } = useInView({ triggerOnce: true })

    return (
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
                <h1 className="text-5xl font-bold text-brand-complimentary">
                    {inView && <CountUp className="expose" end={20} duration={3} />}+
                </h1>
                <p className="mt-2 text-sm font-semibold text-brand-complimentary/60">Completed Projects</p>
            </div>

            <div>
                <h1 className="text-5xl font-bold expose text-brand-complimentary">
                    {inView && <CountUp className="expose" end={100} duration={3} />}%
                </h1>
                <p className="mt-2 text-sm font-semibold text-brand-complimentary/60">Client Satisfaction Rate</p>
            </div>

            <div>
                <h1 className="text-5xl expose font-bold text-brand-complimentary">
                    {inView && <CountUp className="expose" end={10} duration={3} />}+
                </h1>
                <p className="mt-2 text-sm font-semibold text-brand-complimentary/60">Years of Experience</p>
            </div>

            <div>
                <h1 className="text-5xl font-bold text-brand-complimentary">
                    {inView && <CountUp className="expose" end={50} duration={3} />}+
                </h1>
                <p className="mt-2 text-sm font-semibold text-brand-complimentary/60">Clients & Partnerships</p>
            </div>
        </div>
    )
}


export default function AchievementStats() {
    return (
        <section className="py-16 bg-brand-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <AchievementsCounter />
            </div>
        </section>
    )
}
