const path = require('path');

const tests: Array<{ name: string, fn: () => void }> = [];

function test(name: string, fn: () => void): void {
    tests.push({ name, fn });
}

global.test = test;

function run() {
    console.log('Collected', tests.length, 'tests');
    tests.forEach(({ name, fn }) => {
        try {
            fn();
            console.log('OK:', name);
        } catch (error) {
            console.log('FAILED:', name);
            if(error instanceof Error) {
                console.log(error.stack);
            }
        }
    });
}

process.argv.slice(2).forEach(fileName => {
    require(path.resolve(__dirname, '..', fileName));
});

run();
