import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config) => {
    config.module?.rules?.push(
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: "ts-loader",
              options: { transpileOnly: true },
            },
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        }
    );
    return config;
  },
};

export default config;