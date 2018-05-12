const commands = {
  setA: function(value) {
    return this.setValue('@a', value);
  },
  setB: function(value) {
    return this.setValue('@b', value);
  },
  pressAdd: function() {
    this.api.pause(1000);
    return this.click('@add');
  },
  checkResult: function(expectedResult) {
    this.assert.containsText('@result', expectedResult);
    return this;
  }
};

module.exports = {
  url: `http://localhost:${process.env.TEST_APP_PORT}`,
  elements: {
    body: 'body',
    a: '#a',
    b: '#b',
    add: '#add',
    result: '#result',
    searchBar: 'input[name="p"]'
  },
  commands: [commands]
};