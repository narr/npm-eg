var expect = require('chai').expect;
var npmEg = require('../index');

describe('npm-eg', function () {
  it('should return string', function () {
    expect(npmEg()).to.equal('npm-module-example');
  });
});
