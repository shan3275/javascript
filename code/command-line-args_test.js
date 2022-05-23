const commandLineArgs = require('command-line-args')
const optionDefinitions = [
  {name: 'owner', type: String, multiple: false, defaultOption: false},
  {name: 'repo', type: String, multiple: false, defaultOption: false},
];

const options = commandLineArgs(optionDefinitions);

console.log(options.owner);
console.log(options.repo);
