var expect = require('expect.js')
var Legend = require('./');

describe('legend', function(){

  e1 = {};
  e2 = {};

  e1.text = "test 1"
  e2.text = "test 2"

  it('should work', function(){
    var items = [
      {key: e1, value: "icon 1"},
      {key: e2, value: "icon 2"}
    ]

    var config = {
      title: "legend test",
      items: items
    }

    led = new Legend(config)
    expect(led.className).to.eql("legend");
  })
});

