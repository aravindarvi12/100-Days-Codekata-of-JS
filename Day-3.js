/*You are given a number A in Kilometers. Convert this into B: Meters and C: Centi-Metres.


Input Description:
A number "A" representing some distance in kilometer is provided to you as the input.

Output Description:
Convert and print this value in meters and centimeters.

Sample Input :
2
Sample Output :
2000
200000*/

let kilometer = 2;

let meter = kilometer * 1000; //1km = 1000meters
let centimeter = kilometer * 100000; // 1km = 100000 centi-meters

console.log(meter);
console.log(centimeter);
