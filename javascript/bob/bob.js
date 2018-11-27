/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
if (message === message.toUpperCase() && message.includes("?",0)) {
  return "Calm down, I know what I\'m doing!"
}

else if (message === message.toUpperCase() && message.match(/[a-z]/i)) {
  return 'Whoa, chill out!'
}else if (message.includes("?", 0)) {
  return "Sure."
} else{
  return "Whatever."

}

};
