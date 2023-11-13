/** @type {import('next').NextConfig} */

const { ModuleFederationPlugin } = require('webpack').container;
const { merge } = require('webpack-merge');

const { webpackKit } = require('@teammate-search/microfrontends-kit');

const makeRemotesList = (isServer) => {
    const location = isServer ? 'ssr' : 'chunks';
    return {
        // specify remotes
        // auth: `auth@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
    };
};

module.exports = {
    reactStrictMode: true,
    webpack: (config, options) => merge(
        config,
        {
            plugins: [
                new ModuleFederationPlugin({
                    name: 'container',
                    remotes: makeRemotesList(options.isServer),
                    shared: webpackKit.transformDependenciesMap(
                        webpackKit.makeSharedDependenciesMap(),
                        (name, version) => ({
                            singleton: true,
                            requiredVersion: version,
                            eager: true
                        })
                    )
                })
            ]
        }
    ),
}
