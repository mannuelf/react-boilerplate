const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "dist"), // absolute path to output
        filename: "app.bundle.js"
    }
}