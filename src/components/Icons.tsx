import React from "react";
import brandSvgs from "../data/brandSvgs.json";
import toolSvgs from "../data/toolSvgs.json";

// Quickshine SVG
export function QuickshineLogo({ className = "h-6 w-auto" }: { className?: string }) {
  return (
    <div
      className={`inline-flex items-center text-white/70 hover:text-white transition-opacity ${className}`}
      dangerouslySetInnerHTML={{ __html: brandSvgs["Quickshine W 02"] }}
    />
  );
}

// Hoodverse SVG
export function HoodverseLogo({ className = "h-6 w-auto" }: { className?: string }) {
  return (
    <div
      className={`inline-flex items-center text-white/70 hover:text-white transition-opacity ${className}`}
      dangerouslySetInnerHTML={{ __html: brandSvgs["Hoodverse"] }}
    />
  );
}

// Naklang Electronics SVG
export function NaklangLogo({ className = "h-6 w-auto" }: { className?: string }) {
  return (
    <div
      className={`inline-flex items-center text-white/70 hover:text-white transition-opacity ${className}`}
      dangerouslySetInnerHTML={{ __html: brandSvgs["Naklang Electronics 02"] }}
    />
  );
}

// Vedara SVG
export function VedaraLogo({ className = "h-6 w-auto" }: { className?: string }) {
  return (
    <div
      className={`inline-flex items-center text-white/70 hover:text-white transition-opacity ${className}`}
      dangerouslySetInnerHTML={{ __html: brandSvgs["Vedara W"] }}
    />
  );
}

