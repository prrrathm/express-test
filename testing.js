console.log('HELLO WORLD')
global.luckyNum = 23
console.log('Platform :'+process.platform)
console.log('User :'+process.env.USER)


// EXIT EVENT
process.on('exit', function(){
    console.log('CLOSING RUNTIME')
})

// CUSTOM EVENT
const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.on('lunch',()=>{
    console.log('CUSTOM EVENT CREATED')
})
eventEmitter.emit('lunch')


// READING FILES
const {readFile, readFileSync} = require('fs')
const txt = readFileSync('./hello.txt','utf8')
console.log(txt)

readFile('./hello.txt','utf8', (err,txt)=>{
    console.log(txt)
})

// USING PROMISES TO READ FILE
// const { readFile } = require('fs').promises
// async function hello(){
//     const txt2 = await readFile('./hello.txt','utf8')
//     console.log(txt2)
// }
// hello()