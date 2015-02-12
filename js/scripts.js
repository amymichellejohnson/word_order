var wordOrder = function(string) {
  var words = string.split(" ");
  var results = {};

  words.forEach(function(word) {
    word = word.toLowerCase();
    var re = /\w+/;
    word = (re.exec(word));

    if (results[word] > 0) {
      results[word] += 1;
    } else {
      results[word] = 1;
    }

  });

  var keys = Object.keys(results);
  var lengthOfKeys = keys.length;
  var sortedResults = {};

  for(var index = 0; index < lengthOfKeys; index++) {
    var winner = keys[0];
    keys.forEach(function(key) {
      if (results[key] > results[winner]) {
        winner = key;
      }
    });
    // debugger;
    sortedResults[winner] = results[winner];
    keys.splice(keys.indexOf(winner), 1)
    console.log(sortedResults);
  }

  return sortedResults;
};
