describe("wordOrder", function(){
  it("returns the word entered with its number of occurrences", function() {
    expect(wordOrder("hello")).to.eql({"hello": 1});
  });

  it("returns multiple words with the number of occurrences", function() {
    expect(wordOrder("hello world world")).to.eql({"hello": 1, "world": 2});
  });

  it("returns multiple words with the number of occurrences sorted by number of occurrences", function() {
    expect(wordOrder("oregon world hellooo oregon oregon")).to.eql({"hellooo": 1, "world": 1, "oregon": 3});
  });

  it("handles capitalization differences", function() {
    expect(wordOrder("Oregon world hellooo oregon oregon")).to.eql({"hellooo": 1, "world": 1, "oregon": 3});
  });
});
