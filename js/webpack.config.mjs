// @ts-check
import webpack from 'webpack';
import CopyPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import { LicenseWebpackPlugin } from 'license-webpack-plugin';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class JSONLicenseWebpackPlugin extends LicenseWebpackPlugin {
  constructor(pluginOptions = {}) {
    super({
      outputFilename: 'third-party-licenses.json',
      ...pluginOptions,
      renderLicenses: (modules) => this.renderLicensesJSON(modules),
      perChunkOutput: false,
    });
  }

  /** render an SPDX-like record */
  renderLicensesJSON(modules) {
    const packages /** @type {Record<string,any>} */ = [];
    const report = { packages };

    modules.sort((left, right) => (left.name < right.name ? -1 : 1));

    for (const mod of modules) {
      report.packages.push({
        name: mod.name || '',
        versionInfo: mod.packageJson.version || '',
        licenseId: mod.licenseId || '',
        extractedText: mod.licenseText || '',
      });
    }

    return JSON.stringify(report, null, 2);
  }
}

/** @type {import('webpack').Configuration} */
const config = {
  mode: 'production',
  devtool: 'source-map',
  entry: './lib/index.js',
  experiments: { outputModule: true },
  output: {
    path: path.resolve(__dirname, './dist/prjsf'),
    filename: 'prjsf.js',
    library: { type: 'module' },
    clean: true,
  },
  cache: {
    type: 'filesystem',
    cacheDirectory: path.resolve(__dirname, '../build/.cache/webpack'),
  },
  module: {
    rules: [{ test: /\.js$/, loader: 'source-map-loader', enforce: 'pre' }],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'demo/*.{json,toml,yaml}' }],
    }),
    new HtmlWebpackPlugin({
      filename: 'demo/index.html',
      template: 'demo/index.html',
      scriptLoading: 'module',
    }),
    new webpack.ids.HashedModuleIdsPlugin(),
    new JSONLicenseWebpackPlugin(),
  ],
  resolve: {
    alias: {
      react: 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat', // Must be below test-utils
      'react/jsx-runtime': 'preact/jsx-runtime',
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      minChunks: 3,
    },
    minimize: true,
    minimizer: [new TerserPlugin({ extractComments: 'all' })],
  },
};

export default config;