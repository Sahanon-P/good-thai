interface ThaiOrnamentProps {
  className?: string;
  size?: number;
  flip?: boolean;
}

export function ThaiOrnament({ className, size = 140, flip = false }: ThaiOrnamentProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      aria-hidden="true"
    >
      {/* Central lotus bloom */}
      <circle cx="18" cy="122" r="9" fill="#C9A84C" />
      <circle cx="18" cy="122" r="5" fill="#7A0020" />
      <ellipse cx="18" cy="110" rx="4" ry="9" fill="#C9A84C" opacity="0.85" />
      <ellipse cx="18" cy="110" rx="4" ry="9" fill="#C9A84C" opacity="0.85"
        transform="rotate(40 18 122)" />
      <ellipse cx="18" cy="110" rx="4" ry="9" fill="#C9A84C" opacity="0.85"
        transform="rotate(-40 18 122)" />
      <ellipse cx="18" cy="110" rx="4" ry="9" fill="#C9A84C" opacity="0.85"
        transform="rotate(80 18 122)" />
      <ellipse cx="18" cy="110" rx="4" ry="9" fill="#C9A84C" opacity="0.85"
        transform="rotate(-80 18 122)" />

      {/* Main ascending scroll */}
      <path
        d="M22 118 C35 100 55 85 75 65 C90 50 105 32 112 18"
        stroke="#C9A84C"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Flame leaves along main scroll */}
      <path d="M40 102 C32 90 42 80 50 88 C52 96 44 105 40 102Z" fill="#C9A84C" opacity="0.8" />
      <path d="M62 80 C54 68 64 58 72 66 C74 74 66 83 62 80Z" fill="#C9A84C" opacity="0.8" />
      <path d="M85 57 C77 45 87 35 95 43 C97 51 89 60 85 57Z" fill="#C9A84C" opacity="0.8" />

      {/* Curling tip */}
      <path
        d="M112 18 C118 10 124 12 120 20 C116 28 108 24 112 18Z"
        fill="#C9A84C"
        opacity="0.9"
      />
      <circle cx="120" cy="18" r="2.5" fill="#C9A84C" />

      {/* Horizontal sweep along base */}
      <path
        d="M27 124 C50 120 75 122 95 118 C110 115 120 108 124 100"
        stroke="#C9A84C"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Small leaves along horizontal scroll */}
      <path d="M52 122 C48 112 56 106 62 114 C62 120 55 125 52 122Z" fill="#C9A84C" opacity="0.7" />
      <path d="M82 120 C78 110 86 104 92 112 C92 118 85 123 82 120Z" fill="#C9A84C" opacity="0.7" />

      {/* Terminal dots */}
      <circle cx="124" cy="100" r="3" fill="#C9A84C" />

      {/* Decorative ring around lotus */}
      <circle cx="18" cy="122" r="13" stroke="#C9A84C" strokeWidth="0.75" fill="none" strokeDasharray="3 3" />
    </svg>
  );
}
