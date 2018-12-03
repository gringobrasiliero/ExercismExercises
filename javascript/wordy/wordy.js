
const numberOperators = Object.freeze({
  "plus":       "+",
  "minus":      "-",
  "multiplied": "*",
  "divided":    "/"
});


const ignored = /^what$|^is$|^by$/i;


class WordProblem {
  constructor(question){
    this.tokens = question
    .replace(/[,.?!]/g, "")
    .split(" ")
    .filter(word => !ignored.test(word))
  }

  answer() {
    let numbers = []
    let operators = []
    for (var i = 0; i < this.tokens.length; i++ ){
      let word = this.tokens[i];
      var isnum = /^\d+$/.test(word);
      if(word in numberOperators){
        operators.push(numberOperators[word])
      }else{
        numbers.push(word)
      }

    }
    if (operators.length == 0){
      throw new ArgumentError()
    }
    var result = numbers.reduce(function(arr, v, i) {
        return arr.concat(v, operators[i]);
    }, []);


    result = result.join(" ")
    return eval(result)
  }
}



class ArgumentError extends Error {}

module.exports = { WordProblem, ArgumentError }
