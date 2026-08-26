export default function Hackathons() {
  return (
<section
    id="achievements"
    className="py-24 bg-slate-950/60 border-y border-slate-800/60"
>

    <div className="max-w-6xl mx-auto px-5 sm:px-6">

        <div className="mb-14">
            <p className="section-label text-purple-400 text-xs font-semibold uppercase mb-3">
                Achievements
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold">
                Hackathons & Activities
            </h2>

            <p className="text-slate-500 mt-3">
                Experiences that helped me learn, build and work with real-world challenges.
            </p>
        </div>


        <div className="relative">

            {/* <!-- Timeline --> */}
            <div className="absolute left-[15px] top-2 bottom-2 w-px timeline-line hidden sm:block"></div>


            <div className="space-y-7">

                {/* <!-- Achievement --> */}
                <div className="relative sm:pl-12">

                    <div className="hidden sm:block absolute left-[9px] top-5 w-3 h-3 rounded-full bg-cyan-400 ring-4 ring-cyan-400/10"></div>

                    <div className="glass border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/30 transition">

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

                            <div>
                                <span className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">
                                    Academic Conference
                                </span>

                                <h3 className="text-lg font-semibold mt-1">
                                    The 18th Electrical Engineering Network 2026
                                </h3>
                            </div>

                            <span className="text-xs text-slate-500">
                                2026
                            </span>

                        </div>

                        <p className="text-sm text-slate-400 mt-3 leading-relaxed">
                            Participated in a national academic conference focused on
                            engineering, technology, research, innovation and knowledge exchange.
                        </p>

                    </div>

                </div>


                {/* <!-- Achievement --> */}
                <div className="relative sm:pl-12">

                    <div className="hidden sm:block absolute left-[9px] top-5 w-3 h-3 rounded-full bg-purple-400 ring-4 ring-purple-400/10"></div>

                    <div className="glass border border-slate-800 rounded-2xl p-6 hover:border-purple-500/30 transition">

                        <span className="text-xs text-purple-400 font-semibold uppercase tracking-wider">
                            Hackathon
                        </span>

                        <h3 className="text-lg font-semibold mt-1">
                            AI-Preneur Hackathon 2026
                        </h3>

                        <p className="text-sm text-slate-400 mt-3">
                            <span className="text-purple-300 font-medium">
                                Passed the selection round
                            </span>
                            — participated in an AI-focused innovation challenge.
                        </p>

                    </div>

                </div>


                {/* <!-- Achievement --> */}
                <div className="relative sm:pl-12">

                    <div className="hidden sm:block absolute left-[9px] top-5 w-3 h-3 rounded-full bg-blue-400 ring-4 ring-blue-400/10"></div>

                    <div className="glass border border-slate-800 rounded-2xl p-6 hover:border-blue-500/30 transition">

                        <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider">
                            Hackathon
                        </span>

                        <h3 className="text-lg font-semibold mt-1">
                            Gosoft Retail Tech Hackathon 2026
                        </h3>

                        <p className="text-sm text-slate-400 mt-3">
                            <span className="text-blue-300 font-medium">
                                Passed the selection round
                            </span>
                            — explored technology-driven solutions for retail.
                        </p>

                    </div>

                </div>


                {/* <!-- Achievement --> */}
                <div className="relative sm:pl-12">

                    <div className="hidden sm:block absolute left-[9px] top-5 w-3 h-3 rounded-full bg-emerald-400 ring-4 ring-emerald-400/10"></div>

                    <div className="glass border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/30 transition">

                        <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                            Cybersecurity Hackathon
                        </span>

                        <h3 className="text-lg font-semibold mt-1">
                            Samsung × KBTG Digital Cybersecurity Hackathon 2026
                        </h3>

                        <p className="text-sm text-slate-400 mt-3">
                            Participated in a cybersecurity-focused hackathon
                            and gained experience working on technology challenges.
                        </p>

                    </div>

                </div>

            </div>

        </div>

    </div>
</section>

  )
}



