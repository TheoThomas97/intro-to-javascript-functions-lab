//Q2:
function isAdult(num) {
    if (num >= 18) {
       console.log("Adult")
    } else {
        console.log("minor")
    }
}

let result = isAdult(18)

//Q3:
function isCharAVowel(letter) {
    if (
       letter ==="a"||
       letter ==="e"||
       letter ==="i"||
       letter ==="o"||
       letter ==="u" 
    ) {
       return true
    } else {
       return false
    }
}


console.log(isCharAVowel("c")); 

//Q4:
function generateEmail(name,address) {
    return `${name}@${address}`
    }

console.log(generateEmail("TheoThomas", "gmail.com"))

//Q5:
function greetUser(name, ToD) {
    if (ToD === "morning") {
        return `Good morning, ${name}!`
    } else if (ToD === "afternoon") {
        return `Good afternoon, ${name}!`
    } else if (ToD === "evening") {
        return `Good evening, ${name}!`
    } else {
        return `Good night, ${name}!`
    }

}

console.log("Exercise 5 Result:", greetUser("Sam", "morning"));

//Q6:
function maxOfThree(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}




console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

//Q7:
function calculateTip(bA, tP) {
    return (bA * tP ) / 100
}




console.log('Exercise 7 Result:', calculateTip(50, 20));

//Q8:
function convertTemperature(temp, scale) {
  if (scale === "C") {
    // Celsius to Fahrenheit
    return (temp * 9/5) + 32;
  } else if (scale === "F") {
    // Fahrenheit to Celsius
    return (temp - 32) * 5/9;
  } else {
    return "Invalid scale. Use 'C' or 'F'.";
  }
}

console.log(convertTemperature(32, 'C')); // 89.6
console.log(convertTemperature(32, 'F')); // 0
console.log(convertTemperature(100, 'C')); // 212
console.log(convertTemperature(212, 'F')); // 100

//Q9:
function basicCalculator(num1, num2, operation) {
  if (operation === "add") {
    return num1 + num2;
  } else if (operation === "subtract") {
    return num1 - num2;
  } else if (operation === "multiply") {
    return num1 * num2;
  } else if (operation === "divide") {
    if (num2 === 0) {
      return "Error: Cannot divide by zero.";
    }
    return num1 / num2;
  } else {
    return "Error: Unknown operation.";
  }
}



console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));
