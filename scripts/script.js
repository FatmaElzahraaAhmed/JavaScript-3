function loginUser() {
    var enteredUsername = prompt("Enter your username:");
    var enteredPassword = prompt("Enter your password:");

    if (enteredUsername === "admin" && enteredPassword === "421$$") {
        alert("Welcome! Login success.");
    } else {
        var errorMessage = "Incorrect ";
        if (enteredUsername !== "admin") {
            errorMessage += "username";
        }

        if (enteredPassword !== "421$$") {
            errorMessage += (enteredUsername !== "admin" ? " and " : "") + "password";
        }

        alert(errorMessage + ". Please try again.");
        loginUser();
    }
}

function calculate() {
    var firstNumber = parseFloat(prompt("Enter the first number:"));

    if (isNaN(firstNumber)) {
        alert("Invalid input for the first number. Please enter a valid number.");
        return;
    }

    var operation = prompt("Enter the operation (sum, multiply, subtract, divide, modulus):");

    var validOperations = ["sum", "multiply", "subtract", "divide", "modulus"];
    if (!validOperations.includes(operation.toLowerCase())) {
        alert("Invalid operation. Please enter a valid operation.");
        return;
    }

    var secondNumber = parseFloat(prompt("Enter the second number:"));

    if (isNaN(secondNumber)) {
        alert("Invalid input for the second number. Please enter a valid number.");
        return;
    }

    var result;

    switch (operation.toLowerCase()) {
        case "sum":
            result = firstNumber + secondNumber;
            break;
        case "multiply":
            result = firstNumber * secondNumber;
            break;
        case "subtract":
            result = firstNumber - secondNumber;
            break;
        case "divide":
            result = firstNumber / secondNumber;
            break;
        case "modulus":
            result = firstNumber % secondNumber;
            break;
        default:
            alert("Invalid operation. Please enter a valid operation.");
            return;
    }

    alert("Result: " + result);
}


function calculateMore() {
    var result = parseFloat(prompt("Enter the first number:"));

    if (isNaN(result)) {
        alert("Invalid input for the first number. Please enter a valid number.");
        return;
    }

    while (true) {
        var operation = prompt("Enter the operation (sum, multiply, subtract, divide, modulus), or 'exit' to stop:");

        if (operation.toLowerCase() === 'exit') {
            alert("Exiting the calculator. Final result: " + result);
            break;
        }

        var secondNumber = parseFloat(prompt("Enter the next number:"));

        if (isNaN(secondNumber)) {
            alert("Invalid input. Please enter a valid number.");
            continue;
        }

        switch (operation.toLowerCase()) {
            case "sum":
                result += secondNumber;
                break;
            case "multiply":
                result *= secondNumber;
                break;
            case "subtract":
                result -= secondNumber;
                break;
            case "divide":
                result /= secondNumber;
                break;
            case "modulus":
                result %= secondNumber;
                break;
            default:
                alert("Invalid operation. Please enter a valid operation.");
                break;
        }

        alert("Result: " + result);
    }
}


function calculateSumAndAverage() {
    var numberOfValues = parseInt(prompt("Enter how many numbers you want to sum:"));

    if (isNaN(numberOfValues) || numberOfValues <= 0) {
        alert("Invalid input. Please enter a valid positive number.");
        return;
    }

    var numbers = [];
    var sum = 0;

    for (var i = 0; i < numberOfValues; i++) {
        var inputValue = parseFloat(prompt("Enter number " + (i + 1) + ":"));

        if (isNaN(inputValue)) {
            alert("Invalid input. Please enter a valid number.");
            return;
        }

        numbers.push(inputValue);
        sum += inputValue;
    }

    var average = sum / numberOfValues;

    alert("Sum: " + sum + "\nAverage: " + average);
}


