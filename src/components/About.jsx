export default function About() {
  return (
    <section id="about" className="py-24 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
          <div>
            <p className="section-label text-cyan-400 text-xs font-semibold uppercase mb-3">
              About Me
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold">
              Turning ideas into{" "}
              <span className="gradient-text">real solutions.</span>
            </h2>
          </div>

          <div className="text-slate-400 leading-relaxed space-y-5">
            <p>
              ผมชื่อ{" "}
              <strong className="text-slate-200">นนท์ธีร์ ปานะถึก</strong>{" "}
              เป็นนักศึกษาชั้นปีที่ 4 มหาวิทยาลัยศรีปทุม คณะเทคโนโลยี
              สาขาวิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์
            </p>

            <p>
              ผมสนใจการพัฒนาซอฟต์แวร์ทั้งฝั่ง{" "}
              <span className="text-cyan-400">Frontend</span> และ{" "}
              <span className="text-blue-400">Backend</span>{" "}
              รวมถึงการพัฒนา Web และ Mobile Application
            </p>

            <p>
              นอกจาก Software Development แล้ว ผมยังสนใจการประยุกต์ใช้{" "}
              <span className="text-purple-400">
                AI / NLP / RAG / Computer Vision
              </span>
              {" "} เพื่อสร้างระบบที่สามารถแก้ปัญหาและนำไปใช้งานจริงได้
            </p>

            <p>
              ปัจจุบันกำลังมองหาโอกาส{" "}
              <strong className="text-slate-200">
                Cooperative Education / Internship
              </strong>
              {" "} ในสาย Full-Stack Development, Software Development
              หรือสายงานที่เกี่ยวข้อง
            </p>
          </div>
        </div>

        {/* <!-- Quick stats --> */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
          <div className="glass border border-slate-800 rounded-2xl p-5">
            <div className="text-2xl font-bold text-cyan-400">4th</div>
            <div className="text-sm text-slate-500 mt-1">Year Student</div>
          </div>

          <div className="glass border border-slate-800 rounded-2xl p-5">
            <div className="text-2xl font-bold text-blue-400">Full-Stack</div>
            <div className="text-sm text-slate-500 mt-1">Development</div>
          </div>

          <div className="glass border border-slate-800 rounded-2xl p-5">
            <div className="text-2xl font-bold text-purple-400">AI</div>
            <div className="text-sm text-slate-500 mt-1">NLP / RAG / CV</div>
          </div>

          <div className="glass border border-slate-800 rounded-2xl p-5">
            <div className="text-2xl font-bold text-emerald-400">Co-op</div>
            <div className="text-sm text-slate-500 mt-1">Looking for</div>
          </div>
        </div>
      </div>
    </section>
  );
}
