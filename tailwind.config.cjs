/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#E72630',
				secondary: '#1F231E'
		  	},
			fontFamily: {
            	'sans': ['questrial', ...defaultTheme.fontFamily.sans],
				'pacifico': ['pacifico']
        	}
		},
	},
	plugins: [],
}
