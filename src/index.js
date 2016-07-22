"use strict";
const child_process = require('child_process');
function exec(cmd, cwd) {
    return new Promise((resolve, reject) => {
        child_process.exec(cmd, { cwd: cwd }, (error, stdout, stderr) => {
            if (error) {
                reject(error);
            }
            else if (stderr) {
                resolve(stderr);
            }
            else {
                resolve(stdout);
            }
        });
    });
}
exports.exec = exec;
