/** @type {import('next').NextConfig} */

const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

const getRemotes = (isServer) => {
    const location = isServer ? 'ssr' : 'chunks';
    return {
        // specify remotes
        auth: `auth@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
    };
}

module.exports = {
    reactStrictMode: true,
    webpack: (config, options) => {
        const { isServer } = options;

        config.plugins.push(
            new NextFederationPlugin({
                name: "container",
                filename: "static/runtime/app2remoteEntry.js",
                remotes: getRemotes(isServer),
                exposes: {

                },
                shared: [ 'react-dom' ]
            }),
        )

        return config;
    }
}
