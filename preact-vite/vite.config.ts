import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import deno from '@deno/vite-plugin';
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		host: "0.0.0.0",
		port: 8000,
		allowedHosts: ["chat.local.dev"],
		origin: "https://chat.local.dev",
		proxy: {
			'/api': 'http://0.0.0.0:3000'
		}
	},
	plugins: [
		deno(),
		preact(),
		tailwindcss()
	],
});
