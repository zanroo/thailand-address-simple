const path = require("path");

module.exports = {
    externals: {
        fs: "fs",
    },

    // bundling mode
    mode: "production",

    // entry files
    entry: "./src/index.ts",

    // output bundles (location)
    output: {
        filename: "bundle.umd.js",
        path: path.resolve(__dirname, "dist"),
        library: "ThailandAddressSimple",
        libraryTarget: "umd",
        libraryExport: "default",
    },

    // file resolutions
    resolve: {
        extensions: [".ts", ".js"],
    },

    // loaders
    module: {
        rules: [
            {
                test: /\.ts?/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
};
