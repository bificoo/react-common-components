const developmentConfig = require("./webpack.config.development.js");

module.exports = {
    stories: ['../src/**/*.stories.js'],
    // addons: ['@storybook/addon-actions', '@storybook/addon-links'],
    webpackFinal: async (config, { configType }) => {
        if (configType === "DEVELOPMENT") {
            return {
                ...config,
                resolve: {
                    ...config.resolve,
                    ...developmentConfig.resolve,
                },
                module: {
                    ...config.module,
                    rules: developmentConfig.module.rules,
                },
            };
        }
        return config;
    },
};
