#  JavaScript Calculator Function

A simple JavaScript function that performs basic arithmetic operations (`+`, `-`, `*`, `/`, `%`, `**`) with proper error handling for zero division.

---

 # Features
- Addition (`+`)
- Subtraction (`-`)
- Multiplication (`*`)
- Division (`/`) with zero denominator check
- Modulo (`%`) with zero denominator check
- Exponentiation (`**`)

---



 # Example Code
```javascript
function calculate(a, b, operator) {
    if (operator === "+") {
        return `the sum of '${a}' and '${b}' is ${a + b}`;
    }
    else if (operator === "-") {
        return `the subtraction of '${a}' and '${b}' is ${a - b}`;
    }
    else if (operator === "*") {
        return `the multiplication of '${a}' and '${b}' is ${a * b}`;
    }
    else if (operator === "/") {
        if (b === 0) {
            return "zero cannot be the denominator";
        }
        return `the division of '${a}' and '${b}' is ${a / b}`;
    }
    else if (operator === "%") {
        if (b === 0) {
            return "zero cannot be the denominator";
        }
        return `the modulo of '${a}' and '${b}' is ${a % b}`;
    }
    else if (operator === "**") {
        return `the '${a}' power of '${b}' is ${a ** b}`;
    }
    else {
        return "enter the correct operands (+, -, *, /, %, **)";
    }
}

// Example usage:
console.log(calculate(2, 4, '+'));
console.log(calculate(10, 0, '/'));
