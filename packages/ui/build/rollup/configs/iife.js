import { defineConfig } from 'rollup'
import typescriptPlugin from 'rollup-plugin-typescript2'
import vuePlugin from 'rollup-plugin-vue'
import postcssPlugin from 'rollup-plugin-postcss'
import { terser as terserPlugin } from 'rollup-plugin-terser'
import nodeBuiltinsPlugin from 'rollup-plugin-node-builtins'
import commonjsPlugin from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescriptDeclarationPlugin from '../plugins/rollup-typescript-declaration'

/** Used to create lib, that can be used in browser. This build define VuesticUI global variable. */
export function createIIFEConfig ({ input, outDir = 'dist/', minify = false, declaration = false, sourcemap = false, libName = 'vuestic-ui' }) {
  const config = defineConfig({
    input,
    output: {
      sourcemap,
      format: 'iife',
      file: `${outDir}/${libName}.js`,

      /**
       * Then user can use vuestic global VuesticUI
       * example: VuesticUI.VuesticPlugin
       */
      name: 'VuesticUI',
      globals: { vue: 'Vue' },

      // Define process object for libs.
      intro: "var process = { env: { NODE_ENV: 'production' } };",
    },

    context: 'window',

    external: ['vue'],

    plugins: [
      typescriptPlugin({ check: false }),
      vuePlugin({ target: 'browser', compileTemplate: true, preprocessStyles: true }),
      commonjsPlugin(),
      nodeResolve({ browser: true }),
      postcssPlugin({ extract: `${libName}.css` }),
      nodeBuiltinsPlugin({ crypto: true }),
    ],
  })

  if (minify) { config.plugins.push(terserPlugin({ safari10: true, compress: { ecma: 2015, pure_getters: true } })) }
  if (declaration) { config.plugins.push(typescriptDeclarationPlugin({ outDir })) }

  return config
}
