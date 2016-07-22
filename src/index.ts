import * as child_process from 'child_process';

export function exec(cmd: string, cwd: string) {
    return new Promise<string>((resolve, reject) => {
        child_process.exec(cmd, {cwd: cwd}, (error, stdout, stderr) => {
            if (error) {
                reject(error);
            } else if (stderr) {
                resolve(stderr);
            } else {
                resolve(stdout);
            }
        });
    });
}