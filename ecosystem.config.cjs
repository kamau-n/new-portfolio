module.exports = {
	apps: [
		{
			name: "nickjames", // Name of the application
			script: "npm", // Command to run
			args: "run preview", // Runs 'vite preview' (assumes this is in package.json)
			cwd: "/apps/nickjames", // Absolute path to your React Vite project directory
			interpreter: "none", // Let npm handle the Node.js interpreter
			instances: 1, // Number of instances
			autorestart: true, // Restart app on crash
			watch: false, // Set to true if you want PM2 to restart on file changes
			max_memory_restart: "1G", // Restart if memory exceeds 1GB
			env: {
				NODE_ENV: "production", // Environment variables for production
				PORT: 8045, // Port set to 8045
			},
			env_development: {
				NODE_ENV: "development", // Environment variables for development
				PORT: 8045, // Port set to 8045 in development
			},
		},
	],
};
