import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
			},
			keyframes: {
				translateHero: {
					'0%': {
						transform: 'translate3d(-20rem, 0rem, 0px)',
					},
					'50%': {
						transform: 'translate3d(-60rem, -29rem, 0px)',
					},
					'100%': {
						transform: 'translate3d(-20rem, 0rem, 0px)',
					},
				},
			},
			animation: {
				translateHero: 'translateHero 15s ease-in-out infinite', // You can customize the duration, timing function, and repeat
			},
		},
	},
	plugins: [],
}
export default config
