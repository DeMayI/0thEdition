// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
    site: 'https://demayi.github.io',
    base: '/0thEdition',
    integrations: [starlight({
        title: 'Warhammer 0th Edition',
        social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/DeMayI/0thEdition' }],
        sidebar: [
            {
                label: 'Core Rules',
                autogenerate: { directory: 'core'},
            },
            {
                label: 'Army Rules',
                autogenerate: { directory: 'armyRules' },
            },
        ],
		}), markdoc()],
});