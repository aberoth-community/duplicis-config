import { mergeConfig } from 'vite'

/**
 * @type {import('rollup').ExternalOption}
 */
export const external = [/^@duplicis\/(?!components).*/, 'svelte']

/**
 * @param {import('rollup').InputOption} entry
 * @returns {import('vite').Plugin}
 */
export const duplicis = (entry) => ({
  name: 'vite:duplicis',
  config: (config) => {
    return mergeConfig(
      /** @type {import('vite').UserConfig} */ ({
        build: {
          lib: {
            entry,
            formats: ['es'],
          },
          rollupOptions: { external },
        },
      }),
      config,
    )
  },
  resolveId: (id) => {
    if (external.some((e) => (e instanceof RegExp ? e.test(id) : e === id))) {
      return { id, external: true }
    }
  },
})

export default duplicis
