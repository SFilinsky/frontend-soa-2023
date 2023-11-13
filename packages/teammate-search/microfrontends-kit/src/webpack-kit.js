const path = require('path');

/**
 * Extracts dependencies to share with other microfrontend modules
 *
 * Will only share dependencies from package.json in the same folder
 */
const makeSharedDependenciesMap = () => {
    const localPackageJsonPath = path.join(process.cwd(), 'package.json')
    try {
        return require(localPackageJsonPath).dependencies ?? {};
    }
    catch {
        throw new Error("getSharedDependenciesList() needs Webpack config to be places in package.json folder.")
    }
}

const transformDependenciesMap = (dependencyList, transformerFunc) => {
    return Object.entries(dependencyList)
        .reduce(
            (acc, [dependencyName, version]) => ({
                ...acc,
                [dependencyName] : transformerFunc(dependencyName, version)
            }),
            {}
        )
}

module.exports = {
    makeSharedDependenciesMap,
    transformDependenciesMap
}