/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        red: '#C32A3E',
        gray: '#9A9A9A',
        label: '#616060',
      },
      backgroundPosition: {
        top_bg: 'top -60px',
      },
      boxShadow: {
        primary: '0px 4px 7px rgba(0, 0, 0, 0.08)',
        active: '0px 5px 24px rgba(0, 0, 0, 0.16)',
        orange: '0px 1px 12px rgba(255, 100, 51, 0.7)',
      },
      rotate: {
        10: '10deg',
        5: '5deg',
      },
      backgroundColor: {
        primary: '#EBE7E7',
        'base-card': '#D9D9D9',
      },
      backgroundImage: {
      },
      borderColor: {
        secondary: '#AFAFAF',
      },
      fontSize: {
        'heading-ss': ['18px', { fontWeight: '500' }],
        'heading-ss-bold': ['18px', { fontWeight: '700' }],
        'heading-s': ['20px', { fontWeight: '600', lineHeight: '24px' }],
        'heading-m': ['24px', { fontWeight: '600' }],
        'heading-xm': ['28px', { fontWeight: '600' }],
        'rem-heading-xm': ['1.5rem', { fontWeight: '600' }],
        'rem-heading-s': ['1.2rem', { fontWeight: '600' }],
        'heading-l': ['64px', { fontWeight: '500', lineHeight: '70px' }],
        'heading-l-bold': ['64px', { fontWeight: 'Bold', lineHeight: '70px' }],
        'heading-xl': ['38px', { fontWeight: '600' }],
        'heading-xxl': ['52px', { fontWeight: '600' }],
        'text-s': ['12px', { lineHeight: '15px' }],
        'text-s-bold': ['12px', { lineHeight: '15px', fontWeight: '700' }],
        'text-s-height': ['12px', { lineHeight: '20px' }],
        'text-sm': ['14px', { lineHeight: '18px' }],
        'text-sm-bold': ['14px', { lineHeight: '18px', fontWeight: '700' }],
        'text-ss': ['10px', { fontWeight: '400', lineHeight: '12px' }],
        'text-sss': ['8px', { fontWeight: '400' }],
        'text-m': ['16px', { lineHeight: '20px', fontWeight: '400' }],
        'text-m-bold': ['16px', { fontWeight: '700' }],
        'text-l': ['18px', { lineHeight: '22px' }],
        'accent-l': ['18px', { fontWeight: '500' }],

        '18': ['18px', { lineHeight: '20px', fontWeight: '500' }],
        '20': ['20px', { lineHeight: '22px', fontWeight: '500' }],
      },
      filter: {
        'white-icon': 'brightness(0) invert(1)',
      },
      spacing: {
        px: '1px',
        0: '0px',
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px',
        '10_': '42px',
        11: '44px',
        12: '48px',
        13: '52px',
        14: '56px',
        15: '60px',
        'icon-1': '24px',
        'icon-2': '32px',
      },
      screens: {
        large: { min: '1279px', max: '1311px' },
        big: { min: '1023px', max: '1279px' },
        // => @media (max-width: 1279px) { ... }

        lg: { max: '1023px' },
        // => @media (max-width: 1023px) { ... }

        lg_min: { min: '767px', max: '1023px' },

        md: { max: '767px' },
        // => @media (max-width: 767px) { ... }

        md_min: { min: '639px', max: '767px' },

        sm_max: { min: '640px' },

        sm: { max: '639px' },

        sm_min: { min: '518px', max: '639px' },

        minn: { min: '318px', max: '518px' },
        // => @media (max-width: 639px) { ... }
      },
      borderRadius: {
        1: '2px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px',
        11: '44px',
        12: '48px',
        13: '52px',
        14: '56px',
        15: '60px',
      },
    },
  },
  plugins: [],
}
