import type { Config } from 'tailwindcss'

// Mapeamento dos tokens do design system (../tokens.json) — README §10.
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-hover': 'var(--primary-hover)',
        'on-primary': 'var(--on-primary)',
        link: 'var(--link)',
        accent: 'var(--accent)',
        chrome: 'var(--chrome)',
        'chrome-light': 'var(--chrome-light)',
        surface: 'var(--surface)',
        selection: 'var(--selection)',
        ink: 'var(--ink)',
        'ink-muted': 'var(--ink-muted)',
        border: 'var(--border)',
        keycap: 'var(--keycap)',
        grass: 'var(--grass)',
        'grass-deep': 'var(--grass-deep)',
        danger: 'var(--danger)',
        success: 'var(--success)',
      },
      fontFamily: {
        display: ['Unbounded', 'Arial Black', 'sans-serif'],
        sans: ['Poppins', 'Segoe UI', 'sans-serif'],
        pixel: ['"Pixelify Sans"', 'Tahoma', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Consolas', 'monospace'],
      },
      borderRadius: { none: '0', sm: '3px', lg: '8px', pill: '999px' },
      boxShadow: {
        'bevel-out': 'var(--shadow-bevel-out)',
        'bevel-in': 'var(--shadow-bevel-in)',
        window: 'var(--shadow-window)',
        lift: 'var(--shadow-lift)',
        cta: 'var(--shadow-cta)',
      },
      maxWidth: { container: '1200px', measure: '68ch' },
    },
  },
  plugins: [],
} satisfies Config
