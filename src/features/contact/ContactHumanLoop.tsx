/**
 * contact-human-loop — the closing reassurance scene: an enquiry arrives at a TechLamp
 * specialist, who works under the lamp and maps the next step. Human judgment stays
 * visible, echoing the home CTA's lamp. Static by default (one calm lamp pulse);
 * reduced-motion and no-JS show the completed, legible scene.
 */
export function ContactHumanLoop() {
  return (
    <div className="rounded-[28px] bg-[#fbeee3] p-6 shadow-[0_24px_50px_-32px_rgba(58,28,13,0.3)] ring-1 ring-black/5 sm:p-7">
      <p className="t-mono text-[10.5px] uppercase leading-4 tracking-[0.08em] text-slate-2">Your enquiry reaches a person</p>
      <svg viewBox="0 0 380 240" role="img" aria-label="An enquiry arrives at a TechLamp specialist working under the lamp, who maps the next step" className="mt-4 h-auto w-full">
        {/* enquiry */}
        <rect x="10" y="120" width="74" height="46" rx="12" fill="#f7dfce" stroke="#3a1c0d" strokeWidth="2" />
        <path d="M 26 166 L 26 180 L 42 166 Z" fill="#f7dfce" stroke="#3a1c0d" strokeWidth="2" strokeLinejoin="round" />
        <path d="M 24 136 H 68 M 24 148 H 58" stroke="#3a1c0d" strokeWidth="2.2" strokeLinecap="round" />
        {/* rails */}
        <path d="M 86 150 H 150" fill="none" stroke="#e3dcd4" strokeWidth="3" strokeLinecap="round" />
        <path d="M 86 150 H 120" fill="none" stroke="#ff5a00" strokeWidth="3" strokeLinecap="round" strokeDasharray="2 9" />
        <circle cx="120" cy="150" r="6" fill="#ff5a00" />
        <path d="M 240 150 H 346" fill="none" stroke="#e3dcd4" strokeWidth="3" strokeLinecap="round" />
        <path d="M 338 143 L 350 150 L 338 157" fill="none" stroke="#3a1c0d" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="300" cy="150" r="7" fill="#1f6f47" />
        <path d="M 296.5 150 L 299 152.5 L 303.5 147.5" fill="none" stroke="#fffdfc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        {/* lamp */}
        <circle cx="196" cy="54" r="44" fill="#ffd7a8" opacity="0.5" />
        <circle
          cx="196"
          cy="54"
          r="40"
          fill="none"
          stroke="#ff6200"
          strokeWidth="1.5"
          opacity="0.4"
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
          className="[animation:tl-pulse-once_2.2s_ease-out_0.5s_1_both]"
        />
        <path d="M 196 8 A 34 34 0 0 1 214 86 L 178 86 A 34 34 0 0 1 196 8 Z" fill="#fffdfc" stroke="#682800" strokeWidth="2.4" />
        <path d="M 186 30 L 200 48 L 189 53 L 203 72" fill="none" stroke="#ff6200" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="182" y="88" width="28" height="7" rx="3.5" fill="#682800" />
        <rect x="186" y="99" width="20" height="7" rx="3.5" fill="#682800" />
        <path d="M 196 108 V 118" stroke="#f0c9a6" strokeWidth="2" strokeDasharray="2 4" strokeLinecap="round" />
        {/* specialist */}
        <circle cx="196" cy="162" r="40" fill="#fffdfc" stroke="#3a1c0d" strokeWidth="2.4" />
        <circle cx="196" cy="150" r="13" fill="#0e0d0c" />
        <path d="M 174 186 A 22 22 0 0 1 218 186 Z" fill="#0e0d0c" />
        <g transform="translate(226,132)">
          <circle r="14" fill="#1f6f47" />
          <path d="M -6 0 L -1.8 4.4 L 6.6 -6" fill="none" stroke="#fffdfc" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
      <p className="mt-5 text-[14.5px] leading-[21px] text-slate">
        A specialist reads every enquiry and routes it to the right team. Judgment stays human — you talk to an expert, not a queue.
      </p>
    </div>
  );
}
