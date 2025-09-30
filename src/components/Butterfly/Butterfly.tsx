import React from 'react'
import styles from './Butterfly.module.css'

// Butterfly: decorative SVG used across sections for feminine accents
// Props: className to position/size the butterfly via CSS Modules in parent components
export default function Butterfly({ className }: { className?: string }) {
  return (
    <svg
      className={`${styles.butterfly} ${className || ''}`}
      viewBox="0 0 64 64"
      width="64"
      height="64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="g1" x1="0%" x2="100%">
          <stop offset="0%" stopColor="#ffd6e8" />
          <stop offset="100%" stopColor="#ff9cc1" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="none">
        <path d="M22 10c6-6 18-6 24 0 6 6 6 18 0 24-6 6-18 6-24 0C16 28 16 16 22 10z" fill="url(#g1)" opacity="0.95" />
        <path d="M42 10c-6-6-18-6-24 0-6 6-6 18 0 24 6 6 18 6 24 0C48 28 48 16 42 10z" fill="#ffb6d0" opacity="0.95" transform="translate(6,0) scale(-1,1) translate(-6,0)" />
        <circle cx="32" cy="32" r="2" fill="#ff5ea8" />
        <path d="M31 34c-2 6 2 10 2 10s4-4 2-10" stroke="#ff5ea8" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  )
}
