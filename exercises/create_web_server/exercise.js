'use strict';

const exercise = require('workshopper-exercise')();
const filecheck = require('workshopper-exercise/filecheck');
const execute = require('workshopper-exercise/execute');
const comparestdout = require('workshopper-exercise/comparestdout');

filecheck(exercise);
execute(exercise);
comparestdout(exercise);

module.exports = exercise;
