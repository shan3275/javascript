
const commandLineUsage = require('command-line-usage') 

const sections = [
  {
    header: 'A tiktok test app',
    content: 'test tiktok login and click heartfill'
  },
  {
    header: 'Options',
    optionList: [
      {
        name: 'url',
        typeLabel: '{underline url}',
        description: 'The input parameter.'
      },
      {
        name: 'help',
        description: 'Print this usage guide.'
      }
    ]
  }
]
const usage = commandLineUsage(sections)

const commandLineArgs = require('command-line-args')
const optionDefinitions = [
  {name: 'url', type: String, multiple: false, defaultOption: false},
];

const options = commandLineArgs(optionDefinitions);

console.log(options.url);

if (options.url == undefined) {
  console.log(usage);
}
