import {useEffect, useState} from "react";
import {moduleLoadersMap, Submodule} from "../moduleMap";

interface UseSubmoduleResult {
    isLoading: boolean,
    submodule: Submodule | null | undefined
    submoduleName: string
}

/**
 * Loads submodule while keeping track of loading state.
 *
 * This hook is intended to be used only in IntegrateModule component, using it anywhere else means
 * changing architecture contract.
 *
 * @param submoduleName Name of a module to import
 */
export function useSubmodule(submoduleName: string): UseSubmoduleResult {

    const [ isLoading, setIsLoading] = useState(true);
    const [ submodule, setSubmodule ] = useState<Submodule | null>();

    useEffect(() => {

        const moduleLoader = moduleLoadersMap[submoduleName];

        if (!moduleLoader) {
            console.error(new Error(`Tried to load unknown module ${submoduleName}`));
            setSubmodule(null);
            setIsLoading(false);
            return;
        }

        // Simulate request loading delay
        new Promise((resolve, reject) => {
            setTimeout(resolve, 1000);
        })
            .then(() => {
                return moduleLoader.load()
            })
            .then((loadedSubmodule) => {
                setSubmodule(loadedSubmodule);
            })
            .catch(() => {
                setSubmodule(null);
            })
            .finally(() => setIsLoading(false));
    }, [submoduleName]);

    return {
        isLoading,
        submodule,
        submoduleName: submoduleName
    }

}