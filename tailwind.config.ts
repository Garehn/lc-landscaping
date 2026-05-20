import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F6F4EF',
        charcoal: '#1A1D1F',
        sage: '#5C7A5E',
        copper: '#C4784A',
        stone: '#8E8A82',
        dune: '#E9E3D8',
        mist: '#D6D0C5',
        cedar: '#3D2E23',
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      maxWidth: {
        container: '1360px',
      },
      letterSpacing: {
        tightish: '-0.005em',
        tighter2: '-0.028em',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
