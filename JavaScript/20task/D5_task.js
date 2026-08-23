//T1
console.log("------- Task Task 1: Student Details")

let name= "karthik";
let age= "25";
let department= "Computer Science";
let cgpa= "8.5";
console.warn("Normal concatenation");
    console.log("Name:" + name + "Age:" + age + "Department:" + department + "CGPA:" + cgpa);
console.warn("Comma concatenation");
    console.log("Name:",name,"Age:",age,"Department:",department,"CGPA:",cgpa);
console.warn("Template literals");
    console.log(`Name:${name}Age:${age}Department:${department}CGPA:${cgpa}`);    

//T2
console.log("------- Task Task 2: Simple Calculator")

let a = 20 
let b = 10.
console.log(`Addition : ${a+b}`);
console.log(`Subtraction : ${a-b}`);
console.log(`Multiplication : ${a*b}`);
console.log(`Division : ${a/b}`);
console.log(`Modulus : ${a%b}`);
console.log(`Power : ${a**b}`);

//T3
console.log("------- Task Task 3: Age Checker")

// let Vage= prompt("Enter Your Age");
let Vage= 25;
Vage>=18 ? console.log("Eligible to vote"):console.log("Not eligible your Below 18");


//T4
console.log("------- Task Task 4: Student Grade")
// let markk= prompt("Enter the mark");
// if( 90<=markk && markk<=100){
//     alert("A Grade")
// } else if (80<=markk && markk<90) {
//     alert("B Grade")
// } else if (70<=markk && markk<80) {
//     alert("C Grade")
// } else if (60<=markk && markk<70) {
//     alert("D Grade")
// } else if (0<=markk && markk<60){
//     alert("Fail")
// } else{
//     alert("Invalid Mark");
// }

//T5
console.log("------- Task Task 5: Login System")

// let crtUser = "admin";
// let crtPass = "12345"

// let atempt = true;
//     let inUser  = prompt("Username")
//     let inPass  = prompt("Password")
    
//     if(crtUser == inUser && crtPass == inPass){console.log("Login successful");}
//         if(crtUser != inUser && crtPass != inPass){console.log("Invalid credentials");}
//             if(crtUser !== inUser && crtPass == inPass){console.log("Incorrect Username");}
//                 if(crtPass !== inPass && crtUser == inUser){console.log("Incorrect Password");}
    

//T6
console.log("------- Task 6: ATM Withdrawal")

// let balance = 10000;
// let withdrawal = prompt("Withdrawal Amount");
// let remain = balance-withdrawal;
// if(100>withdrawal){
//     alert("Enter valid Amount")}
//     else if(balance<withdrawal){
//         alert("Your balance is Low")}
//         else if(withdrawal%100 != 0){
//             alert("Withdrawal amount should be a multiple of 100");}
//             else{
//                 alert(`₹${withdrawal} Withdrawal successful, \nRemaining balance: ₹${remain}`)
//             }

//T7
console.log("------- Task 7: Multiplication Table")

let table = Number (prompt("Input the Number"))
for (let i=1; i<=10; i++){
    console.log(`${table} x ${i} = ${table*i}`);
}

//T8
console.log("------- Task 8: Reverse Number")

let abc= 12345;
let cat=0, dog=0
// for (let index = 1; 0 < abc; index++)
while(abc>0)
    {
    cat= abc%10;
    dog= dog*10 + cat;
    abc=Math.floor(abc/10);
}
console.log(dog);

//T9
console.log("------- Task 9: OTP System")

let otp = 5555;
let count = 3, done = false;
while(count>0 && done == false){
        let inOTP = Number (prompt("OTP"))
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
        
//T10
console.log("------- Task 10: Salary Calculator")

function calculateSalary(basicSalary, bonus) {
    return basicSalary + bonus;
}

console.log(calculateSalary(30000, 5000));

//T11
console.log("------- Task 11: Calculator Function")

function add(a, b) {return a + b;}
console.log(add(10, 5));

function subtract(a, b) {return a - b;}
console.log(subtract(20, 12));

function multiply(a, b) {return a * b;}
console.log(multiply(7, 4));

function divide(a, b) {return a / b;}
console.log(divide(33, 3));

//T12
console.log("------- Task 12: Eligibility Function")

let JAge=25
let JHeight=167
let JWeight=72
if(21<=JAge)
    {if(170 <= JHeight)
        {if (70 <= JWeight) 
            {console.log("Eligible")}
        else{console.log("Not eligible")}
    }else{console.log("Not eligible")}
}else{console.log("Not eligible")}

//T13
console.log("------- Task 13: Shopping Cart")

let cart = ["Laptop", "Mouse", "Keyboard"];
let remItem = cart.indexOf("Mouse");
//1
cart.push("Monitor");
//2
cart.splice(remItem, 1);
//3
cart.unshift("Headset");
//4
cart.pop();
//5
console.log(cart);

//T14
console.log("------- Task 14: Find Maximum")

let numbers = [10, 45, 23, 89, 12, 67];
let chech  = numbers[0]
for(let i=0; i<numbers.length; i++){
    if(numbers[i]>chech){
        chech= numbers[i]
    }        
}
console.log(chech);

//T15
console.log("------- Task 15: Remove Duplicate Values")

let numberrs = [1, 2, 3, 2, 4, 1, 5];
let unique = [];
for (let i = 0; i < numberrs.length; i++) {
    if (!unique.includes(numberrs[i])) {
        unique.push(numberrs[i]);
    }
}
console.log(unique);

//T16
console.log("------- Task 16: Employee Salary Filter")

let employes = [
  {name: "Arun", salary: 30000},
  {name: "Bala", salary: 50000},
  {name: "Kumar", salary: 25000},
  {name: "Ravi", salary: 70000}
];

console.log(employes.filter(e=>e.salary>=40000));


//T17
console.log("------- Task 17: Increase Salary")

let increase= employes.map(e=>{
    if(e.salary < 40000){
        e.salary = e.salary+5000
    }else{
        e.salary += 10000
    }return e;
}
)
console.log(increase);

//T18
console.log("------- Task 18: Total Salary")

console.log(employes.reduce((total, sale) => {
    return total+sale.salary},0));

//T19
console.log("------- Task 19: Check Employee")

console.log(employes.some(e=>{e.salary>100000}));
console.log(employes.every(e=>{e.salary>=20000}));


//T20
console.log("------- Task 20: Employee Management Mini Program")

let employees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 35000
    },
    {
        id: 102,
        name: "Bala",
        department: "HR",
        salary: 45000
    },
    {
        id: 103,
        name: "Kumar",
        department: "IT",
        salary: 60000
    }
];

// 1
employees.forEach(employee => {console.log(employee.name);});

// 2
console.log(employees.filter(employee => employee.department === "IT"));

// 3
let increasedSalary = employees.map(employee => {
    return {...employee,
        salary: employee.salary * 1.10}});
console.log(increasedSalary);

// 4
console.log(employees.find(employee => employee.salary === 45000));

// 5
let totalSalary = employees.reduce((total, employee) => {
    return total + employee.salary;
}, 0);

console.log(totalSalary);

// 6
console.log(employees.some(employee => employee.salary > 50000));

// 7
console.log(employees.every(employee => employee.salary > 20000));

// 8
console.log([...employees].sort((a, b) => b.salary - a.salary));

// 9
employees.forEach(employee => {let { name, salary } = employee;
    console.log(name, salary)});

// 10
console.log([...employees]);