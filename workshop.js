'use strict';

const path = require('path');
const workshopper = require('workshopper-adventure')({
	appDir: __dirname,
	languages: ['ru'],
	header: require('workshopper-adventure/default/header'),
	footer: require('workshopper-adventure/default/footer'),
	fail: require('workshopper-adventure/default/fail'),
	pass: require('workshopper-adventure/default/pass')
});

workshopper.addAll([
	'Create Web Server'
]);

workshopper.execute(process.argv.slice(2));
