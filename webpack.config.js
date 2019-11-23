const path = require("path");

module.exports = {
    mode: "production", // set mode, development or production, can be set dynamically.
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "dist"), // absolute path to output
        filename: "app.bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: [
                        "@babel/preset-env",
                        "@babel/preset-react"
                    ] // transforms modern ES6 to older version in app.bundle
                }
            }
        ]
    }
}