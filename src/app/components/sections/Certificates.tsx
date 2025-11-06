"use client";

import { certificatesData } from "@/data/certificates";
import { useAnimation } from "@/hooks/useAnimation";
import Tooltip from "../ui/Tooltip ";

function CertificateCard({
  cert,
  index,
}: {
  cert: (typeof certificatesData)[0];
  index: number;
}) {
  const animation = useAnimation<HTMLAnchorElement>({
    animationType: "fade-left",
    duration: 500,
    delay: 100 + index * 150,
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <a
      ref={animation.ref}
      style={animation.style}
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-2xl border border-slate-700 overflow-hidden transition-all duration-500 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:-translate-y-2 h-full flex flex-col justify-between"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative p-6 h-full flex flex-col justify-between z-10">
        <div>
          <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
          </div>

          <h4 className="text-white mb-3 text-lg font-bold line-clamp-2 group-hover:text-blue-400 transition-colors duration-300">
            {cert.title}
          </h4>

          <p className="text-blue-400 text-sm font-medium mb-2 line-clamp-1">
            {cert.issuer}
          </p>
        </div>

        <div className="pt-4 border-t border-slate-700/50">
          <p className="text-slate-400 text-sm flex items-center gap-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {cert.date}
          </p>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </a>
  );
}

// Main Certificates component
function Certificates() {
  const animationTitle = useAnimation<HTMLDivElement>({
    animationType: "fade-up",
    duration: 600,
    delay: 100,
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="certificates">
      <h2
        className="section-title"
        ref={animationTitle.ref}
        style={animationTitle.style}
      >
        Certificates
      </h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
        {certificatesData.map((cert, index) => (
          <Tooltip
            key={index}
            text="Click to view detail!"
            position="top-left"
            color="accent"
            size="lg"
          >
            <CertificateCard cert={cert} index={index} />
          </Tooltip>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
