//T1
console.log("------- Task 1. Salary Calculator")

function calculation(){
    let salary = 30000;
    let bonus = 5000;
    let tax = 2000;
    let tot = salary+bonus-tax;
    console.log(`Final Salary: ${tot}`);
}
calculation()

//T2
console.log("------- Task 2. Predict the Output")
    let a = 10;
    let b = a++;
    let c = ++a;
    console.log(a);
    console.log(b," b = 10, then a becomes 11");
    console.log(c," a becomes 12, then c = 12");

//T3
console.log("------- Task 3. Logical Operators")
console.log(10 > 5 && 20 < 10 || 5 === "5");
console.log(10 < 5 || 20 >= 20 && 5 == "5");
console.log(!(10 > 5));

//T4
console.log("------- Task 4. ATM Withdrawal")
let balance = 10000;
let withdrawal = 2500
let remain = balance-withdrawal;
if(100>withdrawal){
    console.log("Enter valid Amount")}
    else if(balance<withdrawal){
        console.log("Your balance is Low")}
        else if(withdrawal%100 != 0){
            console.log("Withdrawal amount should be a multiple of 100");}
            else{
                console.log(`₹${withdrawal} Withdrawal successful, \nRemaining balance: ₹${remain}`)
            }

//T5
console.log("------- Task 5. Student Grade")
let markk= 78;
if( 90<=markk && markk<=100){
    console.log("A Grade")
} else if (80<=markk && markk<90) {
    console.log("B Grade")
} else if (70<=markk && markk<80) {
    console.log("B Grade")
} else if (60<=markk && markk<70) {
    console.log("C Grade")
} else if (0<=markk && markk<60){
    console.log("Fail")
} else {
    console.log("Invalid Mark");
} 

//T6
console.log("------- Task 6. Nested Login")

// let crtUser = "admin";
// let crtPass = "12345"
// let otp = "5555";

// let check = true;
//     let inUser  = prompt("Username")
//     let inPass  = prompt("Password")
//     let inOTP  = prompt("OTP")
//     let check = false;
//     if(crtUser == inUser && crtPass == inPass){
//         check = true;
//         if(check==true && inOTP == otp){
//             console.log("Login successful")}
//             else{
//             console.log("Incorrect OTP")
//         }   
//     }else{
//         console.log("Incorret Username or Password");        
//     }

//T7
console.log("------- Task 7. Number Pattern")
for(let i=1; i<=10; i++)
{console.log(i)}

//T8
console.log("------- Task 8. Multiplication Table")
let table = 7
for (let i=1; i<=10; i++){
    console.log(`${table} x ${i} = ${table*i}`);
}

//T9
console.log("------- Task 9. Reverse Countdown")
let start = 10
while(start>0){
    console.log(start);
    start--;
}

//T10
console.log("------- Task 10. OTP System")

let otp = 1234;
let count = 3, done = false;
while(count>0 && done == false){
        let inOTP = 1234;
        if(inOTP === otp){
            console.log("OTP verified")
            done=true;
        }
        else{
            console.log("Incorrect OTP, Try again")
            count--
        }
    }
count == 0 ? console.log("Account blocked") : console.log("");

//T11
console.log("------- Task 11. Array Search")
let fruits = ["apple", "banana", "orange", "grapes", "mango"];

// every fruit
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);}

// first fruit
console.log("First fruit:", fruits[0]);

// last fruit
console.log("Last fruit:", fruits[fruits.length - 1]);


//T12
console.log("------- Task 12. Object Details")
let employee = {
    name: "Arun",
    empId: "STK-101",
    role: "Developer",
    salary: 45000
};

for( let i in employee){
    console.log(i,":",employee[i]);
}


//T13
console.log("------- Task 13. Calculator Function")
function calculator(a, b, operator) {
    switch (operator) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return a / b;
        case "%": return a % b;
        default : return "Invalid operator";
    }
}
console.log(calculator(20, 5, "+"));
console.log(calculator(20, 5, "*"));
console.log(calculator(20, 5, "-"));
console.log(calculator(20, 5, "/"));
console.log(calculator(20, 5, "%"));


