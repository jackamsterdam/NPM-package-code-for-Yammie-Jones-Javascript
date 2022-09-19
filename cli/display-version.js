#!/usr/bin/env node
const packageJson = require("../package.json");

function displayVersion() {
    console.log(packageJson.name);
    console.log("Version: " + packageJson.version);
    console.log("Created by Jack Amsterdam.");
}

module.exports = displayVersion;


