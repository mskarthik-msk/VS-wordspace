console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("***************** Day 2 tasks *****************");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

//T1
console.log("-------task 1. Variables – Student Details");
const stdName = "karthik";
let agee = 25;
var course = "JavaScript";
var mark = "100%";
console.log(stdName);
console.log(agee);
console.log(course);
console.log(mark);

//T2
console.log("-------task 2. User Input");
// var getName= prompt("Name")
// var getAge= prompt("Age")
// console.log(getName);
// alert(getAge)

//T3
console.log("-------task 3. Data Types");
let aa= "String"
let bb= 25;
let cc= true;
let dd= undefined;
let ee= null;
console.log(typeof aa);
console.log(typeof bb);
console.log(typeof cc);
console.log(typeof dd);
console.log(typeof ee);

//T4
console.log("-------task 4. Array – Shopping List");
let arr= ["Shirt", "Pant", "Shoes", "Watch", "Bag", "Cap"]
console.log(arr[0]);            //1st
console.log(arr[2]);            //3rd
console.log(arr[arr.length-1]); //last
console.log(arr);               //Complete

//T5
console.log("-------task 5. Object – Employee Details");
let empObj1={name:"karthik",age:25,role:"Front End Developer",salary:50000}
console.log(empObj1.name);
console.log(empObj1.age);
console.log(empObj1.role);
console.log(empObj1.salary);

//T6
console.log("-------task 6. Arithmetic Operator – Bill Calculator");
let product = 500;
let quant = 3;
var total = product*quant;
console.log(total);
console.log("Discount price",total-100);

//T7
console.log("-------task 7. Comparison Operators");
console.log("25 > 20",25 > 20);
console.log("15 < 10",15 < 10);
console.log('50 == "50"',50 == "50");
console.log('50 === "50"',50 === "50");
console.log('100 != "100"',100 != "100");
console.log('100 !== "100"',100 !== "100");

//T8
console.log("-------task 8. Logical Operators");
console.log("10>5",10>5);
console.log("20 > 15",20 > 15);
console.log("5 > 10",5 > 10);
console.log("10 > 5 && 20 > 15",10 > 5 && 20 > 15);
console.log("true|| 5 > 10",true|| 5 > 10);
console.log("------------------------------------------");

console.log("10 < 5",10 < 5);
console.log("20 >= 20",20 >= 20);
console.log('5 == "5"',5 == "5");
console.log("10 < 5 || 20 >= 20",10 < 5 || 20 >= 20);
console.log('true && 5 == "5"',true && 5 == "5");
console.log("------------------------------------------");

console.log('15 === "15"',15 === "15");
console.log('10 > 5',10 > 5);
console.log('8 < 3',8 < 3);
console.log('15 === "15" || 10 > 5',15 === "15" || 10 > 5);
console.log('true && 8 < 3',true && 8 < 3);
console.log("------------------------------------------");

console.log('20 >= 20',20 >= 20);
console.log('5 !== "5"',5 !== "5");
console.log('10 < 5',10 < 5);
console.log('20 >= 20 && 5 !== "5"',20 >= 20 && 5 !== "5");
console.log('true || 10 < 5',true || 10 < 5);
console.log("------------------------------------------");

console.log('25 < 20',25 < 20);
console.log('30 == "30"',30 == "30");
console.log('10 >= 10',10 >= 10);
console.log('25 < 20 || 30 == "30"',25 < 20 || 30 == "30");
console.log("true && 10 >= 10", true && 10 >= 10);
console.log("------------------------------------------");

//T9
console.log("-------task 9. Ternary Operator – Login");
let passwordCorrect = true;
// let passwordCorrect = false;
console.log(passwordCorrect ? "Login successful" : "Invalid password");

//T10
console.log("-------task 10. Type Casting – Marks");
let mark1 = "80";
let mark2 = "70";
let mark11 = Number(mark1)
let mark22 = Number(mark2)
let totMark = mark11+mark22;
console.log(totMark);

//T11
console.log("-------task 11. Voting Eligibility");
let VoterAge= 20;
if(VoterAge>=18){
    console.log("You can vote");    
}else{
    console.log("You cannot vote");    
}

//T12
console.log("-------task 12. Student Grade");
// let markk= prompt("Mark");
let markk= 56;
if( 90<=markk && markk<=100){
    console.log("A Grade")
} if (75<=markk && markk<90) {
    console.log("B Grade")
} if (50<=markk && markk<75) {
    console.log("C Grade")
} if (0<=markk && markk<50){
    console.log("Fail")
} if (100<markk && markk<0){
    console.log("Invalid Mark");
} 

//T13
console.log("-------task 13. Time Greeting");
let tm = 15;
if(1<tm && tm<=6){
    console.log("Early Morning");}
    if(7<=tm && tm<=12){
        console.log(" Good Morning");}
    if(13<=tm && tm<=15){
        console.log(" Good Afternoon");}
    if(16<=tm && tm<=19){
        console.log(" Good Evening");}
    if(20<=tm && tm<=24){
        console.log(" Good Night");}
    if(24<tm){
        console.log("Invalid Time");
        
    }  

//T14
console.log("-------task 14. Nested If – Job Eligibility");
let JAge=25
let JHeight=167
let JWeight=65
if(21<=JAge && JAge<=50)
{
    if(150 <= JHeight)
        {
        if (60 <= JWeight) 
            {
            console.log("Eligible for the Job");
        } else {
            console.log("Not eligible, Weigth blow 60 kg");
        }
    } else {
        console.log("Not eligible, Height blow 150 cm");
    }
} else {
    console.log("Not eligible, Age blow 21");
}

//T15
console.log("-------task 15. Switch – Traffic Light");
let trafficLight = "green";
switch(trafficLight){
    case "red" : console.log("Stop the vehicle"); break;
    case "yellow" : console.log("Get ready"); break;
    case "green" : console.log("Go"); break;
    default : console.log("Invalid traffic light");
}