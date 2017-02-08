var twit = require('twit');
var keys = require('./keys.js');
var Twttr = new twit(keys);
var params = {q:'rescue dogs',
              result_type:'recent',
              count:40};

Twttr.get('search/tweets', params, function(err, data, response){
  function random(tweets) {
      return tweets[Math.floor(Math.random()*tweets.length)].text;
  }
  var tweets = data.statuses;
  var random = random(tweets);
  console.log(random);
  //var random = random(tweets);
  //console.log(random);
})

// grab & retweet as soon as program is running...
retweet();
//random number between 1 and two hours

// retweet in every 50 minutes
setInterval(retweet, 3000000);

// OR adoption puppy OR adopt dog OR dog needs a home
