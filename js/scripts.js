var wordOrder = function(string) {
  var words = string.split(" ");
  words.reverse();
  var results = {};

  words.forEach(function(word) {

    // var re = /\w+/;
    // word = re.exec(word);

    if (results[word] > 0) {
      results[word] += 1;
    } else {
      results[word] = 1;
    }

  });

  return results;
};
