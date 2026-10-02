/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        cz: {
          bg: '#07090b',
          'bg-elev': '#0d1116',
          panel: '#11161d',
          'panel-2': '#161c25',
          border: '#1c232d',
          'border-bright': '#2a3340',
          text: '#e2e8f0',
          'text-dim': '#94a3b8',
          'text-mute': '#475569',
          accent: '#38bdf8',
          'accent-dim': '#0ea5e9',
          amber: '#f59e0b',
          'amber-dim': '#b45309',
          danger: '#ef4444',
          success: '#22c55e',
        },
      },
      boxShadow: {
        'glow-accent': '0 0 30px rgba(56, 189, 248, 0.15)',
        'glow-amber': '0 0 30px rgba(245, 158, 11, 0.12)',
        'inner-glow': 'inset 0 0 20px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};
