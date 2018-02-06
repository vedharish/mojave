const Kaba = require("kaba");

module.exports = (new Kaba())
    .addEntries({
        "all-tests": "./tests/build/all-tests.js",
        "complete-library-build": "./tests/build/complete-library-build.js",
    })
    .setOutputPath("tests/dist")
    .disableModuleConcatenation()
    .getWebpackConfig();
