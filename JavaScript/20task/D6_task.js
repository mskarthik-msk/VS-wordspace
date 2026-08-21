let employees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2,
        skills: ["HTML", "CSS", "JavaScript"],
        joiningDate: new Date("2022-06-15")
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 40000,
        experience: 3,
        skills: ["Recruitment", "Communication", "Excel"],
        joiningDate: new Date("2021-08-10")

    },
    {
        id: 103,
        name: "Karthik",
        department: "IT",
        salary: 103000,
        experience: 4,
        skills: ["Java", "Selenium", "Cucumber"],
        joiningDate: new Date("2020-04-20")
    },
    {
        id: 104,
        name: "Divya",
        department: "Finance",
        salary: 55000,
        experience: 5,
        skills: ["Accounting", "Excel", "Tally"],
        joiningDate: new Date("2023-04-30")

    },
    {
        id: 105,
        name: "Rahul",
        department: "IT",
        salary: 50000,
        experience: 3,
        skills: ["React", "JavaScript", "Node.js"],
        joiningDate: new Date("2021-07-24")
    },
    {
        id: 106,
        name: "Sneha",
        department: "Marketing",
        salary: 32000,
        experience: 2,
        skills: ["SEO", "Content Writing", "Social Media"],
        joiningDate: new Date("2025-10-02")
    },
    {
        id: 107,
        name: "Vijay",
        department: "IT",
        salary: 70000,
        experience: 6,
        skills: ["Python", "AWS", "Docker"],
        joiningDate: new Date("2024-12-14")
    },
    {
        id: 108,
        name: "Anjali",
        department: "HR",
        salary: 48000,
        experience: 4,
        skills: ["Recruitment", "Payroll", "Communication"],
        joiningDate: new Date("2022-06-07")
    }
];

console.log(employees);
console.log("------- Task 1. Display all employees -------");
employees.forEach(element => {
    console.log(`ID : ${element.id}`);
    console.log(`Name : ${element.name}`);
    console.log(`Department : ${element.department}`);
    console.log(`Salary : ${element.salary}`);
    console.log(`Experience : ${element.experience}`);
    element.skills.forEach(skl =>{console.log(`Skills :- ${skl}`);})
    console.log("------------------------------------------------------------");
});

console.log("------- Task 2. Find employees -------");
console.log(employees.filter(employee => employee.salary>40000));

console.log("------- Task 3. Find a particular employee -------");
console.log(employees.find(employee=>employee.id=="102"));

console.log("------- Task 4. Calculate total salary -------");
console.log(employees.reduce((total, sale) => {
    return total+sale.salary},0));

console.log("------- Task 5. Check salary condition -------");
console.log(employees.some(som=>som.salary>100000));

console.log("------- Task 6. Check experience -------");
console.log(employees.every(exp=>exp.experience>1));

console.log("------- Task 7. Sort employees -------");
console.log(employees.sort((a,b)=>b.salary-a.salary));

console.log("------- Task 8. Array manipulation -------");
// console.log(employees);
employees.push({
    id: 109,
    name: "Ravi",
    department: "IT",
    salary: 52000,
    experience: 3,
    skills: ["JavaScript", "React", "Git"]
});
console.log(employees);
console.log("Removed employee using POP()",employees.pop());
console.log(employees);
employees.unshift({
    id: 100,
    name: "Jayasri",
    department: "Scrum master",
    salary: 48000,
    experience: 2,
    skills: ["Agile knowledge", "servant leadership", "people"]
});
console.log(employees);
console.log("Removed employee using shift()",employees.shift());
console.log(employees);

console.log("------- Task 9. Destructuring -------");
for (let i=0; i<employees.length; i++){
let emp = employees[i]
let {name, department, salary, skills} = emp;
console.log("Name - ",name);
console.log("Department - ",department);
console.log("Salary - ",salary);
let [skill_1,skill_2,skill_3]=skills
console.log("|-->Skill-1 ",skill_1);
console.log("|-->Skill-2 ",skill_2);
console.log("|-->Skill-3 ",skill_3);
}

console.log("------- Task 10. Spread operato -------");
let single = {
    id: 109,
    name: "Ravi",
    department: "IT",
    salary: 52000,
    experience: 3,
    skills: ["JavaScript", "React", "Git"]
}
let newArr = [...employees,single]
console.log(newArr);

console.log("------- Task 11. Rest operator -------");
function added(a,...b){
    console.log("empName",a);
    console.log("empSkill",b);
}
added("karan","ok","no","yes")

console.log("------- Task 12. Functions -------");
console.log("Add employee");
let emp109={
    id: 109,
    name: "Ravi",
    department: "IT",
    salary: 52000,
    experience: 3,
    skills: ["JavaScript", "React", "Git"]
}
function empl(){
    employees.push(emp109)
    console.log(emp109);
    console.log(employees);
}empl()

console.log("Delete employee");
function dlt(id){
    let emp = employees.filter(empl=>empl.id !== id)
    console.log(id);    
    console.log(emp);    
}dlt(104)

console.log("Search employee");
function search(nam){
    let srh = employees.find(empl=>empl.name == nam)
    console.log(srh);
    console.log(nam);
}search("Karthik")

console.log("Calculate total salary");
function totsal(){
    console.log(employees.reduce((total, sale)=>{return total+sale.salary},0));    
}
totsal()

console.log("Display employees");
function emps(){
    employees.forEach(each=>console.log(each.name))
}emps()

console.log("------- Task 13. Conditional statements -------");
employees.forEach(each => {
    if(each.salary<30000 && 0<each.salary){console.log("Junior")}
    else if(each.salary<60000 && 30001<each.salary){console.log("Mid Level")}
    else if(each.salary>60000){console.log("Senior")};
})

// console.log("------- Task 14. Date -------");
//     employees.forEach(employee => {
//     console.log("Name:", employee.name);
//     console.log("Joining Year:", employee.joiningDate.getFullYear());
//     console.log("Joining Month:", employee.joiningDate.getMonth());
//     console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
// });


console.log("------- Task 15. User Input -------");
get = prompt(" Enter the Employee ID ")
function finded(get){
    console.log(employees.find(employee=>employee.id==get));
}
finded(get);

console.log("------- Task 16. Bonus Task ⭐ -------");
function one(){
employees.forEach(e=>{
    console.log(e.id)
    console.log(e.name)
    console.log(e.department)
    console.log(e.salary)
    console.log(e.experience)
    console.log(e.skills)
    // console.log(e.joiningDate.getFullYear());
})}
function two(){
employees.push({
    id: 109,
    name: "Ravi",
    department: "IT",
    salary: 52000,
    experience: 3,
    skills: ["JavaScript", "React", "Git"]})
    console.log(employees);
}

function three(){
console.log(employees.find(e=>e.name == "Ravi"));
}

function four(){
console.log(employees.filter(e=>e.salary>="100000"));
}

function five(){
console.log(employees.reduce((a,b)=>{return a+b.salary},0));
}

function six(){
console.log(employees.sort((a,b)=>a.salary-b.salary));
}

function seven(){
console.log(employees.filter(e=>e.id !== 103));
}

let choice = Number (prompt("Enter the Choice 1 to 8"))
console.log(choice);

switch (choice) {    
    case 1:
        one();
        break;

    case 2:
        two();
        break;

    case 3:
        three();
        break;

    case 4:
        four();
        break;

    case 5:
        five();
        break;

    case 6:
        sortBySalary();
        break;

    case 7:
        deleteEmployee();
        break;

    case 8:
        console.log("Exiting...");
        break;

    default:
        console.log("Invalid...");
}