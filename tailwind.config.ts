import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--color-background) / <alpha-value>)',
        foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        surfaceWarm: 'rgb(var(--color-surface-warm) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        primaryDark: 'rgb(var(--color-primary-dark) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        walnut: 'rgb(var(--color-walnut) / <alpha-value>)',
        walnutDark: 'rgb(var(--color-walnut-dark) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        lift: 'var(--shadow-lift)',
      },
      transitionDuration: {
        medium: 'var(--duration-medium)',
        slow: 'var(--duration-slow)',
        hero: 'var(--duration-hero)',
      },
      transitionTimingFunction: {
        refined: 'var(--ease-refined)',
      },
      borderRadius: {
        soft: 'var(--radius-soft)',
        panel: 'var(--radius-panel)',
      },
      maxWidth: {
        container: 'var(--container-max)',
      },
    },
  },
  plugins: [],
} satisfies Config;
