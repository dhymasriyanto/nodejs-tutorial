// CommonJS / Common Module

const action = require("./index2.js");

action.action()
// action();

// Old Common Module
// Don't :
//
// exports.action = () => {
//
// }
//
// Do this instead :
//
// const action = () => {
//
// }
//
// module.exports = { action };