// Tool Icon Component
export function ToolIcon({ name, className = "w-6 h-6" }: { name: string; className?: string }) {
  if (name === "React") {
    return (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className={className}>
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }
  if (name === "Nextjs") {
    return (
      <svg viewBox="0 0 180 180" className={className} fill="none">
        <circle cx="90" cy="90" r="88" fill="#050505" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="4" />
        <path
          d="M149.508 157.438L69.1478 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.141 149.508 157.438Z"
          fill="#ffffff"
        />
        <rect x="115.816" y="54" width="12.114" height="71.97" fill="#ffffff" />
      </svg>
    );
  }
  if (name === "TypeScript") {
    return (
      <svg viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" rx="20" fill="#3178C6" />
        <path d="M72.2 46.5h-38v10h13.5v43.2h11V56.5H72.2v-10zm46.5 13.7c-3.1-3.6-7.8-5.4-14-5.4-4.8 0-9.2 1.3-13.1 4l4.6 7.6c3.2-2.1 6.3-3.1 9.4-3.1 3 0 5.2.7 6.6 2.1 1.4 1.4 2.1 3.2 2.1 5.4 0 2.2-.8 4.1-2.5 5.8-1.7 1.7-4.6 3.6-8.8 5.7-5.5 2.7-9.4 5.6-11.6 8.7-2.3 3.1-3.4 6.7-3.4 10.9 0 5.2 1.9 9.5 5.6 12.8 3.8 3.3 8.7 5 14.8 5 5.7 0 10.8-1.7 15.2-5.1l-4.7-7.9c-3.6 2.6-7.1 3.9-10.6 3.9-3.3 0-5.8-.8-7.5-2.5-1.7-1.7-2.5-3.8-2.5-6.4 0-2.3.8-4.4 2.5-6.2 1.7-1.8 4.7-3.8 9-6 5.3-2.7 9.1-5.6 11.4-8.8 2.3-3.2 3.4-6.9 3.4-11.1 0-5.2-1.9-9.5-5.6-12.7z" fill="white" />
      </svg>
    );
  }
  if (name === "Python") {
    return (
      <svg viewBox="0 0 128 128" className={className}>
        <path fill="#3776AB" d="M63.6 5.8c-15.6 0-25 6.7-25 19.8v14.4h25.4v3.6H28.4c-13.4 0-25.1 8-25.1 23.3 0 15 10.4 23.7 23.7 23.7h7.7V78.2c0-8.9 7.7-16.6 16.6-16.6h25.4c7.6 0 13.8-6.4 13.8-14V25.6c0-13.2-9.7-19.8-26.9-19.8zm-13.9 7.7a4.2 4.2 0 110 8.4 4.2 4.2 0 010-8.4z" />
        <path fill="#FFD43B" d="M64.4 122.2c15.6 0 25-6.7 25-19.8V88H64V84.4h35.6c13.4 0 25.1-8 25.1-23.3 0-15-10.4-23.7-23.7-23.7h-7.7v12.4c0 8.9-7.7 16.6-16.6 16.6H51.3c-7.6 0-13.8 6.4-13.8 14v22.2c0 13.2 9.7 19.8 26.9 19.8zm13.9-7.7a4.2 4.2 0 110-8.4 4.2 4.2 0 010 8.4z" />
      </svg>
    );
  }
  if (name === "Nodejs") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="#539E43">
        <path d="M12 2l9 5.2v10.4L12 22.8l-9-5.2V7.2L12 2zm0 2.3L4.8 8.4v7.2L12 19.8l7.2-4.2V8.4L12 4.3z" />
      </svg>
    );
  }
  if (name === "PostgreSQL") {
    return (
      <svg viewBox="0 0 128 128" className={className}>
        <path fill="#336791" d="M64.4 7C32.7 7 7 32.7 7 64.4c0 31.7 25.7 57.4 57.4 57.4 31.7 0 57.4-25.7 57.4-57.4C121.8 32.7 96.1 7 64.4 7zm0 10.9c25.7 0 46.5 20.8 46.5 46.5 0 25.7-20.8 46.5-46.5 46.5-25.7 0-46.5-20.8-46.5-46.5 0-25.7 20.8-46.5 46.5-46.5zm-5 18.2c-5.8.5-10.4 4.8-11.4 10.5-.5 3 .1 5.9 1.6 8.4-3.5 2.1-5.8 5.9-5.8 10.4 0 3.2 1.2 6.1 3.3 8.3-2.1 3-3.3 6.6-3.3 10.5 0 10.2 8.3 18.5 18.5 18.5 7.4 0 13.8-4.4 16.7-10.7 2.1 1.1 4.5 1.7 7.1 1.7 8.3 0 15-6.7 15-15 0-3.9-1.5-7.5-3.9-10.2 2.6-2.5 4.3-6.1 4.3-10.1 0-7.7-6.2-13.9-13.9-13.9-2.8 0-5.3.8-7.5 2.2-3.1-6.4-9.6-10.6-17.2-10.6-.7 0-2.3 0-3.5.4z" />
        <path fill="#ffffff" d="M64.4 46.5c-4.4 0-8.1 3.1-8.9 7.3 1.9-.6 3.9-.9 6-.9 6.2 0 11.7 2.9 15.2 7.4.8-1.5 1.2-3.2 1.2-5 0-4.9-4-8.8-8.9-8.8-.9 0-3.4 0-4.6 0zm-8.8 19.5c-3.3 0-6 2.7-6 6 0 2.2 1.2 4.1 3 5.1 1.3-4.5 4.7-8.1 9.1-9.9-1.7-.8-3.7-1.2-6.1-1.2zm23.8 2.2c-3.1 0-5.8 1.4-7.6 3.6 4.3 2.7 7.2 7.4 7.6 12.8 3.5-.8 6.1-3.9 6.1-7.6 0-4.8-3.9-8.8-8.8-8.8zm-11 11.2c-4.9 0-8.8 4-8.8 8.9 0 3.8 2.4 7 5.8 8.2-.5-1.5-.8-3.1-.8-4.8 0-6.8 5.5-12.3 12.3-12.3h1.8c-2.4-0-6.8 0-10.3 0z" />
      </svg>
    );
  }
  if (name === "Gemini" || name === "ChatGPT") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <defs>
          <linearGradient id="geminiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4E88FF" />
            <stop offset="50%" stopColor="#9B51E0" />
            <stop offset="100%" stopColor="#FF4D82" />
          </linearGradient>
        </defs>
        <path
          d="M12 2C12 7.52285 7.52285 12 2 12C7.52285 12 12 16.4772 12 22C12 16.4772 16.4772 12 22 12C16.4772 12 12 7.52285 12 2Z"
          fill="url(#geminiGrad)"
        />
        <circle cx="12" cy="12" r="2.5" fill="#ffffff" />
      </svg>
    );
  }
  if (name === "GitHub" || name === "Notion") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="#ffffff">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        />
      </svg>
    );
  }
  if (name === "Docker") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="#2496ED">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m21.848 1.488c-.362-.225-1.422-.44-2.527-.184-.216.05-.432.123-.64.218-.328-.518-.767-.93-1.306-1.203l-.403-.204-.336.3a8.91 8.91 0 00-2.482 4.22c-1.396.115-4.225.13-6.527-.087-3.238-.306-6.108-1.575-8.082-3.572l-.248-.25-.264.233c-.77.683-1.782 1.077-2.85 1.11-1.35.042-2.63-.483-3.6-1.48l-.208-.214-.236.182c-.89.688-1.996 1.053-3.116 1.026l-.286-.007.037.284c.367 2.802 1.745 5.378 3.882 7.253 2.146 1.882 4.965 2.92 7.938 2.92h1.564c4.664-.047 9.176-1.637 12.825-4.52 1.49-.92 2.766-2.12 3.75-3.53.518-.088 1.547-.197 2.11-.79.356-.375.526-.88.48-1.42-.03-.356-.168-.7-.406-.983" />
      </svg>
    );
  }
  if (name === "Tailwind") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="#38BDF8">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
      </svg>
    );
  }
  if (name === "Supabase") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path
          d="M13.444 2.115c.677-.813 1.954-.34 1.97.724l.154 10.158 6.44-.067c.954-.01 1.503 1.089.878 1.811L10.556 21.885c-.677.813-1.954.34-1.97-.724l-.154-10.158-6.44.067c-.954.01-1.503-1.089-.878-1.811L13.444 2.115z"
          fill="#3ECF8E"
        />
      </svg>
    );
  }
  if (name === "Express") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect width="24" height="24" rx="6" fill="#201f27" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
        <text
          x="12"
          y="15.5"
          textAnchor="middle"
          fontSize="11"
          fontWeight="bold"
          fontFamily="system-ui, -apple-system, sans-serif"
          fill="#F5F5F7"
          letterSpacing="-0.5px"
        >
          ex
        </text>
      </svg>
    );
  }
  if (name === "Firestore") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path d="M4.5 19.5L12 4.5l7.5 15-7.5-4.5-7.5 4.5z" fill="#FFA000" />
        <path d="M12 4.5l7.5 15-7.5-4.5V4.5z" fill="#FFCA28" />
        <path d="M4.5 19.5l3.5-9.5 4 4.5-7.5 5z" fill="#F57C00" />
      </svg>
    );
  }
  if (name === "ScikitLearn") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <circle cx="6" cy="12" r="3.2" fill="#3499CD" />
        <circle cx="18" cy="6.5" r="2.8" fill="#F89939" />
        <circle cx="17.5" cy="17.5" r="2.8" fill="#F89939" />
        <line x1="6" y1="12" x2="18" y2="6.5" stroke="#ffffff" strokeWidth="1.6" strokeOpacity="0.7" />
        <line x1="6" y1="12" x2="17.5" y2="17.5" stroke="#ffffff" strokeWidth="1.6" strokeOpacity="0.7" />
        <line x1="18" y1="6.5" x2="17.5" y2="17.5" stroke="#ffffff" strokeWidth="1.6" strokeOpacity="0.7" />
      </svg>
    );
  }
  if (name === "Postman") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <circle cx="12" cy="12" r="10.5" fill="#FF6C37" />
        <path
          d="M17.2 9.4c-.4-1.4-1.9-2.3-3.6-2.3-2.2 0-4 1.8-4 4s1.8 4 4 4c1.8 0 3.3-1.1 3.8-2.6l-1.9-.5c-.3.9-1.1 1.4-1.9 1.4-1.2 0-2.2-.9-2.2-2.2s1-2.2 2.2-2.2c1 0 1.7.6 1.9 1.4l1.7-.5z"
          fill="#ffffff"
        />
        <path d="M12.5 7.5l3.5 4.5-3.5 4.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (name === "Vercel") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path d="M12 2.5L22.5 21H1.5L12 2.5Z" fill="#FFFFFF" />
      </svg>
    );
  }

  const svgContent = toolSvgs[name as keyof typeof toolSvgs];
  if (!svgContent) {
    return <span className="font-semibold text-xs text-white">{name[0]}</span>;
  }

  return (
    <div
      className={`flex items-center justify-center text-white shrink-0 ${className}`}
      dangerouslySetInnerHTML={{
        __html: svgContent.replace(/fill="[^"]*"/g, 'fill="currentColor"')
      }}
    />
  );
}

