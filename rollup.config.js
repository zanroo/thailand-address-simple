// import { terser } from "rollup-plugin-terser";

// import json from "@rollup/plugin-json";
// import commonjs from "@rollup/plugin-commonjs";
// import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

export default {
    input: "src/index.ts",
    output: [
        {
            file: "dist/bundle.esm.js",
            format: "esm",
            sourcemap: true,
        },
        {
            file: "dist/bundle.cjs.js",
            format: "cjs",
            sourcemap: true,
            exports: "default",
        },
        // {
        //     file: "dist/bundle.umd.js",
        //     format: "umd",
        //     name: "ThailandAddressNano",
        //     sourcemap: true,
        //     exports: "default",
        //     plugins: [resolve({ browser: true }), commonjs(), json(), terser()],
        // },
    ],
    // external: [
    //     "http", // imported by axios
    //     "https", // imported by axios
    //     "url", // imported by follow-redirects
    //     "assert", // imported by follow-redirects
    //     "stream", // imported by follow-redirects
    //     "tty", // imported by follow-redirects
    //     "util", // imported by follow-redirects
    //     "zlib", // imported by axios
    // ],
    external: ["axios"],
    plugins: [typescript()],
};
