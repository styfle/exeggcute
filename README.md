# exeggcute

A node.js module to make executing shell cmds a breeze!

![img](http://cdn.bulbagarden.net/upload/a/af/102Exeggcute.png)


## Installation

Use npm as usual to save your package

```sh
npm install --save exeggcute
```

## Usage

### Windows
```js
const exec = require('exeggcute').exec;
//const exec = require('exeggcute').exec;
var dir = 'c:/code/';
var cmd = 'git clone https://github.com/styfle/exeggcute';
exec(cmd, dir);
```

### Linux
```js
const exec = require('exeggcute').exec;
//const exec = require('exeggcute').exec;
var dir = '/code/';
var cmd = 'git clone https://github.com/styfle/exeggcute';
exec(cmd, dir);
```

### ES6
```js
import {exec} from 'exeggcute';
var dir = '/code/';
var cmd = 'git clone https://github.com/styfle/exeggcute';
exec(cmd, dir);
```