const cp = require ('child_process')

// cp.execSync("start chrome https://nodejs.org/docs/latest-v19.x/api/module.html");

console.log('output' + cp.execSync("node demo.js"));