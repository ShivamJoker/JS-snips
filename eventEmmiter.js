/** Simple pub/sub event emitter  */

class EventEmitter {
  subscribers = {};
}

EventEmitter.prototype.on = function (eventName, fn) {
  if (Array.isArray(this.subscribers[eventName])) {
  } else {
    this.subscribers[eventName] = [];
  }
  this.subscribers[eventName].push(fn);
};

EventEmitter.prototype.emit = function (eventName, payload) {
  this.subscribers[eventName].forEach((fn) => fn(payload));
};

EventEmitter.prototype.removeListener = function (eventName, fn) {
  this.subscribers[eventName] = this.subscribers[eventName].filter((_fn) => _fn !== fn);
};

const exEmitter = new EventEmitter();

exEmitter.on("registered", () => {
  // Send welcome email to user
  console.log("user saved to db");
});

exEmitter.on("registered", () => {
  // Send ticket gift
  console.log("gift sent");
});

function generateReceipt(payload) {
 // Send generate invoice and mail ti user
 console.log("Generated receipt of ", payload);
}

exEmitter.on("orderPurchased",generateReceipt);

// register.js
// Remove listener
exEmitter.removeListener("orderPurchased", generateReceipt);

// register logic.
exEmitter.emit("orderPurchased", "JsBoy")
exEmitter.emit("registered");
