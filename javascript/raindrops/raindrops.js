const Raindrops = () => ({
  convert: (n) => {
    let solution = "";
    if (n % 3 === 0){
      solution += "Pling";
    }
    if (n% 5 === 0){
      solution += "Plang";
    }
    if (n % 7 === 0) {
      solution += "Plong";
    }
    return solution === '' ? n.toString() : solution;
  }
  
})


export default Raindrops
