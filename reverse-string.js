//declaration of strings

let string = "";

export const reverseString = (str) => {
 // split method to separate the characters, returns new []
 let splitString = str.split(string);

 //reverse the []
 let reverseArray = splitString.reverse();

 //join again  the characters
 let joinThem = reverseArray.join(string);

 return joinThem;
};

// const reverseStrin = (str) => str.split("").reverse().join("");




