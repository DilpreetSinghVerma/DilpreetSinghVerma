#!/usr/bin/env node

'use strict';

// Force UTF-8 output on Windows
if (process.platform === 'win32') {
  try { require('child_process').execSync('chcp 65001', { stdio: 'ignore' }); } catch (_) {}
}

const chalk = require('chalk');
const boxen = require('boxen');
const gradient = require('gradient-string');
const inquirer = require('inquirer');
const open = require('open');

// Colors
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

function showCard() {
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
      margin:         { top: 0, bottom: 0, left: 2, right: 2 },
      borderStyle:    'round',
      borderColor:    '#58a6ff',
      title:          blue.bold('  Developer Card  '),
      titleAlignment: 'center',
    })
  );
}

function waitForKey() {
  return new Promise((resolve) => {
    console.log(chalk.dim('\nPress any key to return to menu...'));
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.once('data', () => {
      process.stdin.setRawMode(false);
      process.stdin.pause();
      resolve();
    });
  });
}

async function projectsMenu() {
  console.clear();
  console.log(gradient(['#58a6ff', '#bc8cff'])('\n  📁  Projects Portfolio\n'));
  
  const choices = [
    { name: '📖  EventFold Studio (3D Flipbooks SaaS)', value: 'eventfold' },
    { name: '📝  Kalam Notes (Phonetic Transliteration App)', value: 'kalam' },
    { name: '🤖  Jarvis AI (Voice Assistant with Sci-Fi HUD)', value: 'jarvis' },
    { name: '🔙  Back to Main Menu', value: 'back' }
  ];
  
  const ans = await inquirer.prompt([
    {
      type: 'list',
      name: 'project',
      message: 'Select a project to inspect:',
      choices
    }
  ]);
  
  if (ans.project === 'back') {
    return;
  }
  
  console.clear();
  if (ans.project === 'eventfold') {
    console.log('\n' + boxen(
      chalk.bold.cyan('EventFold Studio') + '\n\n' +
      'SaaS platform that converts static photos into interactive 3D digital flipbooks.\n' +
      'Ideal for wedding and event photographers in India.\n\n' +
      chalk.dim('Stack: React, Next.js, Neon DB, Drizzle, Cloudinary'),
      { padding: 1, borderStyle: 'round', borderColor: 'cyan' }
    ) + '\n');
    
    const action = await inquirer.prompt([{
      type: 'list',
      name: 'act',
      message: 'Actions:',
      choices: [
        { name: '🌐  Open Live Website', value: 'web' },
        { name: '🐙  Open GitHub Repo', value: 'github' },
        { name: '🔙  Back', value: 'back' }
      ]
    }]);
    if (action.act === 'web') await open('https://eventfoldstudio.com');
    if (action.act === 'github') await open('https://github.com/DilpreetSinghVerma/EventFold');
  } else if (ans.project === 'kalam') {
    console.log('\n' + boxen(
      chalk.bold.yellow('Kalam Notes') + '\n\n' +
      'Cross-platform writing app with real-time phonetic Punjabi/Hindi transliteration.\n' +
      'Supports auto Indicator transliteration, real-time Firebase sync, and offline draft queue.\n\n' +
      chalk.dim('Stack: Electron, React Native, Expo, React, Firebase'),
      { padding: 1, borderStyle: 'round', borderColor: 'yellow' }
    ) + '\n');
    
    const action = await inquirer.prompt([{
      type: 'list',
      name: 'act',
      message: 'Actions:',
      choices: [
        { name: '🐙  Open Desktop (Electron) GitHub', value: 'desktop' },
        { name: '🐙  Open Mobile (React Native) GitHub', value: 'mobile' },
        { name: '🔙  Back', value: 'back' }
      ]
    }]);
    if (action.act === 'desktop') await open('https://github.com/DilpreetSinghVerma/kalam-notes');
    if (action.act === 'mobile') await open('https://github.com/DilpreetSinghVerma/kalam-mobile-Notes');
  } else if (ans.project === 'jarvis') {
    console.log('\n' + boxen(
      chalk.bold.blue('Jarvis AI Assistant') + '\n\n' +
      'Voice-activated smart desktop assistant with interactive HUD UI,\n' +
      'OpenCV/MediaPipe face biometric login, and hybrid Gemini 2.0/Llama 3 brains.\n\n' +
      chalk.dim('Stack: Python, Gemini 2.0, Llama 3 (Ollama), OpenCV, MediaPipe'),
      { padding: 1, borderStyle: 'round', borderColor: 'blue' }
    ) + '\n');
    
    const action = await inquirer.prompt([{
      type: 'list',
      name: 'act',
      message: 'Actions:',
      choices: [
        { name: '🐙  Open GitHub Repo', value: 'github' },
        { name: '🔙  Back', value: 'back' }
      ]
    }]);
    if (action.act === 'github') await open('https://github.com/DilpreetSinghVerma/Jarvis-0.2');
  }
  
  await projectsMenu();
}

