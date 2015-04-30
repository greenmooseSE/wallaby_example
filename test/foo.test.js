var Foo = require('../src/foo');
var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
chai.use(require('sinon-chai'));

describe('hi', function() {
  var clock, foo;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    foo = new Foo();
  });

  afterEach(function() {
    clock.reset();
    foo.stop();
  });

  it('asdf', function(done) {
    var errHandler = sinon.spy();
    var handler = sinon.stub().throws(new Error());
    foo.interval(handler, 60000);
    foo.start(errHandler);

    clock.tick(60000);

    process.nextTick(function() {
      expect(errHandler).to.have.been.calledOnce;
      done();
    });
  });
});