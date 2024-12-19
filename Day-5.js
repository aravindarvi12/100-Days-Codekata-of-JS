/*You are given three numbers A, B & C. Print the largest amongst these three numbers.


Input Description:
Three numbers are provided to you.

Output Description:
Find and print the largest among the three

Sample Input :
1
2
3
Sample Output :
3*/

const A = 1;
const B = 2;
const C = 3;

console.log();
//Using If..else

if (A > B && A > C) {
  console.log("Largest Number is " + A);
} else if (B > A && B > C) {
  console.log("Largest Number is " + B);
} else {
  console.log("Largest number is " + C);
}

//Using iteration (for loop)

const a = [1, 2, 3];
let largest = A[0];

for (let i = 1; i < a.length; i++) {
  largest = Math.max(largest, a[i]);
}
console.log(largest);
