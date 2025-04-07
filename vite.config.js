import {defineConfig} from 'vite'
import nunjucks from 'vite-plugin-nunjucks';
import stylelint from 'vite-plugin-stylelint';
import eslint from 'vite-plugin-eslint2';
import path from 'path';
import imagemin from 'imagemin'
import imageminWebp from 'imagemin-webp'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';


const rootPath = './'
const mergeFilter = (obj1, obj2) => {
  return {...obj1, ...obj2 };
};

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@style': path.resolve(__dirname, './src/style'),
      '@features': path.resolve(__dirname, './src/script/features'),
      '@shared': path.resolve(__dirname, './src/script/shared'),
      '@ui': path.resolve(__dirname, './src/script/ui'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        silenceDeprecations: ['import'],
      },
    },
  },
  plugins: [
    ViteImageOptimizer({
      svg: {
        plugins: [
          'removeDoctype',
          'removeXMLProcInst',
          'minifyStyles',
          'sortAttrs',
          'sortDefsChildren',
        ],
      },
      png: {
        quality: 70,
      },
      jpeg: {
        quality: 70,
      },
      jpg: {
        quality: 70,
      }
    }),
    {
      ...imagemin(['./src/image/**/*.{jpg,png,jpeg}'], {
        destination: './src/image/webp/',
        plugins: [
          imageminWebp({ quality: 70 })
        ]
      }),
      apply: 'serve',
    },
    {
      ...imagemin([
        './public/**/*.{jpg,png,jpeg}',
        '!./public/favicon/**/*',
      ], {
        destination: './public/webp/',
        plugins: [
          imageminWebp({ quality: 70 })
        ]
      }),
      apply: 'serve',
    },
    nunjucks({
      nunjucksEnvironment: {
        filters: {
          merge: mergeFilter
        },
      },
      templatesDir: path.resolve(__dirname, './partials'),
    }),
    eslint({
      cache: false,
      fix: true,
      emitWarning: true,
      exclude: [/virtual:/, /node_modules/, /sb-preview/],
    }),
    stylelint(),
  ],
  base: `${rootPath}`,
})
