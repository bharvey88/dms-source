// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import spaces from './migration/confluence/sidebar.json' with { type: 'json' };

// Sections pinned to the top of the sidebar, in order.
const PINNED = ['Onboarding', 'Rules and Policies'];

const pinned = PINNED.map((label) => spaces.find((s) => s.label === label)).filter(Boolean);
const rest = spaces.filter((s) => !PINNED.includes(s.label));

const spaceGroup = (s) => ({
	label: s.label,
	collapsed: true,
	items: [{ autogenerate: { directory: s.dir, collapsed: true } }],
});

// https://astro.build/config
export default defineConfig({
	site: 'https://bharvey88.github.io',
	base: '/dms-source',
	integrations: [
		starlight({
			title: 'DMS Source',
			description:
				'The Dallas Makerspace knowledge base — committees, tools, training, rules, and history.',
			logo: { src: './src/assets/dms-logo.png', alt: 'Dallas Makerspace' },
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/bharvey88/dms-source' },
				{ icon: 'discourse', label: 'Talk (forum)', href: 'https://talk.dallasmakerspace.org' },
				{ icon: 'seti:todo', label: 'Events calendar', href: 'https://calendar.dallasmakerspace.org' },
			],
			editLink: {
				baseUrl: 'https://github.com/bharvey88/dms-source/edit/main/',
			},
			customCss: ['./src/styles/custom.css'],
			components: {
				Footer: './src/components/Footer.astro',
			},
			sidebar: [
				...pinned.map(spaceGroup),
				...rest.map(spaceGroup),
				{ label: 'Legacy Wiki Archive', link: '/archive/' },
			],
			pagination: false,
			lastUpdated: true,
		}),
	],
});
