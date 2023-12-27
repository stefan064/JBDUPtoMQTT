const yargs = require('yargs');

const argv = yargs
    .option('serialport', {
        alias: 's',
        description: 'Serial port your BMS is connected to (e.g -s /dev/ttyUSB0)',
        type: 'string',
    })
    .option('baudrate', {
        alias: 'b',
        description: 'The baud rate to use for serial communications, defaults to 9600 (e.g -b 14400)',
        type: 'integer',
        default: 9600
    })
    .option('mqttbroker', {
        alias: 'm',
        description: 'The address of your MQTT Broker (e.g -m 192.168.0.10)',
        type: 'string',
    })
    .option('mqttuser', {
        alias: 'u',
        description: 'The username for your MQTT Broker (e.g -u mqttUser)',
        type: 'string',
    })
    .option('mqttpass', {
        alias: 'p',
        description: 'The password for your MQTT Broker (e.g -p mqttPass)',
        type: 'string',
    })
    .option('mqtttopic', {
        alias: 't',
        description: 'MQTT topic to publish to defaults to \'NodeJBD\' (e.g -t MyTopic)',
        type: 'string',
        default: 'NodeJBD'
    })
    .option('pollinginterval', {
        alias: 'i',
        description: 'How frequently to poll the controller in seconds, defaults to 10 (e.g -i 60)',
        type: 'integer',
        default: 10
    })
    .option('loglevel', {
        alias: 'l',
        description: 'Logging level to use, values are trace, debug, info, warn, error, fatal. Defaults to error',
        type: 'string',
        default: 'info'
    })
    .option('numberofbms', {
        alias: 'n',
        description: 'Number of interconnected bms units to poll. Applies to JBD UP series address IDs as per DIP switches. Each poll gets data from a consecutive addresses starting from zero.',
        type: 'integer',
        default: '1'
    })
    .choices('loglevel', ['trace', 'debug', 'info', 'warn', 'error', 'fatal'])
    .help()
    .alias('help', 'h')
    .epilogue('For more information, check out the project repository at https://github.com/mickwheelz/NodeJBD')
    .env('NODEJBD')
    .demandOption('serialport', 'You must specify a serial port')
    .wrap(yargs.terminalWidth())
    .argv;

module.exports = {
    args: argv
};
