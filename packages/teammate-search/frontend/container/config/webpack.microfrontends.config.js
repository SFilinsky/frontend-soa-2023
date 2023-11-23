const { ModuleFederationPlugin } = require('webpack').container;
const { webpackKit } = require('@teammate-search/microfrontends-kit');

module.exports = {
    createMFContainerPlugin: () => ({
        plugins: [
            new ModuleFederationPlugin({
                name: 'container',
                remotes: {
                    auth: 'auth@http://localhost:3001/remoteEntry.js'
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