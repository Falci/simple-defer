# Simple Defer

A simple promise defer.

## Usage

```
var Defer = require('simple-defer');

var deferred = new Defer();

deferred.promise.then(function(data) {
    document.body.innerHTML += '<p>Resolved: ' + data + '</p>';
});

document.body.innerHTML = '<p>Deferred created.</p>';

setTimeout(function() {
    deferred.resolve(123);
}, 2000);
```
