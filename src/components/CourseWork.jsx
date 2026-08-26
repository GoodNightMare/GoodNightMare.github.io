import Icon from './Icon'

export default function CourseWork() {
  return (
<section className="py-24">

    <div className="max-w-6xl mx-auto px-5 sm:px-6">

        <div className="grid lg:grid-cols-[1fr_2fr] gap-12">

            <div>
                <p className="section-label text-cyan-400 text-xs font-semibold uppercase mb-3">
                    Coursework
                </p>

                <h2 className="text-3xl sm:text-4xl font-bold">
                    Academic Works
                </h2>

                <p className="text-slate-500 mt-3">
                    Selected coursework and university projects.
                </p>
            </div>


            <div>

                <div className="glass border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5">

                    <div>

                        <span className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">
                            Assignment
                        </span>

                        <h3 className="text-lg font-semibold mt-1">
                            CSI205 — การพัฒนาโปรแกรมส่วนหน้า
                        </h3>

                        <p className="text-sm text-slate-500 mt-2">
                            Frontend Development Coursework
                        </p>

                    </div>

                    <a
                        href="https://goodnightmare.github.io/_multipages/"
                        target="_blank"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-sm transition whitespace-nowrap"
                    >
                        View Work
                        <Icon name="external-link" className="w-4 h-4" />
                    </a>

                </div>

            </div>

        </div>

    </div>
</section>
  )
}


