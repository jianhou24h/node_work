var events = require('events');
var eventEmitter = new events.EventEmitter();

// ?�ߊ� #1
var listener1 = function listener1() {
   console.log('?�ߊ� listener1 ?�s�B');
}

// ?�ߊ� #2
var listener2 = function listener2() {
  console.log('?�ߊ� listener2 ?�s�B');
}

// ?�� connection �����C?������? listener1 
eventEmitter.addListener('connection', listener1);

// ?�� connection �����C?������? listener2
eventEmitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " ��?�ߊ�?��?�ڎ����B");

// ?�� connection ���� 
eventEmitter.emit('connection');

// �ڏ�??��I listener1 ����
eventEmitter.removeListener('connection', listener1);
console.log("listener1 �s�Ď�?�߁B");

// �G??�ڎ���
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " ��?�ߊ�?��?�ڎ����B");

console.log("����?�s��?�B");s