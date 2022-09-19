#!/usr/bin/env node
function displayHelp() {
    console.log("This is a local REST API for some of Yammmie's data.");
    console.log("Yammie orders can be accessed at: http://localhost:3001/api/orders/");
    console.log("Yammie orders can be added with Postman or React/Angular: http://localhost:3001/api/orders/");
    console.log("Read the documentation at: https://www.npmjs.com/package/yammie-restaurant-backend-for-jones-by-jack-in-javascript");
}

module.exports = displayHelp;