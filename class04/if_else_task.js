//conditional statements
// if-else - if-else if-else
//syntax
// if(condition){
//block of code
// }
let pet = "cat";
let isHungry = true;
let isThirsty = true;
//if-else
if (isHungry == true) {
    console.log(`${pet} is hungry and wants food`);
}
else {
    console.log(`${pet} is not hungry`);
}
// if if-else
if (isHungry == true) {
    console.log(`${pet} is hungry and wants food`);
}
if (isThirsty) {
    console.log(`${pet} wants milk`);
}
else {
    console.log(`Pet dont want anything`);
}
//scenario 2
let hasPass = true;
if (hasPass) {
    console.log("Welcome in class");
}
else {
    console.log("Student not allowed");
}
export {};
