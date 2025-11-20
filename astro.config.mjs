// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// Supports weights 100-900
import '@fontsource-variable/geist-mono';
import '@fontsource/geist-sans';

import react from '@astrojs/react';

import icon from 'astro-icon';

import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), icon(), db()]
});