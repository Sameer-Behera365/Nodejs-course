const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', function(a, b) {
  console.log(a, b, this, this === myEmitter);
});


myEmitter.emit('event', 'a', 'b');



  // Prints:
  //   a b MyEmitter {
  //     _events: [Object: null prototype] { event: [Function (anonymous)] },
  //     _eventsCount: 1,
  //     _maxListeners: undefined,
  //     Symbol(shapeMode): false,
  //     Symbol(kCapture): false
  //   } true





//   explanation:-
// this inside the event listener function
// In this case, this refers to the instance of the emitter that fired the event, which is myEmitter.
// That’s why you see an object printed that starts with MyEmitter { ... } — it’s the internal state of the emitter.

// this === myEmitter
// This checks if the this inside the callback is the same as the myEmitter object. It prints true —









/*  what does the mean of class MyEmitter extends EventEmitter {}                  


important:-    
✅ 1. Yes, it gives a custom name (like MyEmitter)
This makes your code more readable and domain-specific.



✅ 2. But the real power is: you can add your own custom methods or properties
Example:

class ChatApp extends EventEmitter {
  sendMessage(msg) {
    console.log('Sending message:', msg);
    this.emit('message', msg);           //this refers to the current instance of the class — in this case, the particular ChatApp object (app).

  }
}


Now you can use:
const app = new ChatApp();
app.on('message', (msg) => console.log('Got:', msg));
app.sendMessage('Hello');



op:-
Sending message: Hello
Got: Hello


*/