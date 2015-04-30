var _ = require('lodash');
var Promise = require('bluebird');

function Foo() {
  this.intervals = [];
}

Foo.prototype.interval = function(handler, time) {
  this.intervals.push({handler: handler, time: time});
};

Foo.prototype.start = function(errorHandler) {
  _.each(this.intervals, function(i) {
    i.interval = setInterval(function() {
       return Promise.method(i.handler)()
         .catch(function(err) {
           if(typeof errorHandler === 'function'){
             errorHandler(err);
           }
         });
      }, i.time);
  });
};

Foo.prototype.stop = function() {
  _.each(this.intervals, function(i) {
    if(i.interval) {
      clearTimeout(i.interval);
    }
  });
};

exports = module.exports = Foo;