console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("***************** Day 3 tasks *****************");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

//T1
// console.log("------- Task 1 — Employee Eligibility")

// let empName= prompt("Employee name");
// let empAge= prompt("Age");
// let empExp= prompt("Experience");
// let empSalary= prompt("Salary");
// console.log(empName);
// if(empAge >= 21) {
//     if(empExp >= 1 ){
//         if(empSalary >= 20000){
//             console.log("Employee is eligible");
//         }
//         else{
//             console.log("Salary is Low");
//         }
//     }else{
//         console.log("Low Experience");        
//     }
// }else{
//     console.log("Age is blow 21");
// }

//T2
console.log("------- Task 2 — ATM Withdrawal")

// let balance = 10000;
// let withdrawal = prompt("Withdrawal Amount");
// let remain = balance-withdrawal;
// if(100>withdrawal){
//     alert("Enter valid Amount")}
//     if(balance<withdrawal){
//         alert("Your balance is Low")}
//         if(withdrawal%100 != 0){
//             alert("Withdrawal amount should be a multiple of 100");}
//             else{
//                 alert(`₹${withdrawal} Withdrawal successful, \nRemaining balance: ₹${remain}`)
//             }
            
//T3
console.log("------- Task 3 — Login System with 3 Attempts")

// let crtUser = "admin";
// let crtPass = "12345"
// let limit = 3
// let atempt = true;
// while(limit && atempt > 0){
//     let inUser  = prompt("Username")
//     let inPass  = prompt("Password")
//     if(crtUser == inUser && crtPass == inPass){
//         atempt= false;
//     }else{
//         alert("username or password is Incorrect")
//         limit--
//     }
// }
// atempt?alert("Account locked"):alert("Login successful");

//T4
console.log("------- Task 4 — Student Grade System")

// let m1=Number (prompt("Math"))
// let m2=Number (prompt("English"))
// let m3=Number (prompt("Science"))
// let m4=Number (prompt("Social"))
// let m5=Number (prompt("Computer"))
// let markk= (m1+m2+m3+m4+m5)/5;
// alert(markk)
// if( 90<=markk && markk<=100){
//     alert("A Grade")
// } if (80<=markk && markk<90) {
//     alert("B Grade")
// } if (70<=markk && markk<80) {
//     alert("B Grade")
// } if (60<=markk && markk<70) {
//     alert("C Grade")
// } if (0<=markk && markk<60){
//     alert("Fail")
// } if (100<markk && markk<0){
//     alert("Invalid Mark");
// } 


//T5
console.log("------- Task 5 — Number Pattern")

let i=1
do{
    console.log(i);
    i++
}while(i<=5)
console.log("*  *  *  *  *  *");

let j=5
while(j>0)
    {console.log(j);
        j--;
    }
console.log("*  *  *  *  *  *");

let k, m="";
for(k=1; k<=5; k++){
    m+= k + " ";     // m = m + k + " ";
}
console.log(m);

console.log("*  *  *  *  *  *");


//T6
console.log("------- Task 6 — Shopping Cart")

let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];
let prices = [50000, 1000, 2000, 15000];
let o;
let total=0;
for (o=0; o<products.length; o++){
    console.log(products[o]," - ₹",prices[o]);   
    total+=prices[o];
}
console.log(`Total = ₹${total}`);

//T7
console.log("------- Task 7 — Employee Object")

let employee = {
    name: "Arun",
    empId: "STK-101",
    role: "Software Engineer",
    salary: 45000
};

for(let k in employee){
    console.log(k ," : ", employee[k]);
}
if(employee.salary >= 40000){
    console.log(`Bonus ₹5000, Your overall Salary ₹${employee.salary + 5000}`);
}else{
    console.log(`Bonus ₹3000, Your overall Salary ₹${employee.salary + 3000}`);
}

//T8
console.log("------- Task 8 — Bank Account Functions")

// let bankBal = 10000;

// function dep(amt){
//     bankBal += amt
// }
// function wit(amt){
//     bankBal -= amt    
// }
// function Cbal(){
//     console.log("Current Balance : ",bankBal);
// }

// let amt =Number (prompt("Deposit"));
// dep(amt)
//     amt =Number (prompt("Withdraw"));
// wit(amt)
// Cbal()

//T9
console.log("------- Task 9 — Callback Calculator")

function add(a,b){
    console.log(a+b);
}
function sub(a,b){
    console.log(a-b);
}
function mul(a,b){
    console.log(a*b);
}
function div(a,b){
    console.log(a/b);
}

let a=Number (prompt("A"))
let b=Number (prompt("B"))
add(a,b)
sub(a,b)
mul(a,b)
div(a,b)