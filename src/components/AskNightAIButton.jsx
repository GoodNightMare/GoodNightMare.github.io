import Icon from "./Icon";

export default function AskNightAIButton({ className = "", onClick }) {
  return (
    <a
      href="/#/chat"
      onClick={onClick}
      className={`group relative inline-flex w-fit items-center gap-2 rounded-xl border border-cyan-400/30 bg-gradient-to-r from-cyan-400/15 via-blue-400/15 to-purple-400/15 px-4 py-2 text-sm font-semibold text-cyan-100 shadow-lg shadow-cyan-950/20 transition hover:border-cyan-300/60 hover:from-cyan-400/25 hover:via-blue-400/25 hover:to-purple-400/25 ${className}`}
      aria-label="Ask Night AI — new interactive demo"
    >
      <Icon name="message-circle" className="h-4 w-4 text-cyan-300" />
      <span>Ask Night AI</span>
      <span className="absolute -right-2 -top-2 inline-flex items-center gap-1 drop-shadow-md" aria-hidden="true">
        <span className="rounded-full bg-emerald-400/15 px-1.5 py-0.5 text-[9px] font-bold tracking-wider text-emerald-300 ring-1 ring-emerald-400/30">NEW</span>
        <span className="rounded-full bg-purple-400/15 px-1.5 py-0.5 text-[9px] font-bold tracking-wider text-purple-200 ring-1 ring-purple-400/30">DEMO</span>
      </span>
    </a>
  );
}
