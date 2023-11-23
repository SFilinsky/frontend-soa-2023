export interface Submodule {
    mount: (mountEl: HTMLElement) => {}
}

async function load(): Promise<Submodule> {
    return import("auth/bootstrap");
}

export const moduleLoadersMap: Record<string, { source: string, load: typeof load }> = {
    auth: {
        source: "auth/bootstrap",
        load
    },
};