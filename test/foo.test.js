var Foo = require('../src/foo');
var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
chai.use(require('sinon-chai'));

describe('hi', function() {
  var clock, foo;

  async function sleep(ms) {
    await _sleep(ms);
  }

  function _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    foo = new Foo();
  });

  afterEach(function() {
    clock.reset();
    foo.stop();
  });

  it("can perf-measure await", async () => {
      await sleep(200); /*?.*/
      console.log('test'); /*?.*/
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