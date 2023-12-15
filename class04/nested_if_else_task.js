let a = 5;
let b = -3;
let result;
if (a > 0) {
    if (b > 0) {
        result = 'Both a and b are positive numbers.';
    }
    else if (b < 0) {
        result = 'a is positive, but b is negative.';
    }
    else {
        result = 'a is positive, and b is zero.';
    }
}
else if (a < 0) {
    if (b > 0) {
        result = 'a is negative, but b is positive.';
    }
    else if (b < 0) {
        result = 'Both a and b are negative numbers.';
    }
    else {
        result = 'a is negative, and b is zero.';
    }
}
else {
    if (b !== 0) {
        result = 'a is zero, but b is either positive or negative.';
    }
    else {
        result = 'Both a and b are zero.';
    }
}
console.log(result); // Output based on the values of a and b
export {};
