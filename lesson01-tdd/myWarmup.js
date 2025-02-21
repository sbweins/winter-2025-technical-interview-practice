// 1. Given an integer, n,  between 3 and 100, return a line with n '*' characters

// 5 => '*****'
// 12 => '************'
// 3 => "***"

const aster = (n) => {
  let str = "";
  for (let i = 0; i < n; i++) {
    str += "*";
  }
  return str;
};

// const aster = (n) => {
//   for (let i = 0; i < n; i++) {
//     return "*".repeat(n);
//   }
// };

console.log(aster(1));
console.log(aster(5));
console.log(aster(7));

// 2. Given an integer, n, between 3 and 100,
// return a line n characters long where the first and last character are '*' and all the middle characters are a space.

// 5 => '*   *'
// 12 => '*          *'

const asterFirstLast = (n) => {
  let str = "";
  for (let i = 0; i < n; i++) {
    if (i === 0 || i === n - 1) {
      str += "*";
    } else {
      str += " ";
    }
  }
  return str;
};

console.log(asterFirstLast(3));
console.log(asterFirstLast(5));
console.log(asterFirstLast(10));

// 3. Given two integers, n and m, create n lines of m characters. The first and last line should be made of all '*' and all the middle lines should start and end with '*' and have all spaces in the middle

// 5,5 => *****
//        *   *
//        *   *
//        *   *
//        *****

const asterBox = (n, m) => {
  // Input: Two integers n and m representing rows and columns
  // Output: The first and last rows will all be "*" as characters with n(rows) repeating m (columns) times (amount of asterisks)
  // The middle rows will start with an asterisk "*" filled with spaces in between represented by the # of columns minus the two first and last asterisks (m - 2)

  // Problem: Given parameters return a box filled with asterisks that is filled with empty spaces in the middle
  // Solution:
  // Create a box variable set as an empty string ""
  // Loop over the rows represented by the given integer n
  // Create a first and last row variable filled with asterisks repeating m (column) times
  // Check if index is 0 or last index  of rows and insert firstLastRow into box
  // Else create/insert middleRow variable into box repeating m(row) times minus 2 (the first and last asterisks)
  // Return the box

  let box = "";

  for (let i = 0; i < n; i++) {
    // loop over every row
    let firstLastRow = "*".repeat(m); // m amount of columns
    if (i === 0) {
      box += firstLastRow + "\n";
    } else if (i === n - 1) {
      box += firstLastRow;
    } else {
      let middleRows = "*" + " ".repeat(m - 2) + "*" + "\n";
      box += middleRows;
    }
  }
  console.log(box);
  return box;
};

asterBox(5, 5);
asterBox(10, 5);
asterBox(5, 25);

// Console.log the result of each of the above functions to test them. Run your file with node warmup.js and check the terminal for the correct output.

// let string = "The quick brown fox jumped over the lazy dogs.";

// console.log(string.charAt(4), "q");
// console.log(string.substring(4, 10), "quick");
// console.log(string.slice(0, 3), "The");
// console.log(string.replace("b", "B"));
// console.log(string.split(" ", "[The, quick brown...]"));
// console.log(string.split("e"));

module.exports = { aster, asterFirstLast, asterBox };
