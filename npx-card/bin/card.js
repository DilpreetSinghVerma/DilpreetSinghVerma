#!/usr/bin/env node

'use strict';

// Force UTF-8 output on Windows
if (process.platform === 'win32') {
  try { require('child_process').execSync('chcp 65001', { stdio: 'ignore' }); } catch (_) {}
}

const chalk    = require('chalk');
const boxen    = require('boxen');
const gradient = require('gradient-string');

process.stdout.write('\x1Bc');

const blue   = chalk.hex('#58a6ff');
const green  = chalk.hex('#3fb950');
const orange = chalk.hex('#ff9500');
const purple = chalk.hex('#bc8cff');
const dim    = chalk.dim;
const bold   = chalk.bold;
const white  = chalk.white;

const header = gradient(['#58a6ff', '#bc8cff', '#3fb950']).multiline(
`  ██████╗ ██╗██╗     ██████╗ ██████╗ ███████╗███████╗████████╗
  ██╔══██╗██║██║     ██╔══██╗██╔══██╗██╔════╝██╔════╝╚══██╔══╝
  ██║  ██║██║██║     ██████╔╝██████╔╝█████╗  █████╗     ██║   
  ██║  ██║██║██║     ██╔═══╝ ██╔══██╗██╔══╝  ██╔══╝     ██║   
  ██████╔╝██║███████╗██║     ██║  ██║███████╗███████╗   ██║   
  ╚═════╝ ╚═╝╚══════╝╚═╝     ╚═╝  ╚═╝╚══════╝╚══════╝   ╚═╝   `
);

const row = (icon, label, value, color = white) =>
  `  ${icon}  ${dim(label.padEnd(13))}${color(value)}`;

const divider = dim('  ' + '-'.repeat(56));

const card = [
  '',
  `  ${bold.white('Dilpreet Singh Verma')}`,
  `  ${dim('Founder . Full-Stack Builder . CS & AI/ML Student')}`,
  '',
  divider,
  '',
  row('>', 'Portfolio',  'dilpreet-webresume.vercel.app',     blue),
  row('>', 'Company',    'eventfoldstudio.com',               orange),
  row('>', 'GitHub',     'github.com/DilpreetSinghVerma',     blue),
  row('>', 'LinkedIn',   'in/dilpreet-singh-709b35310',       blue),
  row('>', 'Email',      'dilpreetsinghverma@gmail.com',      green),
  row('>', 'Location',   'Ludhiana, Punjab, India',           white),
  '',
  divider,
  '',
  `  ${purple('Building')}    EventFold Studio . Kalam Notes . Jarvis AI`,
  `  ${green('Stack')}       React . Next.js . TypeScript . Firebase . Python`,
  `  ${orange('Open to')}     SWE Internships . Collaborations . Freelance`,
  '',
  divider,
  '',
  `  ${dim('"I didn\'t wait for the right tool. I built it."')}`,
  '',
].join('\n');

console.log('\n' + header + '\n');

console.log(
  boxen(card, {
    padding:        { top: 0, bottom: 0, left: 1, right: 3 },
    margin:         { top: 0, bottom: 1, left: 2, right: 2 },
    borderStyle:    'round',
    borderColor:    '#58a6ff',
    title:          blue.bold('  Developer Card  '),
    titleAlignment: 'center',
  })
);

console.log(
  '  ' + dim('Liked what you saw? ') +
  blue('github.com/DilpreetSinghVerma') +
  dim(' -- drop a star on a repo!\n')
);