'use strict';

class Defer {
  constructor () {
    let deferred = {},
      promise = new Promise(function(resolve, reject) {
          deferred.resolve = resolve;
          deferred.reject  = reject;
      });

    deferred.promise = promise;
    this.deferred = deferred;
  }

  resolve(...args) {
    return this.deferred.resolve(...args);
  }

  reject(...args) {
    return this.deferred.reject(...args);
  }

  promise() {
    return this.deferred.promise;
  }
}

module.exports = Defer;
