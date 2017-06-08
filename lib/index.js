'use strict';

var os = require('os');
var path = require('path');
var fs = require('fs');

var inquirer = require('inquirer');

var escache = path.join(os.homedir(), '.escache');

exports.list = function(msg, data) {
    inquirer.prompt([
      { type: 'list', name: 'list', message: msg, choices: data }
    ]).then(function(answers) {
        fs.writeFileSync(escache, answers.list);
    });
};
