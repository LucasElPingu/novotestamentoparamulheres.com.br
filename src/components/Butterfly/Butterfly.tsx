import styles from "./Butterfly.module.css";

// Butterfly 2.2.1: versão anterior com asas inferiores um pouco mais altas
export default function Butterfly({ className }: { className?: string }) {
  return (
    <svg
      className={`${styles.butterfly} ${className || ""}`}
      viewBox="0 0 100 100"
      width="64"
      height="64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <radialGradient id="wingGradient" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#fff0f7" />
          <stop offset="100%" stopColor="#ff8fbf" />
        </radialGradient>
        <linearGradient id="bodyGradient" x1="0%" x2="100%">
          <stop offset="0%" stopColor="#ff5ea8" />
          <stop offset="100%" stopColor="#d63384" />
        </linearGradient>
      </defs>

      {/* Asas superiores */}
      <path
        d="M20,40 C10,10 50,10 45,40 Q40,70 20,40 Z"
        fill="url(#wingGradient)"
        stroke="#ff9cc1"
        strokeWidth="1.2"
        opacity="0.50"
      />
      <path
        d="M80,40 C90,10 50,10 55,40 Q60,70 80,40 Z"
        fill="url(#wingGradient)"
        stroke="#ff9cc1"
        strokeWidth="1.2"
        opacity="0.50"
      />

      {/* Asa inferior esquerda (desci 3 no Y) */}
      <path
        d="M25,53 C10,78 45,83 45,53 Q40,68 25,53 Z"
        fill="url(#wingGradient)"
        stroke="#ff9cc1"
        strokeWidth="1.2"
        opacity="0.50"
      />

      {/* Asa inferior direita (desci 3 no Y) */}
      <path
        d="M75,53 C90,78 55,83 55,53 Q60,68 75,53 Z"
        fill="url(#wingGradient)"
        stroke="#ff9cc1"
        strokeWidth="1.2"
        opacity="0.50"
      />

      {/* Corpo */}
      <rect
        x="48"
        y="38"
        width="4"
        height="24"
        rx="2"
        fill="url(#bodyGradient)"
        opacity="0.50"
      />

      {/* Antenas */}
      <path
        d="M50 36 C48 28 40 22 35 20"
        stroke="#d63384"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
        opacity="0.50"
      />
      <path
        d="M50 36 C52 28 60 22 65 20"
        stroke="#d63384"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
        opacity="0.50"
      />

      {/* Brilho */}
      <circle cx="50" cy="50" r="6" fill="white" opacity="0.3" />
    </svg>
  );
}
