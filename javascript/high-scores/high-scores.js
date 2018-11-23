export class HighScores {

constructor(scores) {
  this.scores = scores
}

get latest() {
  return this.scores[this.scores.length -1]
}

get highest() {
  let highest = 0
  this.scores.forEach( score => {
    if (score > highest) {
      highest = score
    }
  })
  return highest
}

get top() {
  let topScores = this.scores.sort((a, b) => (b - a));
  return topScores.slice(0,3)
}

get report() {
  if (this.latest === this.highest) {
    return `Your latest score was ${this.latest}. That's your personal best!`
  } else if (this.latest <= this.highest) {
    let diff = this.highest - this.Latest;
    return `Your latest score was ${this.latest}. That's ${this.highest - this.latest} short of your personal best!`
  }
}


}
