import Icon from './Icon'

export default function Contact() {
  return (
<section
    id="contact"
    className="py-24 bg-slate-950/70 border-t border-slate-800/60"
>

    <div className="max-w-5xl mx-auto px-5 sm:px-6 text-center">

        <p className="section-label text-cyan-400 text-xs font-semibold uppercase mb-3">
            Contact
        </p>

        <h2 className="text-4xl sm:text-5xl font-bold">
            Let's build something
            <span className="gradient-text">together.</span>
        </h2>

        <p className="text-slate-400 max-w-xl mx-auto mt-5 leading-relaxed">
            หากสนใจร่วมงาน ติดต่อสอบถามเกี่ยวกับโปรเจกต์
            หรือมีโอกาสฝึกงานสหกิจ สามารถติดต่อผมได้ผ่านช่องทางด้านล่าง
        </p>


        {/* <!-- Email --> */}
        <a
            href="mailto:nonthee.night@gmail.com"
            className="inline-flex items-center gap-3 mt-8 px-6 py-3.5 rounded-xl bg-white text-slate-950 font-semibold hover:bg-slate-200 transition"
        >
            <Icon name="mail" className="w-5 h-5" />
            nonthee.night@gmail.com
        </a>


        {/* <!-- Social --> */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">

            <a
                href="https://github.com/GoodNightMare"
                target="_blank"
                className="social-btn"
            >
                <Icon name="github" />
                GitHub
            </a>

            <a
                href="https://www.linkedin.com/in/nonthee-night"
                target="_blank"
                className="social-btn"
            >
                <Icon name="linkedin" />
                LinkedIn
            </a>

            <a
                href="https://www.facebook.com/nnth.thir.pana.thuk?locale=th_TH"
                target="_blank"
                className="social-btn"
            >
                <Icon name="facebook" />
                Facebook
            </a>

            <a
                href="https://www.instagram.com/nnight_yy"
                target="_blank"
                className="social-btn"
            >
                <Icon name="instagram" />
                Instagram
            </a>

        </div>

    </div>

</section>


  )
}


