const withNextra = require("nextra")({
	theme: "nextra-theme-docs",
	themeConfig: "./theme.config.tsx",
	defaultShowCopyCode: true,
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.resolve.alias["@sentry/node"] = "@sentry/browser";
		}

		config.module.rules.push({
			test: /\.tsx?$/,
			use: [
				{
					loader: "ts-loader",
					options: {
						transpileOnly: true,
					},
				},
			],
		});

		config.module.rules.push({
			test: /\.css$/,
			use: ["style-loader", "css-loader", "postcss-loader"],
		});

		config.resolve.extensions.push(".ts", ".tsx");

		return config;
	},
});

module.exports = {
	...withNextra(),
	images: {
		unoptimized: true,
	},
};

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
