'use strict';

var inquirer = require('inquirer');

module.exports = function(command, data, cb) {
    inquirer.prompt([
      {
        type: 'list',
        name: 'list',
        message: 'What do you want to do?',
        choices: data
      }
    ]).then(function(answers) {
        // JSON.stringify(answers, null, '  ')
      return cb(null, 'hello')
    });
};
