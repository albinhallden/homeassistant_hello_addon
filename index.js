const { setTimeout } = require('timers/promises');

const main = async () => {
    while (true) {
        console.log(`Hello world! Time is now ${new Date().toUTCString()}`);
        await setTimeout(5000);
    }
}

main();