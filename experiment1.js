const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('greet', (name) => {
    console.log(`welcome, ${name}`);
});

myEmitter.on('text', (code) => {
    console.log(`exit event receives. Code: ${code}`);
});

myEmitter.emit('greet', 'B.Tech students');
myEmitter.emit('text', 0);
