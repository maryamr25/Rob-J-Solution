import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                body: ['var(--roboto)'],
                heading: ['var(--merriweather)'],
            },
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                white: '#ffffff',
                black: '#000000',
                primary: '#26ABE2',
                secondary: '#09151B',
                tertiary: '#818181',
                error: '#DC2626',
                success: '#10B981',
                button: '#2A8CBF',
                lightBg: '#F0F0F0',
                orange: {
                    50: '#FEF6EE',
                    100: '#FDEAD7',
                    200: '#FAD2AE',
                    300: '#F6B17B',
                    400: '#F18746',
                    500: '#ED651F',
                    600: '#DE4E18',
                    700: '#B93A15',
                    800: '#932F19',
                    900: '#772917',
                    950: '#40120A',
                },
            },
        },
        lineHeight: {
            '140': '140%',
            '150': '150%',
            '130': '130%',
            '180': '180%',
            none: '1',
            tight: '1.25',
            snug: '1.375',
            normal: '1.5',
            relaxed: '1.625',
            loose: '2',
        },
        borderRadius: {
            none: '0',
            sm: '0.125rem',
            DEFAULT: '0.25rem',
            md: '0.375rem',
            lg: '10px',
            xl: '12px',
            xxl: '20px',
            full: '9999px',
        },
    },
    plugins: [],
};
export default config;
