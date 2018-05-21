const callbacks = {
  next: function next(data) { console.log(data); },
  error: function error(err) { console.error(err); },
  complete: function complete() { console.log('done'); }
};

function someOperation(callbacks) {
  [10, 20, 30].forEach(callbacks.next);
  callbacks.complete();
}

someOperation(callbacks);