export function StarIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={`${className} fill-[#f59e0b] text-[#f59e0b]`}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export function ArrowUpRight({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export function LinkedInIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export function BehanceIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.938 4.5c-2.906 0-4.938 1.906-4.938 4.969 0 2.969 1.938 4.969 4.938 4.969 1.156 0 2.188-.344 3.031-.969l-1.063-1.625c-.531.375-1.188.594-1.969.594-1.625 0-2.656-.969-2.781-2.594h5.969c.031-.25.063-.5.063-.781 0-2.844-1.625-4.563-3.25-4.563zm-.125 1.844c1.125 0 1.625.875 1.688 1.844h-3.469c.156-1.031.75-1.844 1.781-1.844zm11.188-1.844h-5.25v1.688h5.25v-1.688zm-3.875 3.844v1.719h2.375c.938 0 1.5.469 1.5 1.25 0 .844-.656 1.344-1.719 1.344h-2.156v-4.313h-2.094v11h4.625c2.406 0 4.094-1.406 4.094-3.5 0-1.469-.844-2.563-2.063-2.938 1.031-.469 1.75-1.438 1.75-2.719 0-2.031-1.625-3.344-3.875-3.344h-2.438z" />
    </svg>
  );
}

export function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689-.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function GitHubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export function TelegramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.832.942z" />
    </svg>
  );
}
