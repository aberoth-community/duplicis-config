import type { ExternalOption, InputOption } from 'rollup'
import type { Plugin } from 'vite'

/** Duplicis runtime packages (Should not be included in builds). */
export const external: ExternalOption

/**
 * Duplicis vite configuration plugin.
 * @param [entry] Duplicis plugin entries.
 * @returns              Vite plugin.
 */
export const duplicis: (entry: InputOption) => Plugin

export default duplicis
