'use strict';

var Nightmare = require('nightmare');
var should = require('chai').should();


describe('Youtube Slowmoguys', function() {
  this.timeout(20000);
  it('should send me to the slowmoguys youtube page', function(done) {
    var nightmare = new Nightmare({
      show: true
    });
    nightmare
      .goto('http://youtube.com')
      .type('#masthead-search-term', 'Slow Mo Guys')
      .click('#search-btn')
      .wait('.yt-uix-sessionlink')
      .click('.yt-uix-sessionlink')
      .evaluate(function() {
        return document.title;
      })
      .end()
      .then(function(result) {
        result.should.equal('YouTube');
        done();
      })
      .catch(function(err) {
        console.error(err);
      });
  });

});
