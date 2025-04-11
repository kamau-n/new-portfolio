import react from "@vitejs/plugin-react-swc";
import { componentTagger } from "lovable-tagger";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
	server: {
		host: "::",
		port: 8045,
	},
	preview: {
		port: 8045, // Ensure this matches your desired port
		host: "0.0.0.0", // Allow external access (needed for domain access)
		allowedHosts: ["nickjames.co.ke"], // Add your domain here
	},
	plugins: [react(), mode === "development" && componentTagger()].filter(
		Boolean
	),
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
}));
