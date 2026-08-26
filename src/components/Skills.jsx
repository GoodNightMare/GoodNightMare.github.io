import Icon from './Icon'

export default function Skills() {
  return (
<section
    id="skills"
    className="py-24 bg-slate-950/60 border-y border-slate-800/60"
>

    <div className="max-w-6xl mx-auto px-5 sm:px-6">

        <div className="mb-12">
            <p className="section-label text-cyan-400 text-xs font-semibold uppercase mb-3">
                Technical Skills
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold">
                Technologies I work with
            </h2>

            <p className="text-slate-500 mt-3 max-w-2xl">
                A combination of software development, databases,
                AI technologies and development tools.
            </p>
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

            {/* <!-- Languages --> */}
            <div className="skill-card glass border border-slate-800 rounded-2xl p-6">

                <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-yellow-400/10 text-yellow-400">
                        <Icon name="code-2" />
                    </div>

                    <h3 className="font-semibold">
                        Languages
                    </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                    <span className="skill">JavaScript</span>
                    <span className="skill">TypeScript</span>
                    <span className="skill">Python</span>
                    <span className="skill">C#</span>
                    <span className="skill">HTML5</span>
                    <span className="skill">CSS3</span>
                </div>

            </div>


            {/* <!-- Frontend --> */}
            <div className="skill-card glass border border-slate-800 rounded-2xl p-6">

                <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-cyan-400/10 text-cyan-400">
                        <Icon name="monitor" />
                    </div>

                    <h3 className="font-semibold">
                        Frontend & Mobile
                    </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                    <span className="skill">React</span>
                    <span className="skill">React Native</span>
                    <span className="skill">Expo</span>
                    <span className="skill">Tailwind CSS</span>
                </div>

            </div>


            {/* <!-- Backend --> */}
            <div className="skill-card glass border border-slate-800 rounded-2xl p-6">

                <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-blue-400/10 text-blue-400">
                        <Icon name="server" />
                    </div>

                    <h3 className="font-semibold">
                        Backend
                    </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                    <span className="skill">Node.js</span>
                    <span className="skill">Express</span>
                    <span className="skill">.NET Core</span>
                    <span className="skill">REST API</span>
                    <span className="skill">JWT</span>
                </div>

            </div>


            {/* <!-- Database --> */}
            <div className="skill-card glass border border-slate-800 rounded-2xl p-6">

                <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-emerald-400/10 text-emerald-400">
                        <Icon name="database" />
                    </div>

                    <h3 className="font-semibold">
                        Database
                    </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                    <span className="skill">PostgreSQL</span>
                    <span className="skill">MySQL</span>
                    <span className="skill">MongoDB</span>
                    <span className="skill">ChromaDB</span>
                </div>

            </div>


            {/* <!-- AI --> */}
            <div className="skill-card glass border border-slate-800 rounded-2xl p-6">

                <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-purple-400/10 text-purple-400">
                        <Icon name="brain" />
                    </div>

                    <h3 className="font-semibold">
                        AI / Machine Learning
                    </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                    <span className="skill">NLP</span>
                    <span className="skill">RAG</span>
                    <span className="skill">YOLO</span>
                    <span className="skill">YOLO-World</span>
                    <span className="skill">ZoeDepth</span>
                    <span className="skill">Vector Search</span>
                </div>

            </div>


            {/* <!-- Tools --> */}
            <div className="skill-card glass border border-slate-800 rounded-2xl p-6">

                <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-orange-400/10 text-orange-400">
                        <Icon name="wrench" />
                    </div>

                    <h3 className="font-semibold">
                        Tools & Platforms
                    </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                    <span className="skill">GitHub</span>
                    <span className="skill">Docker</span>
                    <span className="skill">Postman</span>
                    <span className="skill">n8n</span>
                    <span className="skill">VS Code</span>
                    <span className="skill">Android Studio</span>
                    <span className="skill">Xcode</span>
                </div>

            </div>

        </div>

    </div>
</section>

  )
}

