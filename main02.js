// ���� events ��?
var events = require('events');
// ?�� eventEmitter ?��
var eventEmitter = new events.EventEmitter();

// data_received 
var connectHandler = function connected() {
   console.log('STEP01_complete connection');
  
   // �G? data_received ���� 
   eventEmitter.emit('data_received');
}

// ?�� connection ����?������
eventEmitter.on('connection', connectHandler);
 
// �g�p��������?�� data_received ����
eventEmitter.on('data_received', function(){
   console.log('STEP02_complete  data_received');
});

// connection ���� 
eventEmitter.emit('connection');

console.log("STEP03 END");