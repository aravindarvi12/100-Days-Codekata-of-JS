/*The area of an equilateral triangle is ¼(√3a2) where "a" represents a side of the triangle. You are provided with the side "a". Find the area of the equilateral triangle.


Input Description:
The side of an equilateral triangle is provided as the input.

Output Description:
Find the area of the equilateral triangle and print the answer up to 2 decimal places after rounding off.

Sample Input :
20
Sample Output :
173.21 */

let triangle = 20;
let area = (Math.sqrt(3) * Math.pow(20, 2)) / 4;
console.log(area);
console.log(area.toFixed(2));
