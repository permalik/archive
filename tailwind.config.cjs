const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'green900': '#04110b'
		},
		extend: {
      fontFamily: {
        'sans': ['Fira Sans', ...defaultTheme.fontFamily.sans],
				'serif': ['Roboto Serif', ...defaultTheme.fontFamily.serif],
      },
    }
	},
	plugins: [],
}
