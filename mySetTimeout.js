/*

        My settimout simulator function

To consider:
console.log("time", new Date().getTime());
console.log("time", new Date());
1 seg son 1.000 milliseconds
1 min son 60.000 milliseconds
1 hora son 3.600 seg y 3.600.000 milliseconds
Example of what getTime returns:
time 1657562050903 ---> 1 (distinguish am and pm)  and 657562050903 what is the time in milliseconds
time 2022-07-11T17:54:10.910Z
17 hours are 61.200.000 milliseconds
54 minutes are 3.240.000 milliseconds, etc.
*/

function mySetTimeout(cb, interval) {
  let initialTimeout = new Date().getTime();
  let intervalLapse = initialTimeout + interval;
  let breakLoop = true;
  while (breakLoop) {
    let timeVariable = new Date().getTime();
    if (intervalLapse === timeVariable) {
      breakLoop = false;
      console.log(
        "After " + interval + " milliseconds the function is executed -->"
      );
      cb();
    }
  }
}

// Testing the function with 3 seconds delay
mySetTimeout(function sum() {
  let result = 3 + 4;
  console.log("result is", result);
  return result;
}, 3000);

/*
    My setTimeout is a function that performs the same task as setTimeout 
    but we can appreciate in an imperative way how it works step by step.
*/
