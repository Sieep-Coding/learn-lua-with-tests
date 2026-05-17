// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeGalaxy from 'starlight-theme-galaxy';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [starlightThemeGalaxy()],
			title: 'Learn Lua With Tests',
			customCss: [
        './src/styles/custom.css', 
      ],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/sieep-coding/learn-lua-with-tests' }],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Install Lua', slug: 'getting-started-with-lua/install-lua' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
