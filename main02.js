// ˆø“ü events –Í?
var events = require('events');
// ?Œš eventEmitter ?Û
var eventEmitter = new events.EventEmitter();

// data_received 
var connectHandler = function connected() {
   console.log('STEP01_complete connection');
  
   // G? data_received –Œ 
   eventEmitter.emit('data_received');
}

// ?’è connection –Œ?—’ö˜
eventEmitter.on('connection', connectHandler);
 
// g—p“½–¼”Ÿ”?’è data_received –Œ
eventEmitter.on('data_received', function(){
   console.log('STEP02_complete  data_received');
});

// connection –Œ 
eventEmitter.emit('connection');

console.log("STEP03 END");