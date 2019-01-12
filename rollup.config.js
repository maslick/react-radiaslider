import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
const NODE_ENV = process.env.NODE_ENV || "development";

export default {
    input: 'index.js',
    output: {
        file: 'dist/index.js',
        format: 'cjs'
    },
    plugins: [
        replace({
            "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
        }),
        babel({
            exclude: "node_modules/**"
        }),
        resolve(),
        commonjs()
    ],
    external: id => /^react|styled-jsx/.test(id)
};