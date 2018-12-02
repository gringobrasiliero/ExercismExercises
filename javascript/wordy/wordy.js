
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
    let operWords = ["plus", "minus", "multiplied", "divided"]
    for (var i = 0; i < this.tokens.length; i++ ){
      var isnum = /^\d+$/.test(this.tokens[i]);
      if(operWords.includes(this.tokens[i])){
        operators.push(numberOperators[this.tokens[i]])
      }else{
        numbers.push(this.tokens[i])
      }

    }

    var result = numbers.reduce(function(arr, v, i) {
        return arr.concat(v, operators[i]);
    }, []);

    result.pop()
    result = result.join("")
    return eval(result)
  }
}



class ArgumentError extends Error {}

module.exports = { WordProblem, ArgumentError }
