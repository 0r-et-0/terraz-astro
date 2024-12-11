// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://0r-et-0.github.io',
    base: process.env.NODE_ENV === 'production' ? '/terraz-astro/' : '/',
});
