var Beer = {
  verse: function(num) {
    return verse(num);
  },

  sing: function(start, end) {
    var end = end === undefined ? 0 : end;
    var result = "";
    for (var i = start; i > end - 1; i--) {
      var verse = i === end ? this.verse(i) : this.verse(i) + "\n"
      result += verse;
    }
    return result;
  }
}

function origVerse(num) {
  var oneLess = num - 1;
  if (oneLess === 1) {
    return num + " bottles of beer on the wall, " + num + " bottles of beer.\nTake one down and pass it around, " + oneLess + " bottle of beer on the wall.\n"
  } else {
    return num + " bottles of beer on the wall, " + num + " bottles of beer.\nTake one down and pass it around, " + oneLess + " bottles of beer on the wall.\n"
  }
}

function oneBeerVerse(num) {
  return num + " bottle of beer on the wall, " + num + " bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n"
}

function noBeersVerse(num) {
  return "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n"
}

function verse(num) {
  if (num === 0) {
    return noBeersVerse(num);
  } else if (num === 1) {
    return oneBeerVerse(num);
  } else {
    return origVerse(num);
  }
}

module.exports = Beer;
