const { ModuleFederationPlugin } = require('webpack').container;
const { webpackKit } = require('@teammate-search/microfrontends-kit');

module.exports = {
    createMFSubmodulePlugin: () => ({
        output: {
            publicPath: 'auto',
        },
        plugins: [
            new ModuleFederationPlugin({
                name: 'auth',
                filename: 'remoteEntry.js',
                exposes: {
                    './bootstrap': './src/bootstrap.tsx'
                },
                shared: webpackKit.transformDependenciesMap(
                    webpackKit.makeSharedDependenciesMap(),
                    (name, version) => ({
                        requiredVersion: version
                    })
                )
            })
        ]
    })
};