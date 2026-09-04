import Icon from './Icon'

export default function Hero() {
  return (
<section
    id="home"
    className="relative min-h-screen flex items-center overflow-hidden grid-bg"
>

    {/* <!-- Background glow --> */}
    <div
        className="absolute top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"
    ></div>

    <div className="max-w-6xl mx-auto px-5 sm:px-6 pt-24 pb-20 w-full">

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">

    {/* <!-- Left : Introduction --> */}
    <div className="max-w-3xl">

        {/* <!-- Status --> */}
        <div
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-7 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-sm"
        >
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            Open to Cooperative Education / Internship
        </div>

        {/* <!-- Name --> */}
        <p className="text-slate-400 text-lg mb-2">
            Hello, I'm
        </p>

        <h1
            className="text-5xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
        >
            
            <span className="gradient-text">
                Nonthee
            </span> {" "}
                Panatuek
        </h1>

        <h2
            className="mt-5 text-2xl sm:text-3xl font-semibold text-slate-200"
        >
            Full-Stack Developer
        </h2>

        <p
            className="mt-6 max-w-2xl text-slate-400 text-base sm:text-lg leading-relaxed"
        >
            Computer Science student passionate about building {" "}
            <span className="text-cyan-400">Web & Mobile Applications</span>,
            with interests in{" "}
            <span className="text-blue-400">AI, NLP and Computer Vision</span>.
        </p>

        {/* <!-- CTA --> */}
        <div className="flex flex-wrap gap-3 mt-9">

            <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold transition shadow-lg shadow-cyan-500/20"
            >
                View My Projects
                <Icon name="arrow-down-right" className="w-4 h-4" />
            </a>

            <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-700 hover:border-slate-500 hover:bg-slate-800/70 text-slate-200 font-semibold transition"
            >
                Contact Me
                <Icon name="mail" className="w-4 h-4" />
            </a>

            <a
                href="/chat"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-purple-400/30 bg-purple-400/10 hover:bg-purple-400/20 text-purple-200 font-semibold transition"
            >
                Ask Night AI
                <Icon name="message-circle" className="w-4 h-4" />
            </a>

        </div>

        {/* <!-- Social --> */}
        <div className="flex items-center gap-5 mt-9 text-slate-500">

            <a
                href="https://github.com/GoodNightMare"
                target="_blank"
                className="hover:text-white transition"
                aria-label="GitHub"
            >
                <Icon name="github" />
            </a>

            <a
                href="https://www.linkedin.com/in/nonthee-night"
                target="_blank"
                className="hover:text-cyan-400 transition"
                aria-label="LinkedIn"
            >
                <Icon name="linkedin" />
            </a>

            <a
                href="mailto:nonthee.night@gmail.com"
                className="hover:text-cyan-400 transition"
                aria-label="Email"
            >
                <Icon name="mail" />
            </a>

            <span className="h-5 w-px bg-slate-800"></span>

            <span className="text-sm">
                Bangkok, Thailand
            </span>

        </div>

    </div>


    {/* <!-- Right : Profile Image --> */}
    <div className="flex justify-center lg:justify-end">

        <div className="relative w-64 sm:w-72 lg:w-80">

            {/* <!-- Glow --> */}
            <div
                className="absolute -inset-5 rounded-[2rem] bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-500/20 blur-2xl"
            ></div>

            {/* <!-- Image Card --> */}
            <div
                className="relative overflow-hidden rounded-[2rem] border border-slate-700/70 bg-slate-800/50 shadow-2xl shadow-cyan-950/30"
            >
                <img
                    src="/profile.png"
                    alt="Nonthee Panatuek"
                    className="w-full aspect-[4/5] object-cover object-top" />

                {/* <!-- Bottom Badge --> */}
                <div
                    className="absolute bottom-4 left-4 right-4 glass border border-slate-700/70 rounded-xl px-4 py-3"
                >
                    <div className="flex items-center gap-2">

                        <span
                            className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"
                        ></span>

                        <span className="text-sm text-slate-300 font-medium">
                            Software Developer
                        </span>

                    </div>
                </div>

            </div>

            {/* <!-- Floating Tech Badge --> */}
            <div
                className="absolute -top-5 -right-5 glass border border-slate-700/70 rounded-xl px-4 py-3 shadow-xl"
            >
                <p className="text-[10px] uppercase tracking-wider text-slate-500">
                    Focus
                </p>

                <p className="text-sm font-semibold text-cyan-300">
                    Web • Mobile • AI
                </p>
            </div>

        </div>

    </div>

</div>
        {/* <!-- Scroll indicator --> */}
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-slate-600">
            <span className="text-[10px] uppercase tracking-[0.3em]">
                Scroll
            </span>
            <Icon name="chevrons-down" className="w-4 h-4 animate-bounce" />
        </div>

    </div>
</section>

  )
}


