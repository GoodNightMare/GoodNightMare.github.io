import Icon from './Icon'

export default function Projects() {
  return (
<section id="projects" className="py-24">

    <div className="max-w-6xl mx-auto px-5 sm:px-6">

        <div className="mb-12">
            <p className="section-label text-cyan-400 text-xs font-semibold uppercase mb-3">
                Featured Work
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold">
                Projects I've built
            </h2>

            <p className="text-slate-500 mt-3">
                Projects from coursework, personal development and experimentation.
            </p>
        </div>


        <div className="grid md:grid-cols-2 gap-5">




            {/* <!-- BuddyBuilder --> */}
            <article className="project-card glass border border-slate-800 rounded-2xl p-6">

                <div className="p-3 w-fit rounded-xl bg-pink-400/10 text-pink-400">
                    <Icon name="sparkles" />
                </div>

                <p className="text-xs text-pink-400 uppercase tracking-wider font-semibold mt-6">
                    AI / Computer Vision
                </p>

                <h3 className="text-xl font-semibold mt-2">
                    BuddyBuilder AI
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mt-3">
                    ระบบ AI สำหรับวิเคราะห์พื้นที่และช่วยแนะนำการจัดวางเฟอร์นิเจอร์
                    โดยประยุกต์ใช้ Computer Vision, Depth Estimation และ RAG
                </p>

                <div className="tags">
                    <span className="tag">YOLO-World</span>
                    <span className="tag">ZoeDepth</span>
                    <span className="tag">RAG</span>
                    <span className="tag">Llama</span>
                    <span className="tag">ChromaDB</span>
                    <span className="tag">PostgreSQL</span>
                </div>

            </article>

                        {/* <!-- SlideMe --> */}
            <article className="project-card glass border border-slate-800 rounded-2xl p-6">

                <div className="p-3 w-fit rounded-xl bg-green-400/10 text-green-400">
                    <Icon name="truck" />
                </div>

                <p className="text-xs text-green-400 uppercase tracking-wider font-semibold mt-6">
                    Mobile Application
                </p>

                <h3 className="text-xl font-semibold mt-2">
                    SlideMe
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mt-3">
                    Mobile Application สำหรับเชื่อมต่อผู้ใช้กับบริการรถลาก
                    พร้อมระบบแผนที่และฟังก์ชันที่เกี่ยวข้องกับการให้บริการ
                </p>

                <div className="tags">
                    <span className="tag">React Native</span>
                    <span className="tag">Expo</span>
                    <span className="tag">Google Maps</span>
                </div>

            </article>

                        {/* <!-- HikeCycle --> */}
            <article className="project-card glass border border-slate-800 rounded-2xl p-6">

                <div className="flex items-start justify-between gap-4">
                    <div className="p-3 rounded-xl bg-yellow-400/10 text-yellow-400">
                        <Icon name="mountain" />
                    </div>

                    <a
                        href="https://github.com/GoodNightMare/Hike-Cycle"
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-500 hover:text-white transition"
                        aria-label="HikeCycle GitHub repository"
                    >
                        <Icon name="github" />
                    </a>
                </div>

                <p className="text-xs text-yellow-400 uppercase tracking-wider font-semibold mt-6">
                    Web Application
                </p>

                <h3 className="text-xl font-semibold mt-2">
                    HikeCycle
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mt-3">
                    ระบบเช่าอุปกรณ์เดินป่า
                    รองรับการจัดการสินค้า โปรโมชั่น การเช่า-คืน
                    และระบบสิทธิ์ผู้ใช้งาน
                </p>

                <div className="tags">
                    <span className="tag">C#</span>
                    <span className="tag">ASP.NET Core MVC</span>
                    <span className="tag">SQL Server</span>
                </div>

                <a
                    href="https://github.com/GoodNightMare/Hike-Cycle"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                >
                    GitHub
                    <Icon name="github" />
                </a>

            </article>

                                    {/* <!-- All Game --> */}
            <article className="project-card glass border border-slate-800 rounded-2xl p-6">

                <div className="flex items-start justify-between gap-4">

                    <div className="p-3 rounded-xl bg-purple-400/10 text-purple-400">
                        <Icon name="gamepad-2" />
                    </div>

                    <a
                        href="https://github.com/GoodNightMare/All-Game-ByNight"
                        target="_blank"
                        className="text-slate-500 hover:text-white transition"
                    >
                        <Icon name="github" />
                    </a>

                </div>

                <p className="text-xs text-purple-400 uppercase tracking-wider font-semibold mt-6">
                    Web Game
                </p>

                <h3 className="text-xl font-semibold mt-2">
                    All Game ByNight
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mt-3">
                    เว็บรวมเกมที่พัฒนาขึ้นเองในเวลาว่าง
                    โดยออกแบบ Game Logic และพัฒนาแต่ละเกมด้วยตัวเอง
                </p>

                <div className="tags">
                    <span className="tag">React</span>
                    <span className="tag">Tailwind CSS</span>
                    <span className="tag">Game Logic</span>
                </div>

                <div className="flex gap-4 mt-5">
                    <a
                        href="https://allgamebynight.netlify.app/"
                        target="_blank"
                        className="project-link"
                    >
                        Live Demo
                        <Icon name="external-link" />
                    </a>

                    <a
                        href="https://github.com/GoodNightMare/All-Game-ByNight"
                        target="_blank"
                        className="project-link text-slate-400 hover:text-white"
                    >
                        GitHub
                        <Icon name="github" />
                    </a>
                </div>

            </article>


            {/* <!-- Expense Tracker --> */}
            <article className="project-card glass border border-slate-800 rounded-2xl p-6">

                <div className="flex items-start justify-between gap-4">

                    <div className="p-3 rounded-xl bg-cyan-400/10 text-cyan-400">
                        <Icon name="wallet" />
                    </div>

                    <a
                        href="https://github.com/GoodNightMare/Expense-Tracker"
                        target="_blank"
                        className="text-slate-500 hover:text-white transition"
                    >
                        <Icon name="github" />
                    </a>

                </div>

                <p className="text-xs text-cyan-400 uppercase tracking-wider font-semibold mt-6">
                    Web Application
                </p>

                <h3 className="text-xl font-semibold mt-2">
                    Expense Tracker
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mt-3">
                    ระบบบันทึกและติดตามรายรับ-รายจ่ายส่วนบุคคล
                    พร้อมการสรุปข้อมูลและจัดหมวดหมู่ค่าใช้จ่าย
                </p>

                <div className="tags">
                    <span className="tag">React</span>
                    <span className="tag">Tailwind CSS</span>
                </div>

                <div className="flex gap-4 mt-5">
                    <a
                        href="https://expenses-tracker-night.netlify.app/"
                        target="_blank"
                        className="project-link"
                    >
                        Live Demo
                        <Icon name="external-link" />
                    </a>

                    <a
                        href="https://github.com/GoodNightMare/Expense-Tracker"
                        target="_blank"
                        className="project-link text-slate-400 hover:text-white"
                    >
                        GitHub
                        <Icon name="github" />
                    </a>
                </div>

            </article>


            {/* <!-- CourseFlow --> */}
            <article className="project-card glass border border-slate-800 rounded-2xl p-6">

                <div className="p-3 w-fit rounded-xl bg-blue-400/10 text-blue-400">
                    <Icon name="graduation-cap" />
                </div>

                <p className="text-xs text-blue-400 uppercase tracking-wider font-semibold mt-6">
                    Full-Stack Application
                </p>

                <h3 className="text-xl font-semibold mt-2">
                    CourseFlow
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mt-3">
                    ระบบลงทะเบียนเรียนแบบ Full-Stack
                    รองรับ Authentication, Role-based Access Control,
                    การจัดการรายวิชา Section และการลงทะเบียน
                </p>

                <div className="tags">
                    <span className="tag">React</span>
                    <span className="tag">Node.js</span>
                    <span className="tag">Express</span>
                    <span className="tag">MongoDB</span>
                    <span className="tag">JWT</span>
                </div>

            </article>

                        {/* <!-- CSI Showcase --> */}
            <article className="project-card glass border border-slate-800 rounded-2xl p-6">

                <div className="flex items-start justify-between gap-4">

                    <div className="p-3 rounded-xl bg-emerald-400/10 text-emerald-400">
                        <Icon name="layout-dashboard" />
                    </div>

                    <a
                        href="https://sitspu.com/csie"
                        target="_blank"
                        className="text-slate-500 hover:text-cyan-400 transition"
                    >
                        <Icon name="external-link" />
                    </a>

                </div>

                <p className="text-xs text-emerald-400 uppercase tracking-wider font-semibold mt-6">
                    Web Application
                </p>

                <h3 className="text-xl font-semibold mt-2">
                    CSI Showcase
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mt-3">
                    แพลตฟอร์มเว็บแอปพลิเคชันสำหรับจัดเก็บ จัดการ
                    และจัดแสดงผลงานหรือโปรเจกต์ของนักศึกษา
                </p>

                <div className="tags">
                    <span className="tag">React</span>
                    <span className="tag">Tailwind CSS</span>
                </div>

                <a
                    href="https://sitspu.com/csie"
                    target="_blank"
                    className="project-link"
                >
                    Live Website
                    <Icon name="arrow-up-right" />
                </a>

            </article>


            {/* <!-- Shingburi --> */}
            <article className="project-card glass border border-slate-800 rounded-2xl p-6">

                <div className="p-3 w-fit rounded-xl bg-orange-400/10 text-orange-400">
                    <Icon name="utensils" />
                </div>

                <p className="text-xs text-orange-400 uppercase tracking-wider font-semibold mt-6">
                    Restaurant Management
                </p>

                <h3 className="text-xl font-semibold mt-2">
                    ShingburiShabu
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mt-3">
                    ระบบจัดการร้านอาหารสำหรับการจัดการข้อมูล
                    รายการอาหาร ยอดขาย และข้อมูลที่เกี่ยวข้องกับร้าน
                </p>

                <div className="tags">
                    <span className="tag">React</span>
                    <span className="tag">Vite</span>
                    <span className="tag">Chart.js</span>
                    <span className="tag">JWT</span>
                </div>

            </article>




        </div>

    </div>
</section>

  )
}


