# exeggcute

[![Version](https://img.shields.io/npm/v/exeggcute.svg)](https://www.npmjs.com/package/exeggcute)
[![Downloads](https://img.shields.io/npm/dt/exeggcute.svg)](https://www.npmjs.com/package/exeggcute)

A node.js module to make executing shell commands a breeze!

It simply wraps [child_process.exec](https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback) with a promise so there are *zero dependencies* besides node!

![img](http://cdn.bulbagarden.net/upload/a/af/102Exeggcute.png)


## Installation

Use npm as usual to save the package to your dependencies:

```sh
npm install --save exeggcute
```

## Usage

Windows (note the directory)
```js
const exec = require('exeggcute').exec;
var dir = 'c:/code/';
var cmd = 'git clone https://github.com/styfle/exeggcute';
exec(cmd, dir);
```


Linux (note the directory)
```js
const exec = require('exeggcute').exec;
var dir = '/code/';
var cmd = 'git clone https://github.com/styfle/exeggcute';
exec(cmd, dir);
```

ES6 Import (note the import)
```js
import {exec} from 'exeggcute';
var dir = '/code/';
var cmd = 'git clone https://github.com/styfle/exeggcute';
exec(cmd, dir);
```

## What's with the name?

The name `exeggcute` is named after the pokemon, Exeggcute. You can see more code/projects named after pokemon at [repokemon](https://cheeaun.github.io/repokemon/).

## Why did you make this?

I wanted to execute a chain of commands that reads nicely and not worry about syntax. The node core APIs do not use promises so it's easy to get into [callback hell](http://callbackhell.com/). `exeggcute` makes it easy to write a RESTful API that executes several commands in a row and fails if any one command in the chain fails.

### Advanced Usage Example
Below is an example that mirrors code from the `originRepo` to the `targetRepo`.
This is a hook that runs for each push of a branch or tag to the `originRepo` and will then push that branch/tag to the `targetRepo`.

```js
hasDir(repoDir)
    .then(exists => {
        if (!exists) {
            return exec(`git clone ${originRepo}`, baseDir)
                .then(() => exec(`git remote add target ${targetRepo}`, repoDir))
        }
        return Promise.resolve(exists);
    })
    .then(() => exec(`git checkout ${branch}`, repoDir))
    .then(() => exec(`git pull origin ${branch}`, repoDir))
    .then(() => exec(`git push target ${branch}`, repoDir))
    .then(() => exec(`git pull origin --tags`, repoDir))
    .then(() => exec(`git push target --tags`, repoDir))
    .catch((err) => console.error('Oh no! ', err));
```
