#!/usr/bin/env node
const cli = require('./cli');
const jbd = require('./jbd');
const logger = require('./logger');

async function main() {

  logger.info('Starting NodeJBD...');
  try {

    const args = cli.args;
    logger.trace(args, 'With arguments...')

    setInterval(
      async function() {
        //send requests, response handled by eventlistener
          for (let i = 0; i < args.numberofbms; i++) {
            await jbd.getRegister(i, 0x03);
            await sleep(500); //give time for bms to respond between requests
            await jbd.getRegister(i, 0x04);
            await sleep(500);
          }
      }, 
      args.pollinginterval * 1000
    );
  }
  catch(e) {
    logger.error(e);
    process.exit(1);
  }

}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

main();
