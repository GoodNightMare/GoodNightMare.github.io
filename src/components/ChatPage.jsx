import { useState } from "react";
import Icon from "./Icon";

const suggestions = ["ไนท์คือใคร?", "ไนท์มีทักษะอะไรบ้าง?", "มีโปรเจกต์อะไรบ้าง?", "กำลังมองหางานแบบไหน?"];
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", text: "สวัสดีครับ 👋 ผมคือ Night AI ถามเกี่ยวกับประวัติ ทักษะ หรือผลงานของไนท์ได้เลย", sources: ["Portfolio ของไนท์"] },
  ]);

  const ask = async (question) => {
    const value = question.trim();
    if (!value || isLoading) return;
    setMessages((current) => [...current, { role: "user", text: value }]);
    setInput("");
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: value }),
      });
      if (!response.ok) throw new Error("Chat service unavailable");
      const data = await response.json();
      setMessages((current) => [...current, {
        role: "assistant",
        text: data.answer,
        sources: data.sources?.map((source) => source.title) ?? [],
        fallback: data.mode === "fallback",
      }]);
    } catch {
      setMessages((current) => [...current, {
        role: "assistant",
        text: "ขออภัยครับ Night AI ยังไม่พร้อมให้บริการชั่วคราว กรุณาลองใหม่อีกครั้ง หรือดูข้อมูลจากหน้า Portfolio ได้เลยครับ",
        sources: [],
        fallback: true,
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 grid-bg">
      <header className="h-16 border-b border-slate-800/70 glass flex items-center">
        <div className="max-w-4xl w-full mx-auto px-5 flex items-center justify-between">
          <a href="/" className="font-bold text-lg"><span className="text-cyan-400">&lt;</span> Nonthee <span className="text-cyan-400">/&gt;</span></a>
          <a href="/" className="text-sm text-slate-400 hover:text-cyan-300 transition">← กลับหน้า Portfolio</a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6 sm:py-10">
        <section className="text-center mb-7">
          <div className="mx-auto mb-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 grid place-items-center shadow-lg shadow-cyan-500/20"><Icon name="message-circle" /></div>
          <h1 className="text-2xl sm:text-3xl font-bold">ถามเกี่ยวกับไนท์</h1>
          <p className="text-slate-400 mt-2 text-sm">คำตอบอ้างอิงจากข้อมูลใน Portfolio และจะไม่เดาเมื่อไม่มีข้อมูล</p>
        </section>

        <section className="glass border border-slate-800 rounded-3xl overflow-hidden shadow-2xl shadow-cyan-950/20">
          <div className="h-[55vh] min-h-[380px] overflow-y-auto p-4 sm:p-6 space-y-5" aria-live="polite">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${message.role === "user" ? "bg-cyan-400 text-slate-950 rounded-br-md" : "bg-slate-800/90 text-slate-200 border border-slate-700/70 rounded-bl-md"}`}>
                  <p>{message.text}</p>
                  {message.fallback && <p className="mt-2 text-[11px] text-amber-300/80">กำลังแสดงคำตอบสำรอง</p>}
                  {message.sources?.length > 0 && <p className="mt-2 pt-2 border-t border-slate-700/60 text-[11px] text-slate-500">แหล่งข้อมูล: {message.sources.join(", ")}</p>}
                </div>
              </div>
            ))}
            {isLoading && <div className="flex justify-start"><div className="rounded-2xl rounded-bl-md border border-slate-700/70 bg-slate-800/90 px-4 py-3 text-sm text-slate-400"><span className="inline-flex gap-1" aria-label="กำลังค้นหาคำตอบ"><span className="animate-pulse">●</span><span className="animate-pulse [animation-delay:150ms]">●</span><span className="animate-pulse [animation-delay:300ms]">●</span></span></div></div>}
          </div>

          <div className="border-t border-slate-800 p-4 sm:p-5 bg-slate-950/60">
            <p className="mb-3 rounded-xl border border-amber-400/20 bg-amber-400/5 px-3 py-2 text-xs leading-relaxed text-amber-200/80">
              เพื่อใช้โควตา AI อย่างคุ้มค่า กรุณาถามเฉพาะข้อมูลสำคัญที่ต้องการทราบเกี่ยวกับไนท์ และหลีกเลี่ยงการส่งคำถามซ้ำ ขอบคุณครับ
            </p>
            <div className="flex gap-2 overflow-x-auto pb-3">
              {suggestions.map((suggestion) => <button key={suggestion} type="button" disabled={isLoading} onClick={() => ask(suggestion)} className="shrink-0 px-3 py-1.5 rounded-full border border-slate-700 text-xs text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 disabled:opacity-40 transition">{suggestion}</button>)}
            </div>
            <form onSubmit={(event) => { event.preventDefault(); ask(input); }} className="flex gap-2">
              <label htmlFor="chat-input" className="sr-only">พิมพ์คำถามเกี่ยวกับไนท์</label>
              <input id="chat-input" value={input} onChange={(event) => setInput(event.target.value)} placeholder="พิมพ์คำถามเกี่ยวกับไนท์..." autoComplete="off" className="min-w-0 flex-1 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10" />
              <button type="submit" disabled={!input.trim() || isLoading} className="rounded-xl bg-cyan-400 px-4 text-slate-950 hover:bg-cyan-300 disabled:opacity-40 disabled:cursor-not-allowed transition" aria-label="ส่งคำถาม"><Icon name="send" className="w-5 h-5" /></button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
