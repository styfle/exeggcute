# exeggcute

A node.js module to make executing shell cmds a breeze!

![img](http://cdn.bulbagarden.net/upload/a/af/102Exeggcute.png)


## Installation

Use npm as usual to save the package to your dependencies:

```sh
npm install --save exeggcute
```

## Usage

### Windows
```js
const exec = require('exeggcute').exec;
var dir = 'c:/code/';
var cmd = 'git clone https://github.com/styfle/exeggcute';
exec(cmd, dir);
```

### Linux
```js
const exec = require('exeggcute').exec;
var dir = '/code/';
var cmd = 'git clone https://github.com/styfle/exeggcute';
exec(cmd, dir);
```

### ES6 Import
```js
import {exec} from 'exeggcute';
var dir = '/code/';
var cmd = 'git clone https://github.com/styfle/exeggcute';
exec(cmd, dir);
```

## What's with the name?

`exeggcute` is named after the pokemon, Exeggcute. You can see more code/projects named after pokemon at [repokemon](https://cheeaun.github.io/repokemon/).

## Why did you make this?

I wanted to execute a chain of commands that reads nicely and not worry about syntax.

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