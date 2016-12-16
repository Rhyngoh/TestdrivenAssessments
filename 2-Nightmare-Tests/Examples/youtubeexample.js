var Nightmare = require('nightmare');
var should = require('chai').should();
describe("Youtube Slowmoguys", function() {
  it('should send me to the slowmoguys youtube page', function() {
  Nightmare()
    .goto('http://youtube.com')
    .type('#masthead-search-term', 'Slow Mo Guys')
    .click('#search-btn')
    .wait('#main')
    .click('.yt-uix-sessionlink')
    .evaluate(function () {
      return document.querySelector('#main .searchCenterMiddle li a').href
    })
    .end()
    .then(function (result) {
      console.log(result)
    })
    .catch(function (error) {
      console.error('Search failed:', error);
    });
  });
});