function phoneBookApp() {
    var contacts = [];

    while (true) {
        var operation = prompt("Enter operation ('add' or 'search'), or 'exit' to stop:");

        if (operation.toLowerCase() === 'exit') {
            alert("Exiting the phone book app.");
            break;
        }

        switch (operation.toLowerCase()) {
            case 'add':
                var name = prompt("Enter the name of the contact:");
                var phoneNumber = prompt("Enter the phone number:");

                var contact = {
                    name: name,
                    phoneNumber: phoneNumber
                };

                contacts.push(contact);
                alert("Contact added successfully!");
                break;

            case 'search':
                var searchInput = prompt("Enter something to search for (name or phone number):");
                var foundContacts = [];

                for (var i = 0; i < contacts.length; i++) {
                    var contact = contacts[i];

                    if (contact.name.toLowerCase().includes(searchInput.toLowerCase()) || contact.phoneNumber.includes(searchInput)) {
                        foundContacts.push(contact);
                    }
                }

                if (foundContacts.length > 0) {
                    var details = "";
                    for (var j = 0; j < foundContacts.length; j++) {
                        details += "Name: " + foundContacts[j].name + "\nPhone Number: " + foundContacts[j].phoneNumber + "\n\n";
                    }
                    alert("Found contact(s):\n\n" + details);
                } else {
                    alert("No matching contacts found.");
                }
                break;
            default:
                alert("Invalid operation. Please enter 'add' or 'search'.");
                break;
        }
    }
}


function areaCalculator() {
    var shape = prompt("Enter the name of the shape (circle, triangle, square, rectangle, parallelogram, trapezium, ellipse):");

    switch (shape.toLowerCase()) {
        case 'circle':
            var radius = parseFloat(prompt("Enter the radius of the circle:"));
            if (!isNaN(radius) && radius > 0) {
                var area = Math.PI * Math.pow(radius, 2);
                alert("Area of the circle: " + area);
            } else {
                alert("Invalid input for the radius. Please enter a valid positive number.");
            }
            break;

        case 'triangle':
            var base = parseFloat(prompt("Enter the base of the triangle:"));
            var height = parseFloat(prompt("Enter the height of the triangle:"));
            if (!isNaN(base) && !isNaN(height) && base > 0 && height > 0) {
                var area = 0.5 * base * height;
                alert("Area of the triangle: " + area);
            } else {
                alert("Invalid input for the base or height. Please enter valid positive numbers.");
            }
            break;

        case 'square':
            var side = parseFloat(prompt("Enter the side length of the square:"));
            if (!isNaN(side) && side > 0) {
                var area = Math.pow(side, 2);
                alert("Area of the square: " + area);
            } else {
                alert("Invalid input for the side length. Please enter a valid positive number.");
            }
            break;

        case 'rectangle':
            var length = parseFloat(prompt("Enter the length of the rectangle:"));
            var width = parseFloat(prompt("Enter the width of the rectangle:"));
            if (!isNaN(length) && !isNaN(width) && length > 0 && width > 0) {
                var area = length * width;
                alert("Area of the rectangle: " + area);
            } else {
                alert("Invalid input for the length or width. Please enter valid positive numbers.");
            }
            break;

        case 'parallelogram':
            var baseP = parseFloat(prompt("Enter the base of the parallelogram:"));
            var heightP = parseFloat(prompt("Enter the height of the parallelogram:"));
            if (!isNaN(baseP) && !isNaN(heightP) && baseP > 0 && heightP > 0) {
                var area = baseP * heightP;
                alert("Area of the parallelogram: " + area);
            } else {
                alert("Invalid input for the base or height. Please enter valid positive numbers.");
            }
            break;

        case 'trapezium':
            var base1 = parseFloat(prompt("Enter the length of the first parallel side of the trapezium:"));
            var base2 = parseFloat(prompt("Enter the length of the second parallel side of the trapezium:"));
            var heightT = parseFloat(prompt("Enter the height of the trapezium:"));
            if (!isNaN(base1) && !isNaN(base2) && !isNaN(heightT) && base1 > 0 && base2 > 0 && heightT > 0) {
                var area = 0.5 * (base1 + base2) * heightT;
                alert("Area of the trapezium: " + area);
            } else {
                alert("Invalid input for the base1, base2, or height. Please enter valid positive numbers.");
            }
            break;

        case 'ellipse':
            var semiMajorAxis = parseFloat(prompt("Enter the length of the semi-major axis of the ellipse:"));
            var semiMinorAxis = parseFloat(prompt("Enter the length of the semi-minor axis of the ellipse:"));
            if (!isNaN(semiMajorAxis) && !isNaN(semiMinorAxis) && semiMajorAxis > 0 && semiMinorAxis > 0) {
                var area = Math.PI * semiMajorAxis * semiMinorAxis;
                alert("Area of the ellipse: " + area);
            } else {
                alert("Invalid input for the semi-major axis or semi-minor axis. Please enter valid positive numbers.");
            }
            break;

        default:
            alert("Invalid shape. Please enter a valid shape.");
            break;
    }
}