import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars';
import stylelint from 'vite-plugin-stylelint';
import eslint from 'vite-plugin-eslint2';
import path from 'path';

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@style': path.resolve(__dirname, './src/style'),
            '@shared': path.resolve(__dirname, './src/script/shared'),
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
        handlebars({
            partialDirectory: path.resolve(__dirname, 'partials'),
        }),
        eslint({
            cache: false,
            fix: true,
            emitWarning: true,
            exclude: [/virtual:/, /node_modules/, /sb-preview/],
        }),
        stylelint(),
    ],
})
