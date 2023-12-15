//Functions - and syntax:

// function fun_name(parameter) {
//code
// }

//function declaration
function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
  }
  greet("Tahir"); //function call
  
  
  //function declaration
  function Welcome(parameter: string) {
    console.log(`Welcome ${parameter}`);
  }
  
  Welcome("Tahir Ahmed Khan"); //function call
  
  Welcome("Batch 54");
  
  function getFavoriteNumber(): string {
    return "Value is positive";
  }
  
  // console.log(getFavoriteNumber())
  getFavoriteNumber();