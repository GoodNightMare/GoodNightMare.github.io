import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Hackathons from "./components/Hackathons";
import CourseWork from "./components/CourseWork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ChatPage from "./components/ChatPage";

export default function App() {
  const getIsChatPage = () =>
    window.location.hash === "#/chat" ||
    window.location.pathname.replace(/\/$/, "") === "/chat";
  const [isChatPage, setIsChatPage] = useState(getIsChatPage);

  useEffect(() => {
    const handleRouteChange = () => setIsChatPage(getIsChatPage());
    window.addEventListener("hashchange", handleRouteChange);
    return () => window.removeEventListener("hashchange", handleRouteChange);
  }, []);

  useEffect(() => {
    if (isChatPage) return undefined;
    const elements = document.querySelectorAll(
      "section > div, .project-card, .skill-card",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [isChatPage]);

  if (isChatPage) return <ChatPage />;

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Hackathons />
        <CourseWork />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
