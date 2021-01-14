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

const exEmitter = new EventEmitter();

exEmitter.on("registered", () => {
  // Send welcome email to user
  console.log("user saved to db");
});

exEmitter.on("registered", () => {
  // Send ticket gift
  console.log("gift sent");
});

exEmitter.on("orderPurchased", (payload) => {
  // Send generate invoice and mail ti user
  console.log("Generated receipt of ", payload);
});

// register.js

// register logic.

exEmitter.emit("orderPurchased", "JsBoy")
exEmitter.emit("registered");
