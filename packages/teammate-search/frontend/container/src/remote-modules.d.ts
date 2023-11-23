/**
 * This file is needed to notify TS about remote modules that are resolved in runtime.
 *
 * Whenever there is new submodule introduced, it should be added to this list.
 * Each submodule is expected to expose exactly one file - `/bootstrap`.
 */

declare module 'auth/bootstrap';