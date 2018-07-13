var events = require('events');
var eventEmitter = new events.EventEmitter();

// ?听器 #1
var listener1 = function listener1() {
   console.log('?听器 listener1 ?行。');
}

// ?听器 #2
var listener2 = function listener2() {
  console.log('?听器 listener2 ?行。');
}

// ?定 connection 事件，?理函数? listener1 
eventEmitter.addListener('connection', listener1);

// ?定 connection 事件，?理函数? listener2
eventEmitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " 个?听器?听?接事件。");

// ?理 connection 事件 
eventEmitter.emit('connection');

// 移除??定的 listener1 函数
eventEmitter.removeListener('connection', listener1);
console.log("listener1 不再受?听。");

// 触??接事件
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " 个?听器?听?接事件。");

console.log("程序?行完?。");s