function playSnake() {
  return new Promise((resolve) => {
    console.clear();
    
    const width = 20;
    const height = 12;
    let snake = [
      { x: 10, y: 6 },
      { x: 9, y: 6 },
      { x: 8, y: 6 }
    ];
    let dir = 'right';
    let nextDir = 'right';
    let score = 0;
    let gameOver = false;
    
    let food = { x: 0, y: 0 };
    function spawnFood() {
      while (true) {
        const x = Math.floor(Math.random() * (width - 2)) + 1;
        const y = Math.floor(Math.random() * (height - 2)) + 1;
        if (!snake.some(segment => segment.x === x && segment.y === y)) {
          food = { x, y };
          break;
        }
      }
    }
    spawnFood();
    
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    
    const onData = (key) => {
      if (key === '\u001b[A' || key === 'w' || key === 'W') {
        if (dir !== 'down') nextDir = 'up';
      } else if (key === '\u001b[B' || key === 's' || key === 'S') {
        if (dir !== 'up') nextDir = 'down';
      } else if (key === '\u001b[D' || key === 'a' || key === 'A') {
        if (dir !== 'right') nextDir = 'left';
      } else if (key === '\u001b[C' || key === 'd' || key === 'D') {
        if (dir !== 'left') nextDir = 'right';
      } else if (key === '\u001b' || key === 'q' || key === 'Q' || key === '\u0003') {
        cleanup();
      }
    };
    process.stdin.on('data', onData);
    
    function cleanup() {
      clearInterval(gameLoop);
      process.stdin.removeListener('data', onData);
      process.stdin.removeListener('data', handleRetry);
      process.stdin.setRawMode(false);
      process.stdin.pause();
      process.stdout.write('\x1B[?25h');
      console.clear();
      resolve();
    }
    
    function draw() {
      let output = '';
      
      output += chalk.gray('╔' + '══'.repeat(width) + '╗\n');
      
      for (let y = 0; y < height; y++) {
        output += chalk.gray('║');
        for (let x = 0; x < width; x++) {
          if (x === 0 || x === width - 1 || y === 0 || y === height - 1) {
            output += chalk.gray('██');
          } else if (snake[0].x === x && snake[0].y === y) {
            output += chalk.green.bold('██');
          } else if (snake.some((seg, idx) => idx > 0 && seg.x === x && seg.y === y)) {
            output += chalk.green('██');
          } else if (food.x === x && food.y === y) {
            output += '🍎';
          } else {
            output += '  ';
          }
        }
        output += chalk.gray('║\n');
      }
      
      output += chalk.gray('╚' + '══'.repeat(width) + '╝\n');
      output += `  ${chalk.bold.yellow('Score: ' + score)}  |  Controls: ${chalk.cyan('WASD')} / ${chalk.cyan('Arrows')}  |  Press ${chalk.red('ESC')} to Quit\n`;
      
      if (gameOver) {
        output += `\n  ${chalk.bold.red('GAME OVER')}  -  Press ${chalk.bold.green('ENTER')} to retry, or ${chalk.bold.red('ESC')} to exit\n`;
      }
      
      process.stdout.write('\x1B[H' + output);
    }
    
    process.stdout.write('\x1B[?25l');
    console.clear();
    
    const gameLoop = setInterval(() => {
      if (gameOver) return;
      
      dir = nextDir;
      let head = { ...snake[0] };
      
      if (dir === 'up') head.y--;
      if (dir === 'down') head.y++;
      if (dir === 'left') head.x--;
      if (dir === 'right') head.x++;
      
      if (head.x <= 0 || head.x >= width - 1 || head.y <= 0 || head.y >= height - 1) {
        gameOver = true;
        draw();
        return;
      }
      
      if (snake.some(seg => seg.x === head.x && seg.y === head.y)) {
        gameOver = true;
        draw();
        return;
      }
      
      snake.unshift(head);
      
      if (head.x === food.x && head.y === food.y) {
        score += 10;
        spawnFood();
      } else {
        snake.pop();
      }
      
      draw();
    }, 150);
    
    const handleRetry = (key) => {
      if (gameOver && (key === '\r' || key === '\n')) {
        snake = [
          { x: 10, y: 6 },
          { x: 9, y: 6 },
          { x: 8, y: 6 }
        ];
        dir = 'right';
        nextDir = 'right';
        score = 0;
        gameOver = false;
        spawnFood();
        console.clear();
      }
    };
    process.stdin.on('data', handleRetry);
  });
}

async function mainMenu() {
  console.clear();
  showCard();
  console.log('\n');
  
  const choices = [
    { name: '📁  Browse Projects Portfolio', value: 'projects' },
    { name: '✉️   Send Email', value: 'email' },
    { name: '💼  Connect on LinkedIn', value: 'linkedin' },
    { name: '🎮  Play CLI Snake Game', value: 'game' },
    { name: '🚪  Exit', value: 'exit' }
  ];
  
  const ans = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices
    }
  ]);
  
  switch (ans.action) {
    case 'projects':
      await projectsMenu();
      await mainMenu();
      break;
    case 'email':
      console.log(chalk.green('\nOpening email client...'));
      await open('mailto:dilpreetsinghverma@gmail.com');
      await waitForKey();
      await mainMenu();
      break;
    case 'linkedin':
      console.log(chalk.blue('\nOpening LinkedIn profile...'));
      await open('https://linkedin.com/in/dilpreet-singh-709b35310');
      await waitForKey();
      await mainMenu();
      break;
    case 'game':
      await playSnake();
      await mainMenu();
      break;
    case 'exit':
      console.log(chalk.yellow('\nThanks for stopping by! Keep building. 🚀\n'));
      process.exit(0);
  }
}

mainMenu().catch(err => {
  console.error(err);
  process.exit(1);
});