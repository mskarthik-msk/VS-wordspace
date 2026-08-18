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

// let atempt = true;
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
console.log("------- Task ")


//T
console.log("------- Task ")


//T
console.log("------- Task ")


//T
console.log("------- Task ")


//T
console.log("------- Task ")


//T
console.log("------- Task ")


//T
console.log("------- Task ")


//T
console.log("------- Task ")


//T
console.log("------- Task ")


//T
console.log("------- Task ")


//T
console.log("------- Task ")


//T
console.log("------- Task ")