//T14
console.log("------- Task 14. Employee Salary")
function salaryDetails(salary, bonus) {
    return salary + bonus}
console.log(salaryDetails(40000, 5000));


//T15
console.log("------- Task 15. Function With Default Parameter")
function employeee(name, role = "Trainee") {
    console.log(name);
    console.log(role);
}

employeee("Arun");
employeee("Kamal", "Developer");


//T16
console.log("------- Task 16. Callback Task")
function calculate(a, b, callback) {return callback(a, b);}
function add(a, b) {return a + b}
function sub(a, b) {return a - b}
function mul(a, b) {return a * b}

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, sub));
console.log(calculate(10, 5, mul));


//T17
console.log("------- Task 17. Generator Task")
function* rewards(){
    yield "₹100 Cashback";
    yield "10% Discount";
    yield "₹500 Cashback";
    yield "20% Discount";
    yield "Better Luck Next Time";
}
let reward = rewards();
console.log(reward.next().value);
console.log(reward.next().value);
console.log(reward.next().value);
console.log(reward.next().value);
console.log(reward.next().value);
console.log(reward.next().value);

//T18
console.log("------- Task 18. Spread Operator")
let frontend = ["HTML", "CSS", "JavaScript"];
let backend = ["Node", "Express", "MongoDB"];
let fullStack = [...frontend,...backend]
console.log(fullStack);


//T19
console.log("------- Task 19. Array Destructuring")
let student = ["Arun", "ECE", 8.5, "Developer"];
let [name, department, cgpa, role] = student;

console.log("Name:", name);
console.log("Department:", department);
console.log("CGPA:", cgpa);
console.log("Role:", role);

//T20
console.log("------- Task 20. Nested Object Destructuring")
let company = {
    name: "Stackly",
    employee: {
        name: "Arun",
        role: "Developer",
        salary: 50000
    }
};

let {
    employee: {
        name: employeeName,
        // role:
        salary
    }
} = company;

console.log(employeeName);
console.log(role);
console.log(salary);


//Mini Project
console.log("------- 🏆 Final Challenge — Mini Project");
let students = [
    {
        name: "Arun",
        department: "ECE",
        mark: 85
    },
    {
        name: "Kamal",
        department: "CSE",
        mark: 72
    },
    {
        name: "Livin",
        department: "ECE",
        mark: 92
    }
];


// 1. Print all students
function displayStudents() {
    for (let { name, department, mark } of students) {
        console.log(name, department, mark);
    }
}


// 2. Print only ECE students
function displayECEStudents() {
    for (let { name, department, mark } of students) {
        if (department === "ECE") {
            console.log(name, department, mark);
        }
    }
}


// 3. Find students who scored above 80
function studentsAbove80() {
    for (let { name, mark } of students) {
        if (mark > 80) {
            console.log(name, mark);
        }
    }
}


// 4. Calculate total marks
function calculateTotal() {
    let total = 0;

    for (let { mark } of students) {
        total += mark;
    }

    return total;
}


// 5. Calculate average
function calculateAverage() {
    let total = calculateTotal();
    return total / students.length;
}


// 6. Display highest mark
function highestMark() {
    let highest = students[0].mark;

    for (let { mark } of students) {
        if (mark > highest) {
            highest = mark;
        }
    }

    return highest;
}


// 7. Display lowest mark
function lowestMark() {
    let lowest = students[0].mark;

    for (let { mark } of students) {
        if (mark < lowest) {
            lowest = mark;
        }
    }

    return lowest;
}


// Calling functions
console.log("All Students:");
displayStudents();
console.log("ECE Students:");
displayECEStudents();
console.log("Students Above 80:");
studentsAbove80();

console.log("Total Marks:", calculateTotal());
console.log("Average:", calculateAverage());
console.log("Highest Mark:", highestMark());
console.log("Lowest Mark:", lowestMark());
